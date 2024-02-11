import cls from './LogInPageDecoration.module.scss';

export const LogInPageDecoration = ({ ...props }) => {
  return (
    <div className={cls.decoration} {...props} />
  );
};
