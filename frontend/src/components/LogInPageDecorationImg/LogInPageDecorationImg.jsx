import cls from './LogInPageDecorationImg.module.scss';
import imageTwo from '../../images/register_img-two.png';
import imageOne from '../../images/register_img-one.png';

export const LogInPageDecorationImg = ({ ...props }) => {
  return (
    <div className={cls.imgContainer} {...props}>
      <div className={cls.wrapper}>
        <div className={cls.plug} />
        <div className={cls.figureWrapper}>
          <img className={cls.figure} src={imageTwo} alt="фоновая картинка №2" />
          <div className={cls.figureBorder} />
        </div>
        <img className={cls.image} src={imageOne} alt="фоновая картинка №1" />
      </div>
    </div>
  );
};
