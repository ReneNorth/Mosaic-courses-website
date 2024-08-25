import cls from './Element404.module.scss';
import notFoundImg from '../../images/NotFoundElement.png';
import four from '../../images/four.png';
import zero from '../../images/zero.png';

export const Element404 = () => {
  return (
    <div className={cls.NotFoundElement}>
      <div className={cls.imgContainer}>
        <img className={cls.four} src={four} alt="элемент не найден" />
      </div>
      <div className={cls.wrapper}>
        <img
          className={cls.notFoundImg}
          src={notFoundImg}
          alt="элемент не найден"
        />
      </div>
      <img className={cls.four} src={four} alt="элемент не найден" />
    </div>
  );
};
