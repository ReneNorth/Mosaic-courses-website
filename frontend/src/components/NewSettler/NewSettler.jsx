import { useState } from 'react';
import styles from './NewSettler.module.scss';
import formImg from '../../images/form_header.png';
import CancelIcon from '../../images/CancelIcon';
import useFormValidation from '../../hooks/useFormValidation';

const NewSettler = ({ isOpen, setIsOpen }) => {
  const {
    errors, isValid, handleChange, handleBlur, handleChangeInRealTime, resetForm, values,
  } = useFormValidation();
  const [isResponse, setIsResponse] = useState('wait');
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
      setIsResponse('success');
      resetForm();
    }).catch(() => {
      setIsResponse('fail');
    });
  };

  return (
    <div className={`${styles.popup} ${isOpen ? `${styles.popup_open}` : ''}`}>
      {(isResponse === 'wait') && (
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
                  ? 'Имя должно быть не менее 2-х символов'
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
                pattern="(\+)([\d]){5,16}$"
                className={`${errors.phone ? `${styles.invalid}` : ''}`}
              />
              <span>
                {errors.phone
                  ? 'Номер должен начинаться со знака "+" иметь от 5 до 16 символов'
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
      ) }
      {(isResponse === 'success')
        && (
          <div className={styles.content}>
            <button onClick={() => setIsOpen(!isOpen)} type="button" aria-label="close">
              <CancelIcon />
            </button>
            <img src={formImg} alt="form header" />
            <div className={styles.content__wrapper}>
              <h2>Ваша заявка принята!</h2>
              <p>
                Мы свяжимся с вами в ближайшее время
                <br />
                Спасибо за внимание к нашей студии
              </p>
              <button type="button" onClick={() => setIsOpen(!isOpen)}>Вернуться на главную</button>

              <p>
                Рабочее время студии:
                <br />
                пн-сб — 9:00–19:00, вс — выходной
              </p>
            </div>
          </div>
        )}
      {(isResponse === 'fail') && (
        <div className={styles.content}>
          <button onClick={() => setIsOpen(!isOpen)} type="button" aria-label="close">
            <CancelIcon />
          </button>
          <img src={formImg} alt="form header" />
          <div className={styles.content__wrapper}>
            <h2>Произошла ошибка!</h2>
            <p>
              К сожалению ваша форма не отправлена.
              <br />
              Попробуйте повторить отправку позднее или позвоните нам
            </p>
            <button type="button" onClick={() => setIsOpen(!isOpen)}>Вернуться на главную</button>
            <p>
              Рабочее время студии:
              <br />
              пн-сб — 9:00–19:00, вс — выходной
            </p>
          </div>
        </div>
      ) }
    </div>
  );
};

export default NewSettler;
