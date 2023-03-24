import React, { useState } from 'react';
import cls from './ToggleLearnMore.module.scss';

export const ToggleLearnMore = () => {
  const [toggle, setToggle] = useState(true);
  const handleClick = () => {
    setToggle(!toggle);
  };
  return (
    <div>
      <h3 className={cls.containerHeading}>Требования к ученику</h3>
      <div className={cls.sectionContainer}>
        <div className={cls.text}>
          Мы проводим мастер-классы по живописи и гончарному делу для деток и
          взрослых.
          <p>
            Мы делаем рисование доступным с помощью пошаговой программы и
            вовлечённых преподавателей. Вы как ученик обязательно прочувствуете
            нашу дружескую и лёгкую атмосферу.
          </p>
        </div>
      </div>
      <h3 className={cls.containerHeading}>О курсе</h3>
      <div className={cls.sectionContainer}>
        <div className={cls.text}>
          Мы проводим мастер-классы по живописи и гончарному делу для деток и
          взрослых.
          <p>
            Мы делаем рисование доступным с помощью пошаговой программы и
            вовлечённых преподавателей. Вы как ученик обязательно прочувствуете
            нашу дружескую и лёгкую атмосферу.
          </p>
          <div>
            <button onClick={handleClick} type="button" className={cls.btn} />

            {toggle ? (
              <></>
            ) : (
              <p>
                Мы делаем рисование доступным с помощью пошаговой программы и
                вовлечённых преподавателей. Вы как ученик обязательно
                прочувствуете нашу дружескую и лёгкую атмосферу. какой-то текскт
                какой-то текскт какой-то текскт какой-то текскт какой-то текскт
                какой-то текскт какой-то текскт какой-то текскт какой-то текскт
              </p>
            )}
          </div>{' '}
        </div>
      </div>
    </div>
  );
};
