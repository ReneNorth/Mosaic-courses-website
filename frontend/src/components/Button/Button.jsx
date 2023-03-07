import cls from './Button.module.scss';

export const Button = (text) => {
  return (
    <button type="button" className={cls.button}>
      {text}
    </button>
  );
};
