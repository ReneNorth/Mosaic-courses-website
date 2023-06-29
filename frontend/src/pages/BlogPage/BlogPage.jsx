import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';

import { PostCard } from '../../components/PostCard/PostCard';

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
      <ul className={cls.list}>
        {allPosts.map((item) => {
          return <PostCard key={item.id} props={{ ...item }} />;
        })}
      </ul>
    </section>
  );
};
