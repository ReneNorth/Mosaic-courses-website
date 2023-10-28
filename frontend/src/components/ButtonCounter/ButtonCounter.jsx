import { useState, useEffect } from 'react';
import { classNames } from '../../helpers/classNames';
import cls from './ButtonCounter.module.scss';

export const ButtonCounter = ({ counter, setCounter, changeStatus }) => {
  // const [counter, setCounter] = useState(30);

  useEffect(() => {
    // eslint-disable-next-line no-unused-expressions
    counter > 0 && setTimeout(() => setCounter(counter - 1), 1000);
    const checkCounter = () => {
      if (counter === 0) {
        changeStatus(false);
      }
    };
    checkCounter();
  }, [changeStatus, counter, setCounter]);
  return (
    <>
      Отправить заново
      {' '}
      { counter !== 0 && (
        <>
          00:
          {counter < 10 ? `0${counter}` : counter}
        </>
      )}
    </>
  );
};
