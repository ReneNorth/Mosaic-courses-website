import { useState } from 'react';
import { Element404 } from '../../components/Element404/Element404';
import { ListOfCourses } from '../../components/ListOfCourses/ListofCourses';
import { MainCardsList } from '../../components/MainCardsList/MainCardsList';
import NewSettler from '../../components/NewSettler/NewSettler';

export const NotFound = () => {
  const [isOpen, setIsOpen] = useState(false);
  const title = 'Закажите обратный звонок';
  const description = 'Заполните поля формы';
  return (
    <>
      <NewSettler isOpen={isOpen} setIsOpen={setIsOpen} title={title} description={description} />
      <Element404 />
      <ListOfCourses />
    </>
  );
};
