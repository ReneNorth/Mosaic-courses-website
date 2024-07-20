import { useEffect } from 'react';

export const ButtonCounter = ({
  counter, setCounter, changeStatus, ...props
}) => {
  useEffect(() => {
    if (counter > 0) {
      setTimeout(() => setCounter(counter - 1), 1000);
    }
    const checkCounter = () => {
      if (counter === 0) {
        changeStatus(false);
      }
    };
    checkCounter();
  }, [changeStatus, counter, setCounter]);
  return (
    <div {...props}>
      Отправить заново
      { counter !== 0 && (
        <>
          {' '}
          00:
          {counter < 10 ? `0${counter}` : counter}
        </>
      )}
    </div>
  );
};
