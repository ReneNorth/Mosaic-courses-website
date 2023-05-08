import styles from './NewSettler.module.scss';
import formImg from '../../images/form_header.png';
import CancelIcon from '../../images/CancelIcon';
import useFormValidation from '../../hooks/useFormValidation';

const NewSettler = ({ isOpen, setIsOpen }) => {
  const {
    errors, isValid, handleChange, handleBlur, handleChangeInRealTime, resetForm, values,
  } = useFormValidation();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = {
      name: values.name,
      phone_num: values.phone,
      comment: values.comment,
      contact_consent: true,
    };

    await fetch('http://127.0.0.1/api/v1/feedback/', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify(data),
    }).then(() => {
      resetForm();
    });
  };

  return (
    <div className={`${styles.popup} ${isOpen ? `${styles.popup_open}` : ''}`}>
      <form onSubmit={handleSubmit} className={styles.content} noValidate>
        <button onClick={() => setIsOpen(!isOpen)} type="button" aria-label="close">
          <CancelIcon />
        </button>
        <img src={formImg} alt="form header" />
        <div className={styles.content__wrapper}>
          <h2>Закажите обратный звонок</h2>
          <p>Заполните поля формы</p>
          <div className={styles.label}>
            <input
              value={values.name || ''}
              onChange={handleChange}
              type="text"
              name="name"
              placeholder="ВАШЕ ИМЯ*"
              required
              pattern="[a-zA-Zа-яА-Я0-9ё\-\s]{2,}"
              className={`${errors.name ? `${styles.invalid}` : ''}`}
            />
            <span>
              {errors.name
                ? 'Имя должен быть не менее 2-х символов'
                : ''}
            </span>
          </div>
          <div className={styles.label}>
            <input
              value={values.phone || ''}
              onChange={handleChange}
              type="tel"
              name="phone"
              placeholder="ТЕЛЕФОН*"
              required
              pattern="^\+7\s?\(?\d{3}\)?\s?\d{3}\s?-?\s?\d{2}\s?-?\s?\d{2}$"
              className={`${errors.phone ? `${styles.invalid}` : ''}`}
            />
            <span>
              {errors.phone
                ? 'Номер должен быть формата +7 999 999 99 99'
                : ''}
            </span>
          </div>

          <div className={styles.content__comment}>
            <p>КОММЕНТАРИЙ</p>
            <textarea name="comment" value={values.comment || ''} onChange={handleChange} />
          </div>
          {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
          <label className={styles.content__checkbox}>
            <input onChange={handleChange} type="checkbox" name="agree" required />

            <span />
            <p>Даю согласие на обработку персональных данных</p>
          </label>
          <button type="submit" disabled={!isValid}>Заказать обратный звонок</button>
        </div>
      </form>
    </div>
  );
};

export default NewSettler;
