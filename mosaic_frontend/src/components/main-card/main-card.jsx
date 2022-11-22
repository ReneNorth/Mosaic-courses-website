import React from "react";
import { Link } from "react-router-dom";

import defaultImg from "../../images/default-post.jpg";

import styles from "./main-card.module.css";

export const MainCard = ({
  cardId,
  title = "",
  date = "",
  image: image,
  extraClass = "",
}) => {


  return (
    <article className={`${styles.content} ${extraClass}`}>
      <Link className={styles.link} to={`blog/posts/${cardId}`}>
        <img
          className={styles.img}
          // src={image ?? defaultImg}
          src={image}
          alt="Картинка к посту"
        />
      
      <div className={styles.data_box}>
        <div className={styles.name_n_date_box}>
          <p
            className={`text text_type_h3 text_color_primary mt-8 mb-3 ${styles.name}`}
          >
            {title}
          </p>
          <p
            className={`text text_type_medium-20 text_color_secondary mb-8 ${styles.date}`}
          >
            {date}
          </p>
        </div>
        
      </div>
      </Link>
    </article>
  );
};
