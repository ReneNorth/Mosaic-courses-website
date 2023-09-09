import { useState } from 'react';
import styles from './NewSettler.module.scss';
import formImg from '../../images/form_header.png';
import CancelIcon from '../../images/CancelIcon';
import CancelIconMobile from '../../images/CancelIconMobile';
import { Button } from '../Button/Button';
import useFormValidation from '../../hooks/useFormValidation';
import { classNames } from '../../helpers/classNames';
import { api } from '../../utils/api';

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

    try {
      await api.postCallbackNumber(data);
      setIsResponse('success');
      resetForm();
    } catch {
      setIsResponse('fail');
    }
  };

  return (
    <div className={`${styles.popup} ${isOpen ? `${styles.popup_open}` : ''}`}>
      <div className={styles.overlay} onClick={() => setIsOpen(!isOpen)} />
      {(isResponse === 'wait') && (
        <form onSubmit={handleSubmit} className={styles.content} noValidate>
          <button
            onClick={() => setIsOpen(!isOpen)}
            type="button"
            aria-label="close"
            className={styles.button__close}
          >
            <div className={styles.cancel_icon}>
              <CancelIcon />
            </div>
            <div className={styles.cancel_icon_mobile}>
              <CancelIconMobile />
            </div>
          </button>
          <img className={styles.image} src={formImg} alt="form header" />
          <div className={styles.content__wrapper}>
            <h2 className={styles.title}>Закажите обратный звонок</h2>
            <p className={styles.description}>Заполните поля формы</p>
            <div className={styles.label}>
              <input
                value={values.name || ''}
                onChange={handleChange}
                type="text"
                name="name"
                maxLength="25"
                minLength="2"
                placeholder="ВАШЕ ИМЯ*"
                required
                pattern="[a-zA-Zа-яА-Я0-9ё\-\s]{2,}"
                className={classNames(styles.input, {}, [errors.name ? styles.invalid : ''])}
              />
              <span className={styles.error}>
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
                maxLength="20"
                placeholder="ТЕЛЕФОН*"
                required
                pattern="(\+)([\s\(\)\-\d]){10,20}$"
                className={classNames(styles.input, {}, [errors.name ? styles.invalid : ''])}
              />
              <span className={styles.error}>
                {errors.phone
                  ? 'Номер должен начинаться со знака "+" иметь от 10 до 15 символов'
                  : ''}
              </span>
            </div>
            <div className={styles.content__comment}>
              <p className={styles.comment_heading}>КОММЕНТАРИЙ</p>
              <textarea
                name="comment"
                maxLength="150"
                value={values.comment || ''}
                onChange={handleChange}
                className={styles.textarea}
              />
            </div>
            {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
            <label className={styles.content__checkbox}>
              <input onChange={handleChange} type="checkbox" name="agree" required />

              <span className={styles.checkbox} />
              <p className={styles.consent}>Даю согласие на обработку персональных данных</p>
            </label>
            <Button
              type="submit"
              disabled={!isValid}
              className="fill"
              decoration="black"
            >
              Заказать обратный звонок
            </Button>
          </div>
        </form>
      ) }
      {(isResponse === 'success')
        && (
          <div className={styles.content}>
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              aria-label="close"
              className={styles.button__close}
            >
              <div className={styles.cancel_icon}>
                <CancelIcon />
              </div>
              <div className={styles.cancel_icon_mobile}>
                <CancelIconMobile />
              </div>

            </button>
            <img className={styles.image} src={formImg} alt="form header" />
            <div className={styles.content__wrapper}>
              <h2 className={styles.title}>Ваша заявка принята!</h2>
              <p className={styles.description}>
                Мы свяжимся с вами в ближайшее время.
                <br />
                Спасибо за внимание к нашей студии!
              </p>
              <Button type="button" className="fill" onClick={() => setIsOpen(!isOpen)}>Вернуться на главную</Button>
              <p className={styles.hours}>
                Рабочее время студии:
                <br />
                пн-сб — 9:00–19:00, вс — выходной
              </p>
            </div>
          </div>
        )}
      {(isResponse === 'fail') && (
        <div className={styles.content}>
          <button
            onClick={() => setIsOpen(!isOpen)}
            type="button"
            aria-label="close"
            className={styles.button__close}
          >
            <div className={styles.cancel_icon}>
              <CancelIcon />
            </div>
            <div className={styles.cancel_icon_mobile}>
              <CancelIconMobile />
            </div>
          </button>
          <img className={styles.image} src={formImg} alt="form header" />
          <div className={styles.content__wrapper}>
            <h2 className={styles.title}>Произошла ошибка!</h2>
            <p className={styles.description}>
              К сожалению ваша форма не отправлена.
              <br />
              Попробуйте повторить отправку позднее или позвоните нам
            </p>
            <Button type="button" className="fill" onClick={() => setIsOpen(!isOpen)}>Вернуться на главную</Button>
            <p className={styles.hours}>
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
