import { useState } from 'react';
import { classNames } from '../../helpers/classNames';
import cls from './MasterclassCard.module.scss';

export const MasterclassCard = () => {
  const [isModalOpen, setModalOpen] = useState(false);

  const toggleModal = () => {
    setModalOpen(!isModalOpen);
  };
  return (
    <>
      <div className={cls.flexContainer}>
        <div>
          <p className={cls.date}>Суббота, 13 июня</p>
          <p className={cls.description}>
            Мастер-класс
          </p>
          <div className={cls.schedule}>
            <span>13 июня</span>
            <span>17:00</span>
            <span>3,5 часа</span>
          </div>
          <button type="button" className={cls.buttonPay}>
            Оплатить
          </button>
          {/* Зависимость от true/false */}
        </div>
        <div>
          <div className={cls.flexContainerForInfo}>
            <div className={cls.flexContainerForPrice}>
              <p className={cls.price}>7 000 ₽</p>
              <button
                type="button"
                onClick={toggleModal}
                className={cls.buttonPopup}
              >
                ⋮
              </button>
            </div>
            <p className={cls.teacher}>Анна Павлова</p>
          </div>
        </div>
      </div>

      {isModalOpen && (
        <div className={cls.container}>
          <div className={cls.popup}>
            <button type="button">Перенести</button>
            <button type="button">Отменить</button>
          </div>
        </div>
      )}
    </>
  );
};
