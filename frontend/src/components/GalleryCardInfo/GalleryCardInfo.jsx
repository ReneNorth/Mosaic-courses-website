import React, { useEffect, useState } from 'react';
import cls from './GalleryCardInfo.module.scss';
import NewSettler from '../NewSettler/NewSettler';

export const GalleryCardInfo = ({ images }) => {
  const [isLiked, setIsLiked] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const title = 'Изготовим картину для Вас';
  const description = 'Оставьте Ваши контакты, чтобы уточнить детали';

  function handleLike() {
    setIsLiked(!isLiked);
  }

  return (
    <div className={cls.wrapper}>
      <NewSettler
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        title={title}
        description={description}
        image={images[0].link}
      />
      <div className={cls.container}>
        <div className={cls.flexContainer}>
          <h2 className={cls.title}>Название</h2>
          <div className={cls.buttonContainer}>
            <button className={cls.buttonLink} type="button" aria-label="Поделиться ссылкой" />
            <button
              className={`${cls.buttonLike} ${isLiked ? cls.buttonLikeActive : ''}`}
              onClick={handleLike}
              type="button"
              aria-label="Добавить в избранное"
            />
          </div>
        </div>
      </div>
      <div className={cls.author}>
        <span>Мозаика</span>
        <span>Работа преподавателя</span>
      </div>
      <p className={cls.price}>2000 P</p>
      <button className={cls.buttonBuyByClick} type="button" aria-label="Купить">Купить в один клик</button>
      {/* С бэка пробрасывается статус мозаики, от которого зависит текст кнопки */}
      {/* <button className={cls.button} type="button" aria-label="Добавить в корзину">Добавить в корзину</button> */}
      <button
        className={cls.button}
        type="button"
        onClick={() => setIsOpen(true)}
        aria-label="Заказать изготовление"
      >
        Заказать изготовление
      </button>
      {/* <button className={cls.button} type="button" aria-label="Выбрать занятие">Выбрать занятие</button> */}
      <table className={cls.table}>
        <tr className={cls.tableCell}>
          <td className={cls.tableTitle}>Автор</td>
          <td className={cls.tableText}>Анна Илларионова</td>
        </tr>
        <tr className={cls.tableCell}>
          <td className={cls.tableTitle}>Размер</td>
          <td className={cls.tableText}>80х80см</td>
        </tr>
        <tr className={cls.tableCell}>
          <td className={cls.tableTitle}>Материал</td>
          <td className={cls.tableText}>Натуральный камень</td>
        </tr>
      </table>
      <p className={cls.description}>Описание</p>
      <p className={cls.descriptionText}>
        Мозаичное панно, природный узор по мотивам национальных росписей. Работа смонтирована на
        деревянную основу. Цена указана без багета.
      </p>
    </div>
  );
};
