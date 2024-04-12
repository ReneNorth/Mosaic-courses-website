import { classNames } from '../../helpers/classNames';
import styles from './Button.module.scss';

export const Button = ({
  children, className = '', decoration, ...props
}) => {
  const classes = className.split(' ');
  return (
    <button
      type="button"
      className={
        classNames(
          styles.button,
          {},
          [
            styles[classes[0]],
            decoration === 'black' && styles.decoration,
            decoration === 'white' && styles.decorationWhite,
            ...classes.slice(1).map((cls) => styles[cls]),
          ],
        )
      }
      {...props}
    >
      {children}
    </button>
  );
};
