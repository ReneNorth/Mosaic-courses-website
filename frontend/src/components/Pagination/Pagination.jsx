/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import React from 'react';
import { classNames } from '../../helpers/classNames';
import cls from './Pagination.module.scss';
import { usePagination, DOTS } from '../../hooks/usePagination';
import { PaginationArrowLeft } from '../../images/PaginationArrowLeft';
import { PaginationArrowRight } from '../../images/PaginationArrowRight';

const Pagination = (props) => {
  const {
    onPageChange,
    totalCount,
    siblingCount = 1,
    currentPage,
    pageSize = 4,
    currentPageOffset,
    onPageChangeOffset,
  } = props;

  const paginationRange = usePagination({
    currentPage,
    totalCount,
    siblingCount,
    pageSize,
  });

  if (currentPage === 0 || paginationRange.length < 2) {
    return null;
  }

  const onNext = () => {
    onPageChange(currentPage + 1);
    onPageChangeOffset(currentPageOffset + pageSize);
  };

  const onPrevious = () => {
    onPageChange(currentPage - 1);
    onPageChangeOffset(currentPageOffset - pageSize);
  };

  const onPageClick = (e) => {
    e.preventDefault();
    onPageChange(+e.target.innerText);
    onPageChangeOffset((e.target.innerText - 1) * pageSize);
  };

  const lastPage = paginationRange[paginationRange.length - 1];
  return (
    <ul
      className={classNames(cls.paginationContainer, {}, [cls.paginationBar])}
    >
      <li
        className={classNames(cls.paginationItem, { }, [currentPage === 1 ? cls.disabled : ''])}
        onClick={onPrevious}
      >
        <div className={`${cls.arrow} ${cls.left}`}>
          <PaginationArrowLeft />
          Назад
        </div>
      </li>
      {paginationRange.map((pageNumber) => {
        if (pageNumber === DOTS) {
          return <li key={crypto.randomUUID()} className={`${cls.paginationItem} ${cls.dots}`}>...</li>;
        }

        return (
          <li
            key={crypto.randomUUID()}
            className={classNames(cls.paginationItem, { }, [pageNumber === currentPage ? cls.selected : ''])}
            onClick={onPageClick}
          >
            {pageNumber}
          </li>
        );
      })}
      <li
        className={classNames(cls.paginationItem, { }, [currentPage === lastPage ? cls.disabled : ''])}
        onClick={onNext}
      >
        <div className={`${cls.arrow} ${cls.right}`}>
          Далее
          <PaginationArrowRight />
        </div>
      </li>
    </ul>
  );
};

export default Pagination;
