import { useMemo, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { Button } from '../Button/Button';

import { useResize } from '../../hooks/useResize';
import { setCurrentPost } from '../../services/slices/postsSlice';
import cls from './PostCard.module.scss';

export const PostCard = ({ props }) => {
  const {
    title, image, preview_text: previewText, pub_date: pubDate, read_time: readTime, slug,
  } = props;
  const date = new Date();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { width } = useResize();
  date.setTime(Date.parse(pubDate));

  // eslint-disable-next-line consistent-return
  // const validImage = useMemo(() => {
  //   if (image) {
  //     return image.replace('http://web:8000', 'http://localhost/');
  //   }
  // }, [image]);

  return (
    <li className={cls.container}>
      <img className={cls.image} src={image} alt="картинка" />
      <div className={cls.titleWrapper}>
        <h3 className={cls.title}>{title}</h3>
        <div className={cls.info}>
          <p className={cls.readingTime}>
            {
              width > 550 && <>Время прочтения</>
            }
            {' '}
            {readTime}
            {' '}
            минут
          </p>
          <p className={cls.publishDate}>
            {
              width > 550 && <>Опубликовано</>
            }
            {' '}
            {date.toLocaleString().slice(0, 10)}
          </p>
        </div>
        <p className={cls.description}>
          {previewText}
        </p>
        <Button
          style={width < 550 ? { width: '100%' } : {}}
          onClick={() => {
            dispatch(setCurrentPost(props));
            navigate(`/blog/${slug}`);
          }}
          className="outline"
        >
          Узнать подробнее
        </Button>
      </div>
    </li>
  );
};
