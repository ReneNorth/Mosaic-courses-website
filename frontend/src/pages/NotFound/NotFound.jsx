import { Element404 } from '../../components/Element404/Element404';
import { ListOfCourses } from '../../components/ListOfCourses/ListofCourses';
import { MainCardsList } from '../../components/MainCardsList/MainCardsList';

export const NotFound = () => {
  return (
    <>
      <Element404 />
      <ListOfCourses />
      <MainCardsList type="all" />
    </>
  );
};
