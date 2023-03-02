import React from 'react';
import { api } from '../../services/api/api';
import { Card } from '../Card/Card';
import styles from './Main.module.css';

export const Main = () => {
  const [posts, setPosts] = React.useState([]);

  React.useEffect(() => {
    api.getAllPosts()
      .then((res) => {
        setPosts(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className={styles}>
      <ul className={styles.list}>
        {
          posts.map((item) => (
            <Card key={item.id} props={{ ...item }} />
          ))
        }
      </ul>
    </div>
  );
};
