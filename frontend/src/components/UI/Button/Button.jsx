import PropTypes from 'prop-types';
import cn from 'classnames';

import cls from './Button.module.scss';

export const Button = ({ children, styleType, onClick }) => {
  return (
    <button onClick={() => onClick()} type="button" className={cn(cls.button, cls[styleType])}>
      { children }
    </button>
  );
};

Button.propTypes = {
  children: PropTypes.node.isRequired,
  styleType: PropTypes.oneOf(['fill', 'outline']).isRequired,
  onClick: PropTypes.func.isRequired,
};
