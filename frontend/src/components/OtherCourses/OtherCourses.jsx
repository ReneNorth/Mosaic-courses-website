import courseImgOne from '../../images/course-img-1.png';
import courseImgTwo from '../../images/course-img-2.png';
import courseImgThree from '../../images/course-img-3.png';
import OtherCourse from '../OtherCourse/OtherCourse';
import cls from './OtherCourses.module.scss';

export const OtherCourses = () => {
  return (
    <div className={cls.section}>
      <div className={cls.containerInfo}>
        <OtherCourse
          imagePath={courseImgOne}
          title="недельный Курс по мозаике из стекла"
          price="4000 рублей"
          duration="3 часа"
          description="Мы делаем рисование доступным с помощью пошаговой программы и вовлечённых преподавателей."
        />
        <OtherCourse
          imagePath={courseImgTwo}
          title="недельный Курс по мозаике из стекла"
          price="4000 рублей"
          duration="3 часа"
          description="Мы делаем рисование доступным с помощью пошаговой программы и вовлечённых преподавателей."
        />
        <OtherCourse
          imagePath={courseImgThree}
          title="недельный Курс по мозаике из стекла"
          price="4000 рублей"
          duration="3 часа"
          description="Мы делаем рисование доступным с помощью пошаговой программы и вовлечённых преподавателей."
        />
      </div>
    </div>
  );
};
