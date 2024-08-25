import cls from './ChooseCourseFinal.module.scss';
import { MainCardsList } from '../MainCardsList/MainCardsList';

export const ChooseCourseFinal = ({ setIsOpen }) => {
  return (
    <section className={cls.section}>
      <div className={cls.titleWrapper}>
        <h2 className={cls.title}>
          Выберите свой
          <span> курс</span>
        </h2>
      </div>
      <MainCardsList setIsOpen={setIsOpen} pageSize={3} />
    </section>
  );
};
