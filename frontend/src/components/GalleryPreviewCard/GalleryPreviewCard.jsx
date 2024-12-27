import { useState } from 'react';
import image from '../../images/ameli.png';
import cls from './GalleryPreviewCard.module.scss';

const GalleryPreviewCard = ({ title, author }) => {
  const [isLiked, setIsLiked] = useState(false);

  function handleLike() {
    setIsLiked(!isLiked);
  }

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
    </div>
  );
};

export default GalleryPreviewCard;
