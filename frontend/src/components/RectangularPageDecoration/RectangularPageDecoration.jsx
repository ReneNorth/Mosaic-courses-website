import cls from './RectangularPageDecoration.module.scss';

export const RectangularPageDecoration = ({ ...props }) => {
  return (
    <div className={cls.decoration} {...props} />
  );
};
