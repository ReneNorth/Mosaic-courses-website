import cls from './ChooseCourseFinal.module.scss';
import { ChoiseCourse } from '../ChoiseCourse/ChoiseCourse';

export const ChooseCourseFinal = ({ setIsOpen }) => {
  return (
    <section className={cls.section}>
      <div className={cls.titleWrapper}>
        <h2 className={cls.title}>
          Выберите свой
          <span> курс</span>
        </h2>
      </div>
      <ChoiseCourse setIsOpen={setIsOpen} />
    </section>
  );
};
