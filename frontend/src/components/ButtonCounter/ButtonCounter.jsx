import { useState, useEffect } from 'react';
import { classNames } from '../../helpers/classNames';
import cls from './ButtonCounter.module.scss';

export const ButtonCounter = () => {
  const [counter, setCounter] = useState(30);
  useEffect(() => {
    // eslint-disable-next-line no-unused-expressions
    counter > 0 && setTimeout(() => setCounter(counter - 1), 1000);
  }, [counter]);
  return (
    <div>
      00:
      {counter < 10 ? `0${counter}` : counter}
    </div>
  );
};
