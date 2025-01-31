import cls from './ButtonReset.module.scss';

export const ButtonReset = ({ placeholder, ...props }) => {
  return (
    <button
      type="button"
      className={cls.button}
      {...props}
      data-placeholder={placeholder}
    >
      {/* {placeholder} */}
    </button>
  );
};
