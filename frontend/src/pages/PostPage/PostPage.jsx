import { useState, useEffect, useMemo } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import ReactMarkdown from 'react-markdown';
import { useLocation, useNavigate } from 'react-router-dom';

import { CardMoreContent } from '../../components/CardMoreContent/CardMoreContent';
import { Button } from '../../components/Button/Button';
import { PromoSection } from '../../components/PromoSection-new/PromoSection';

import { getAllPosts, getPostById, setCurrentPost } from '../../services/slices/postsSlice';
import cls from './PostPage.module.scss';
import { api } from '../../utils/api';

export const PostPage = () => {
  const { currentPost, allPosts } = useSelector((state) => state.posts);
  const [isLoading, toggleLoading] = useState(true);
  const [readMorePosts, setReadMorePosts] = useState([]);

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const slug = useLocation().pathname.replace('/blog/', '');

  // eslint-disable-next-line consistent-return
  // const validImage = useMemo(() => {
  //   if (currentPost.image) {
  //     return currentPost.image.replace('http://web:8000', 'http://localhost/');
  //   }
  // }, [currentPost]);

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth',
    });
  }, []);

  useEffect(() => {
    dispatch(getPostById(slug)).then((res) => {
      if (res.meta.requestStatus === 'fulfilled') {
        api.getRelatedPosts(slug).then((res) => {
          setReadMorePosts(res.slice(0, 3));
          toggleLoading(false);
        });
      }
    });
  }, [dispatch, slug]);

  if (isLoading) {
    return <>Loading</>;
  }

  return (
    <>
      <PromoSection
        desktopImage={currentPost.image}
        mobileImage={currentPost.image}
        title={currentPost.title}
        text={currentPost.preview_text}
        otherElements={(
          <>
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
          </>
        )}
      />
      <section className={cls.post}>
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
        <ul className={cls.list}>
          {
            readMorePosts.map((post) => {
              if (post.slug === slug) {
                return null;
              }
              return (
                <li key={post.id}>
                  <CardMoreContent
                    onClick={() => {
                      dispatch(setCurrentPost(post));
                      navigate(`/blog/${post.slug}`);
                      window.scrollTo({
                        top: 0,
                        left: 0,
                        behavior: 'smooth',
                      });
                    }}
                    srcImage={post.image}
                    title={post.title}
                    text={post.preview_text}
                    other={(
                      <p className={cls.readingTime}>
                        Время прочтения
                        {' '}
                        {post.read_time}
                        {' '}
                        минут
                      </p>
                    )}
                    button={(
                      <Button
                        className="outline"
                      >
                        Узнать подробнее
                      </Button>
                    )}
                  />
                </li>
              );
            })
          }
        </ul>
      </section>
    </>
  );
};
