import { useMemo } from 'react';
import cls from './PostCard.module.scss';

export const PostCard = ({ props }) => {
  const {
    title, text, image, author,
  } = props;

  // eslint-disable-next-line consistent-return
  const validImage = useMemo(() => {
    if (image) {
      return image.replace('http://web:8000', 'http://localhost/');
    }
  }, [image]);

  return (
    <li className={cls.container}>
      <img className={cls.image} src={validImage} alt="картинка" />
      <div className={cls.titleWrapper}>
        <h3 className={cls.title}>{title}</h3>
        <p className={cls.description}>{text}</p>
        <span>{author}</span>
      </div>
    </li>
  );
};
