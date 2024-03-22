import cls from './MobilePageDecoration.module.scss';

export const MobilePageDecoration = ({ decorationImage }) => {
  return (
    <div className={cls.container}>
      <img src={`${decorationImage}`} alt="" className={cls.image} />
    </div>
  );
};
