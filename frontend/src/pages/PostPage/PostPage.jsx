import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import ReactMarkdown from 'react-markdown';
import { useLocation, useNavigate } from 'react-router-dom';

import { CardMoreContent } from '../../components/CardMoreContent/CardMoreContent';
import { Button } from '../../components/Button/Button';
import { PromoSection } from '../../components/PromoSection/PromoSection';

import { getPostById, getPostsWithTags, setCurrentPost } from '../../services/slices/postsSlice';
import cls from './PostPage.module.scss';

export const PostPage = () => {
  const { currentPost } = useSelector((state) => state.posts);
  const [isLoading, toggleLoading] = useState(true);
  const [readMorePosts, setReadMorePosts] = useState([]);
  const [image, setImage] = useState();

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const id = useLocation().pathname.replace('/blog/', '');

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth',
    });
  }, []);

  useEffect(() => {
    if (Object.keys(currentPost).length) {
      let tags = '';

      currentPost.tags.forEach((tag) => {
        tags = `${tags}&tags=${tag.slug}`;
      });

      tags = tags.slice(1);

      dispatch(getPostsWithTags(tags)).then((res) => {
        setReadMorePosts(res.payload);
      });
    }
  }, [dispatch, currentPost]);

  useEffect(() => {
    dispatch(getPostById(id)).finally(() => toggleLoading(false));
  }, [dispatch, id]);

  if (isLoading) {
    return <>Loading</>;
  }

  return (
    <>
      <section className={cls.post}>
        <PromoSection img={`${window.location.origin}/images/blog-decor.png`} isBtn={false}>
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
        <ul className={cls.list}>
          {
            readMorePosts.map((post) => {
              return (
                <li key={post.id}>
                  <CardMoreContent
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
                        onClick={() => {
                          dispatch(setCurrentPost(post));
                          navigate(`/blog/${post.id}`);
                          window.scrollTo({
                            top: 0,
                            left: 0,
                            behavior: 'smooth',
                          });
                        }}
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
