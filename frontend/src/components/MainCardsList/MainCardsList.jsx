import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { CourseCard } from '../CourseCard/CourseCard.jsx';
import cls from './MainCardsList.module.scss';
import { getAllCourses } from '../../services/slices/coursesSlice.js';
import imageNotFound from '../../images/dali.png';
import Pagination from '../Pagination/Pagination.jsx';
import { useThrottle } from '../../hooks/useThrottle.jsx';
import { useResize } from '../../hooks/useResize.js';
import { checkID } from '../../helpers/checkId.js';

export const MainCardsList = ({
  setIsOpen, pageSize, infiniteScroll, showPagination,
}) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [currentPageOffset, setCurrentPageOffset] = useState(0);
  const [hideCards, setHideCards] = useState(true);
  const [coursesForMobile, setCoursesForMobile] = useState([]);
  const [position, setPosition] = useState(0);
  const { width } = useResize();

  const handleEnroll = () => {
    setIsOpen(true);
  };
  const { allCourses, totalCount, sending } = useSelector((state) => state.courses);
  const { activeSortingStatus, activeFilters } = useSelector((state) => state.coursesFilters);
  const dispatch = useDispatch();

  useEffect(() => {
    let filterString = '';
    if (activeFilters.length) {
      activeFilters.forEach((el) => {
        filterString += `&category=${el}`;
      });
    }
    dispatch(getAllCourses({
      limit: pageSize, offset: currentPageOffset, order: activeSortingStatus, filter: filterString,
    }));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dispatch, currentPageOffset, activeSortingStatus, activeFilters]);

  useEffect(() => {
    setCoursesForMobile([]);
    setCurrentPageOffset(0);
    setCurrentPage(1);
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth',
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activeSortingStatus, activeFilters]);

  useEffect(() => {
    setCoursesForMobile([...coursesForMobile, ...checkID(coursesForMobile, allCourses)]);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [allCourses]);

  useEffect(() => {
    if (width > 670) {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth',
      });
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentPage]);

  useEffect(() => {
    setHideCards(sending);
  }, [sending]);

  const coursesToRender = allCourses.map((course) => {
    return (
      <li className={`${cls.item} ${hideCards ? cls.hideCards : ''}`} key={course.id}>
        <CourseCard
          item={course}
          handleEnroll={handleEnroll}
          handleGetMore={handleEnroll}
        />
      </li>
    );
  });

  const mobileCoursesToRender = coursesForMobile.map((course) => {
    return (
      <li className={cls.item} key={course.id}>
        <CourseCard
          item={course}
          handleEnroll={handleEnroll}
          handleGetMore={handleEnroll}
        />
      </li>
    );
  });

  function handleScroll() {
    setPosition(
      Math.round(
        ((document.documentElement.scrollTop + document.body.scrollTop)
          / (document.documentElement.scrollHeight
            - document.documentElement.clientHeight))
          * 100,
      ),
    );
  }

  useEffect(() => {
    if ((width <= 670) && (position > 40) && (totalCount >= currentPageOffset) && infiniteScroll) {
      setCurrentPageOffset(currentPageOffset + pageSize);
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [position]);

  window.addEventListener('scroll', useThrottle(handleScroll, 1000));
  return (
    <section className={cls.section}>
      {(coursesToRender.length || mobileCoursesToRender.length) ? (
        <>
          <ul className={cls.list}>
            {(infiniteScroll && width <= 670) ? mobileCoursesToRender : coursesToRender}
          </ul>
          <div className={cls.paginationWrapper}>
            {showPagination
            && (
              <Pagination
                currentPage={currentPage}
                totalCount={totalCount}
                pageSize={pageSize}
                onPageChange={setCurrentPage}
                currentPageOffset={currentPageOffset}
                onPageChangeOffset={setCurrentPageOffset}
              />
            )}
          </div>
        </>
      )
        : (
          <div className={cls.notFoundWrapper}>
            <img className={cls.notFoundImage} src={imageNotFound} alt="" />
            <h3 className={cls.notFoundTitle}>К сожалению, у нас нет курсов по такому запросу</h3>
            <p className={cls.notFoundText}>Сбросьте фильтры, и введите другие параметры выбора.</p>
          </div>
        )}
    </section>
  );
};
