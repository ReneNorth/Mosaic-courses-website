import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';

import { PostCard } from '../../components/PostCard/PostCard';
import { PromoSectionWithoutImage } from '../../components/PromoSectionWithoutImage/PromoSectionWithoutImage';

import desktopImage from '../../images/all-post-decor.png';
import mobileImage from '../../images/blogDecor.png';
import { getAllPosts } from '../../services/slices/postsSlice';
import cls from './BlogPage.module.scss';

export const BlogPage = () => {
  const { allPosts } = useSelector((state) => state.posts);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllPosts());
  }, [dispatch]);

  return (
    <>
      <PromoSectionWithoutImage
        title={(
          <>
            Блог про
            <span> мозаику</span>
          </>
        )}
        text="Рассказываем про жизнь школы и историю мозаики."
      />
      <section className={cls.section}>

        <ul className={cls.list}>
          {allPosts.map((item) => {
            return <PostCard key={item.id} props={{ ...item }} />;
          })}
        </ul>
      </section>

    </>
  );
};
