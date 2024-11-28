import React, { useEffect, useState } from 'react';
import cls from './GalleryCardInfo.module.scss';

export const GalleryCardInfo = () => {
  const [isLiked, setIsLiked] = useState(false);
  function handleLike() {
    setIsLiked(!isLiked);
  }

  return (
    <>
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
      <div>
        <p>Мозаика</p>
        <p>Кто выполнил</p>
      </div>
      <p>Цена</p>
      <button type="button" aria-label="Купить">Купить в один клик</button>
      <button type="button" aria-label="Добавить в корзину">Добавить в корзину</button>
      {/* добавить нижнюю гарницу с пэддингом */}
      {/* <table>
        <tr>
          <td>Автор</td>
          <td>{}</td>
        </tr>
        <tr>
          <td>Размер</td>
          <td>{}</td>
        </tr>
        <tr>
          <td>Материал мозаики</td>
          <td>{}</td>
        </tr>
      </table> */}
      <p>Описание</p>
      <p>{}</p>
    </>
  );
};
