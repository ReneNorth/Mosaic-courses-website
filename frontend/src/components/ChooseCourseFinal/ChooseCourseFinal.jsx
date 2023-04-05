import cls from './ChooseCourseFinal.module.scss';
import { ChoiseCourse } from '../ChoiseCourse/ChoiseCourse';

export const ChooseCourseFinal = () => {
  return (
    <section className={cls.section}>
      <div className={cls.titleWrapper}>
        <h2 className={cls.title}>
          Выбери свой
          <span> курс</span>
        </h2>
        <button className={cls.titleBtn} type="button">
          Смотреть все курсы
        </button>
      </div>
      <ChoiseCourse />
    </section>
  );
};
