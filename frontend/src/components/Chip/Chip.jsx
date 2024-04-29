import { classNames } from '../../helpers/classNames';
import cls from './Chip.module.scss';

export const Chip = ({
  children, className = '', border, active, number, fill, ...props
}) => {
  return (
    <button
      type="button"
      className={
        classNames(
          cls.chip,
          {},
          [cls[className],
            active && cls.active,
            fill && cls.fill,
            border && cls.border,
            // decoration === 'white' && cls.decorationWhite,
            // fill && cls.fillButton,
          ],
        )
      }
      {...props}
    >
      <span className={classNames(cls.filterCounter, {}, [number && cls.number])}>{number}</span>
      {children}
    </button>
  );
};
