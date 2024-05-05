import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { courses } from '../../utils/consts/mockData.js';
import { CourseCard } from '../CourseCard/CourseCard.jsx';
import cls from './MainCardsList.module.scss';
import { getAllCourses } from '../../services/slices/coursesSlice.js';
import imageNotFound from '../../images/dali.png';
import Pagination from '../Pagination/Pagination.jsx';
import { checkPosition } from '../../helpers/checkPosition.js';
import { useThrottle } from '../../hooks/useThrottle.jsx';
import { useResize } from '../../hooks/useResize.js';

export const MainCardsList = ({ setIsOpen, PageSize }) => {
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
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllCourses({ limit: PageSize, offset: currentPageOffset }));
    console.log('coursesForMobile', coursesForMobile);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dispatch, currentPageOffset]);

  useEffect(() => {
    setCoursesForMobile([...coursesForMobile, ...allCourses]);
    console.log('coursesForMobile', coursesForMobile);
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
    if (sending) {
      setHideCards(true);
    } else {
      setHideCards(false);
    }
  }, [sending]);

  // eslint-disable-next-line consistent-return, array-callback-return

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
    if ((width <= 670) && (position > 40) && (totalCount >= currentPageOffset)) {
      setCurrentPageOffset(currentPageOffset + PageSize);
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [position]);

  // const handleScroll = () => {
  //   // eslint-disable-next-line react-hooks/rules-of-hooks
  //   useThrottle(checkPosition(LogingFunction), 250);
  // };
  // useEffect(() => {
  //   window.addEventListener('scroll', handleScroll);
  //   return () => {
  //     window.removeEventListener('scroll', handleScroll);
  //   };
  // // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, []);
  // (() => {
  //   window.addEventListener('scroll', useThrottle(checkPosition(LogingFunction), 250));
  //   window.addEventListener('resize', throttle(checkPosition(LogingFunction), 250));
  // })();

  // console.log(coursesToRender);

  // useEffect(() => {
  //   window.addEventListener('scroll', handleScroll);
  //   return () => {
  //     window.removeEventListener('scroll', handleScroll);
  //   };
  // // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, []);

  window.addEventListener('scroll', useThrottle(handleScroll, 1000));
  return (
    <section className={cls.section}>
      {(coursesToRender.length || mobileCoursesToRender.length) ? (
        <>
          <ul className={cls.list}>
            {width > 670 ? coursesToRender : mobileCoursesToRender}
          </ul>
          <div className={cls.paginationWrapper}>
            <Pagination
              currentPage={currentPage}
              totalCount={totalCount}
              pageSize={PageSize}
              onPageChange={setCurrentPage}
              currentPageOffset={currentPageOffset}
              onPageChangeOffset={setCurrentPageOffset}
            />
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
