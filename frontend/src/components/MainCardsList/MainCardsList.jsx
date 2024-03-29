import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { courses } from '../../utils/consts/mockData.js';
import { CourseCard } from '../CourseCard/CourseCard.jsx';
import cls from './MainCardsList.module.scss';
import { getAllCourses } from '../../services/slices/coursesSlice.js';
import imageNotFound from '../../images/dali.png';
import Pagination from '../Pagination/Pagination.jsx';

export const MainCardsList = ({ setIsOpen, PageSize }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [currentPageOffset, setCurrentPageOffset] = useState(0);

  const handleEnroll = () => {
    setIsOpen(true);
  };
  const { allCourses, totalCount } = useSelector((state) => state.courses);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllCourses({ limit: PageSize, offset: currentPageOffset }));
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dispatch, currentPageOffset]);

  console.log(allCourses, currentPageOffset);
  const nullArray = [];

  // eslint-disable-next-line consistent-return, array-callback-return
  const coursesToRender = allCourses.map((course) => {
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

  console.log(coursesToRender);
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
