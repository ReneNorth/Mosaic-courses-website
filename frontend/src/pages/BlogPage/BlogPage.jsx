import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';

import { PostCard } from '../../components/PostCard/PostCard';
import { PromoSection } from '../../components/PromoSection/PromoSection';

import image from '../../images/all-post-deckor.png';
import { getAllPosts } from '../../services/slices/postsSlice';
import cls from './BlogPage.module.scss';

export const BlogPage = () => {
  const { allPosts } = useSelector((state) => state.posts);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllPosts());
  }, [dispatch]);

  return (
    <section className={cls.section}>
      <PromoSection img={image} isBtn={false}>
        <h1 className={cls.title}>
          Блог про
          <p>мозаику</p>
        </h1>
        <p className={cls.paragraph}>
          Единственная в Казахстане студия римской мозаики.
          Научим создавать античные шедевры на мастер-классах и украсим ваш дом оригинальными арт-объектами.
        </p>
      </PromoSection>
      <ul className={cls.list}>
        {allPosts.map((item) => {
          return <PostCard key={item.id} props={{ ...item }} />;
        })}
      </ul>
    </section>
  );
};
