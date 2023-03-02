// eslint-disable-next-line import/no-extraneous-dependencies
import { Link } from 'react-router-dom';
import styles from './Card.module.css';

export const Card = ({ props }) => {
  const {
    title, text, author, image, id,
  } = props;

  return (
    <li className={styles.item}>
      <Link to={`/v1/blog/posts/${id}`}>
        <img src={image} alt="пример картинки" />
        <h2 className={styles.title}>{title}</h2>
        <p>{text}</p>
        <span>{author}</span>
      </Link>
    </li>
  );
};
