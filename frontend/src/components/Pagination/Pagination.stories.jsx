/* eslint-disable react/destructuring-assignment */
import { useEffect, useState, useMemo } from 'react';
import Pagination from './Pagination';
import cls from './Pagination.module.scss';
import data from './mock-data.json';

export default {
  title: 'UI-kit/Pagination',
  component: Pagination,
  parameters: {
    docs: {
      description: {
        component: `Компонент 'Pagination'. 
        Кроме указанных ниже в документации аргументов у компонента Pagination также 
        существуют обязательные аргументы: currentPage, onPageChange, currentPageOffset, 
        onPageChangeOffset. currentPage - в данный аргумент передается переменная состояния 
        currentPage которая прокидывается в компонент Pagination. onPageChange - в данный аргумент 
        передается стрелочная функция с сетером хука useState для передачи возможности назначения переменной 
        состояния currentPage в компоненте Pagination. currentPage указывает на текущее положение пагинации. 
        Аналогично прокидываются в компонент Pagination и currentPageOffset, onPageChangeOffset. Данная переменная
        и ее сеттер служат для назначения отсчета сколько элементов массива надо пропустить перед отображением его на 
        странице. currentPageOffset используется для отправки запроса на сервер.
        `,
      },
    },
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    pageSize: {
      type: 'number',
      description: `Количество элементов для отображения на странице. 
        Это значение влияет на количество кнопок в пагинации, но не влияет на
        количество элементов отображенных из массива. Для изменения отображения количества
        данных на странице используется логика не входящая в компонент Pagination `,
      required: true,
      control: 'number',
      table: {
        defaultValue: { summary: 4 },
      },
    },
    totalCount: {
      type: 'number',
      description: `Общее количество всех элементов для отображения.
      На основании данного значения рассчитывается количество кнопок в панели пагинации.`,
      required: true,
      control: 'null',
    },
    siblingCount: {
      type: 'number',
      description: 'Количество кнопок для пагинации слева и справа от текущей позиции',
      required: false,
      control: 'number',
      table: {
        defaultValue: { summary: 1 },
      },
    },
  },
};

export function DefaultPagination(args) {
  const [currentPage, setCurrentPage] = useState(7);
  const [currentPageOffset, setCurrentPageOffset] = useState(0);

  const currentTableData = useMemo(() => {
    const firstPageIndex = (currentPage - 1) * args.pageSize;
    const lastPageIndex = firstPageIndex + args.pageSize;
    return data.slice(firstPageIndex, lastPageIndex);
  }, [currentPage, args.pageSize]);

  return (
    <div className={cls.tableStory}>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>FIRST NAME</th>
            <th>LAST NAME</th>
            <th>EMAIL</th>
            <th>PHONE</th>
          </tr>
        </thead>
        <tbody>
          {currentTableData.map((item) => {
            return (
              <tr>
                <td>{item.id}</td>
                <td>{item.first_name}</td>
                <td>{item.last_name}</td>
                <td>{item.email}</td>
                <td>{item.phone}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <div className={cls.storyWrapper}>
        <Pagination
          currentPage={currentPage}
          onPageChange={(page) => setCurrentPage(page)}
          currentPageOffset={currentPageOffset}
          onPageChangeOffset={(offset) => setCurrentPageOffset(offset)}
          {...args}
        />
      </div>
    </div>
  );
}

DefaultPagination.args = {
  pageSize: 4,
  totalCount: data.length,
  siblingCount: 2,
};
