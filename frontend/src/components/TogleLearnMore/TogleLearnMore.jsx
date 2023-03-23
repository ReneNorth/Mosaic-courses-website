import React, { useState } from 'react';
import cls from './TogleLearnMore.module.scss';
// import PageDownImg from '../..images/button-learn_more.svg';

export const TogleLearnMore = () => {
  const [toggle, setToggle] = useState(true);
  return (
    <div className={cls.infoBlock}>
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
          <div className={cls.learnMore}>
            <butto
              onClick={() => setToggle(!toggle)}
              type="button"
              className={cls.btn}
            />
          </div>
          {toggle && (
            <p>
              Мы делаем рисование доступным с помощью пошаговой программы и
              вовлечённых преподавателей. Вы как ученик обязательно
              прочувствуете нашу дружескую и лёгкую атмосферу. какой-то текскт
              какой-то текскт какой-то текскт какой-то текскт какой-то текскт
              какой-то текскт какой-то текскт какой-то текскт какой-то текскт
            </p>
          )}
        </div>
      </div>
    </div>
  );
};
