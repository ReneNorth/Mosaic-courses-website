import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { useLocation, useNavigate } from 'react-router-dom';

import { CardMoreContent } from '../../components/CardMoreContent/CardMoreContent';
import { Button } from '../../components/Button/Button';
import { PromoSectionWithoutImage } from '../../components/PromoSectionWithoutImage/PromoSectionWithoutImage';

import {
  getAllPosts,
  getPostById,
  setCurrentPost,
} from '../../services/slices/postsSlice';
import cls from './PostPage.module.scss';
import { getNoun } from '../../helpers/getNoun';
import { api } from '../../utils/api';
import { ENDPOINTS } from '../../utils/consts/constants';

export const PostPage = () => {
  const { currentPost, allPosts } = useSelector((state) => state.posts);
  const [isLoading, toggleLoading] = useState(true);
  const [readMorePosts, setReadMorePosts] = useState([]);

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const slug = useLocation().pathname.replace(ENDPOINTS.blog, '');

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
      <PromoSectionWithoutImage
        title={currentPost.title}
        text={currentPost.preview_text}
        otherElements={(
          <>
            <p className={cls.readingTime}>
              Время прочтения
              {currentPost.read_time}
              {getNoun(currentPost.read_time, ' минута', ' минуты', ' минут')}
            </p>
            <p className={cls.publishDate}>
              Опубликовано
              {currentPost.pub_date?.toLocaleString().slice(0, 10)}
            </p>
          </>
        )}
      />
      <section className={cls.post}>
        <div className={cls.markdown__container}>
          <ReactMarkdown
            remarkPlugins={[remarkGfm]}
            className={cls.reactMarkdown}
          >
            {currentPost.text}
          </ReactMarkdown>
          <ul className={cls.tags}>
            {currentPost.tags?.map((tag) => {
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
      <section className={cls.more__posts}>
        <h2 className={cls.title}>Связанные статьи</h2>
        <ul className={cls.list}>
          {readMorePosts?.map((post) => {
            if (post.slug === slug) {
              return null;
            }
            return (
              <li key={post.id}>
                <CardMoreContent
                  onClick={() => {
                    dispatch(setCurrentPost(post));
                    navigate(`${ENDPOINTS.blog}/${post.slug}`);
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
                      {post.read_time}
                      {getNoun(post.read_time, ' минута', ' минуты', ' минут')}
                    </p>
                  )}
                  button={<Button className="outline">Узнать подробнее</Button>}
                />
              </li>
            );
          })}
        </ul>
      </section>
    </>
  );
};
