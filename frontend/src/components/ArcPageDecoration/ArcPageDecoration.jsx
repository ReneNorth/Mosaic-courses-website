import cls from './ArcPageDecoration.module.scss';

export const ArcPageDecoration = ({ decorationImage }) => {
  return (
    <div className={cls.right}>
      <img src={`${decorationImage}`} alt="" className={cls.desktopImage} />
    </div>
  );
};
