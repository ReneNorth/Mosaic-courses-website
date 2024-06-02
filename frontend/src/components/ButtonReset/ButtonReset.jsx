import cls from './ButtonReset.module.scss';

export const ButtonReset = ({ placeholder, ...props }) => {
  return (
    <button
      type="button"
      className={cls.button}
      {...props}
    >
      {placeholder}
    </button>
  );
};
