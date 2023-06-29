import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import ReactMarkdown from 'react-markdown';
import { useLocation } from 'react-router-dom';

import image from '../../images/blog-deckor.png';
import { getPostById } from '../../services/slices/postsSlice';
import cls from './PostPage.module.scss';
import { PromoSection } from '../../components/PromoSection/PromoSection';

export const PostPage = () => {
  const { currentPost, allPosts } = useSelector((state) => state.posts);
  const [isLoading, toggleLoading] = useState(true);

  const dispatch = useDispatch();
  const id = useLocation().pathname.replace('/blog/', '');

  useEffect(() => {
    dispatch(getPostById(id)).finally(() => toggleLoading(false));
  }, [dispatch, id]);

  if (isLoading) {
    return <>Loading</>;
  }

  return (
    <>
      <section className={cls.post}>
        <PromoSection img={image} isBtn={false}>
          <h1 className={cls.title}>{currentPost.title}</h1>
          <p className={cls.previewText}>{currentPost.preview_text}</p>
          <p className={cls.readingTime}>
            Время прочтения
            {' '}
            {currentPost.read_time}
            {' '}
            минут
          </p>
          <p className={cls.publishDate}>
            Опубликовано
            {' '}
            {currentPost.pub_date.toLocaleString().slice(0, 10)}
          </p>
        </PromoSection>
        <div className={cls['markdown-container']}>
          <ReactMarkdown className={cls.reactMarkdown}>{currentPost.text}</ReactMarkdown>
          <ul className={cls.tags}>
            {currentPost.tags.map((tag) => {
              return (
                <li key={tag.id} className={cls.tag}>
                  #
                  {tag.title}
                </li>
              );
            })}
          </ul>
        </div>
      </section>
      <section className={cls['more-posts']}>
        <h2 className={cls.title}>Связанные статьи</h2>
      </section>
    </>
  );
};
