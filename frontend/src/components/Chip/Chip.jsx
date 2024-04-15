import { classNames } from '../../helpers/classNames';
import cls from './Chip.module.scss';

export const Chip = ({
  children, className = '', small, active, fill, ...props
}) => {
  return (
    <button
      type="button"
      className={
        classNames(
          cls.chip,
          {},
          [cls[className],
            small && cls.small,
            active && cls.active,
            fill && cls.fill,
            // decoration === 'white' && cls.decorationWhite,
            // fill && cls.fillButton,
          ],
        )
      }
      {...props}
    >
      {children}
    </button>
  );
};
