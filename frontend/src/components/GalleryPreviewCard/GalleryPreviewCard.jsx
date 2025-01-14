import { useState } from 'react';
import image from '../../images/ameli.png';
import cls from './GalleryPreviewCard.module.scss';

const GalleryPreviewCard = ({
  title,
  author,
  status,
  available,
}) => {
  const [isLiked, setIsLiked] = useState(false);

  function handleLike(event) {
    event.stopPropagation();
    setIsLiked((prev) => !prev);
  }

  const containerClass = available === 0 ? `${cls.button} ${cls.order}` : `${cls.button} ${cls.buy}`;
  const containerText = available === 0 ? 'Можно заказать' : 'Можно купить';

  return (
    <div className={cls.container}>
      <button
        className={`${cls.buttonLike} ${isLiked ? cls.buttonLikeActive : ''}`}
        onClick={handleLike}
        type="button"
        aria-label="Добавить в избранное"
      />
      <img className={cls.image} src={image} alt={title} />
      <p className={cls.title}>{title}</p>
      <p className={cls.author}>{author}</p>

      {status && (
        <div className={containerClass}>
          <p className={cls.text}>{containerText}</p>
        </div>
      )}
    </div>
  );
};

export default GalleryPreviewCard;
