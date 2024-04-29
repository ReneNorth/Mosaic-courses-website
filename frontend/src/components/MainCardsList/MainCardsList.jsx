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

export const MainCardsList = ({ setIsOpen, PageSize }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [currentPageOffset, setCurrentPageOffset] = useState(0);
  const [hideCards, setHideCards] = useState(true);

  const handleEnroll = () => {
    setIsOpen(true);
  };
  const { allCourses, totalCount, sending } = useSelector((state) => state.courses);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllCourses({ limit: PageSize, offset: currentPageOffset }));
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dispatch, currentPageOffset]);

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth',
    });
  }, [currentPage]);

  useEffect(() => {
    if (sending) {
      setHideCards(true);
    } else {
      setHideCards(false);
    }
  }, [sending]);

  // console.log(allCourses, currentPageOffset);
  const nullArray = [];

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

  // const LogingFunction = () => {
  //   return console.log('log');
  // };

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
  return (
    <section className={cls.section}>
      {coursesToRender.length ? (
        <>
          <ul className={cls.list}>
            {coursesToRender}
          </ul>
          <div className={cls.paginationWrapper}>
            <Pagination
              currentPage={currentPage}
              totalCount={totalCount}
              pageSize={PageSize}
              onPageChange={(page) => setCurrentPage(page)}
              currentPageOffset={currentPageOffset}
              onPageChangeOffset={(offset) => setCurrentPageOffset(offset)}
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
