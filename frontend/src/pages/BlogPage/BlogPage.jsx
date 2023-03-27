import { PostCard } from '../../components/PostCard/PostCard';
import { useGetPostsQuery } from '../../services/Api/postsApi/postsApi';
import cls from './BlogPage.module.scss';

export const BlogPage = () => {
  const { data = [], isLoading } = useGetPostsQuery();
  return (
    <section className={cls.section}>
      <ul className={cls.list}>
        {data.map((item) => {
          return <PostCard key={item.id} props={{ ...item }} />;
        })}
      </ul>
    </section>
  );
};
