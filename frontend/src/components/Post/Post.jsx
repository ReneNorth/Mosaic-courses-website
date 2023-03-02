import { useEffect, useState } from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import { useLocation } from 'react-router-dom';
import { api } from '../../services/api/api';
import styles from './Post.module.css';

export const Post = () => {
  const location = useLocation();

  const [post, setPost] = useState({});

  useEffect(() => {
    const id = location.pathname.slice(location.pathname.length - 1);
    api.getPost(id)
      .then((res) => {
        setPost(res);
      })
      .catch((err) => console.log(err));
  }, [location]);

  return (
    <div>
      {
        post ? (
          <div>
            <h2>{post.title}</h2>
            <p>{post.text}</p>
            <img src={post.image} alt="картинка" />
          </div>
        ) : (
          null
        )
      }
    </div>
  );
};

export default Post;
