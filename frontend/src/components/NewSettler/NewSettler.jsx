import styles from './NewSettler.module.scss';
import formImg from '../../images/form_header.png';

const NewSettler = () => {
  return (
    <div className={styles.popup}>
      <form className={styles.content}>
        <img src={formImg} alt="form header" />
        <div className={styles.content__wrapper}>
          <h2>Закажите обратный звонок</h2>
          <p>Заполните поля формы</p>
          <input type="text" placeholder="ВАШЕ ИМЯ*" />
          <input type="text" placeholder="ТЕЛЕФОН*" />
          <div className={styles.content__comment}>
            <p>КОММЕНТАРИЙ</p>
            <textarea />
          </div>
          {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
          <label className={styles.content__checkbox}>
            <input type="checkbox" />
            <span />
            <p>Даю согласие на обработку персональных данных</p>
          </label>
          <button type="submit">Заказать обратный звонок </button>
        </div>
      </form>
    </div>
  );
};

export default NewSettler;
