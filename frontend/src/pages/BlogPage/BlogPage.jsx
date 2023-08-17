import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';

import { PostCard } from '../../components/PostCard/PostCard';
import { PromoSection } from '../../components/PromoSection-new/PromoSection';

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
      <PromoSection
        desktopImage={desktopImage}
        mobileImage={mobileImage}
        title={(
          <>
            Блог про
            <span> мозаику</span>
          </>
        )}
        text="Единственная в Казахстане студия римской мозаики.
        Научим создавать античные шедевры на мастер-классах и украсим ваш дом оригинальными арт-объектами."
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
