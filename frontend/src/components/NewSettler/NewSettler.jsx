import { useState } from 'react';
import styles from './NewSettler.module.scss';
import formImg from '../../images/form_header.png';
import { Button } from '../Button/Button';
import { useFormValidation } from '../../hooks/useFormValidation';
import { api } from '../../utils/api';
import CloseIcon from '../../images/CloseIcon';
import { InputField } from '../InputField/InputField';
import { CheckBoxField } from '../CheckBoxField/CheckBoxField';

const NewSettler = ({ isOpen, setIsOpen }) => {
  const {
    errors, isValid, handleChange, handleBlur, handleChangeInRealTime, resetForm, values,
  } = useFormValidation();
  console.log('newsettler values', values);
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
              <CloseIcon />
            </div>
          </button>
          <img className={styles.image} src={formImg} alt="form header" />
          <div className={styles.content__wrapper}>
            <h2 className={styles.title}>Закажите обратный звонок</h2>
            <p className={styles.description}>Заполните поля формы</p>
            <InputField
              type="name"
              placeholder="Имя"
              errors={errors}
              handleChange={handleChange}
              values={values}
            />
            <InputField
              type="tel"
              placeholder="Телефон*"
              errors={errors}
              handleChange={handleChange}
              values={values}
            />
            <div className={styles.content__comment}>
              <p className={styles.comment_heading}>Комментарий</p>
              <textarea
                name="comment"
                maxLength="150"
                value={values.comment || ''}
                onChange={handleChange}
                className={styles.textarea}
              />
            </div>
            {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
            <CheckBoxField type="agreement" handleChange={handleChange} />
            <div className={styles.button__container}>
              <Button
                type="submit"
                disabled={!isValid}
                className="fill"
                decoration="black"
              >
                Заказать&nbsp;обратный&nbsp;звонок
              </Button>
            </div>
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
                <CloseIcon />
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
              <div className={styles.button__container}>
                <Button type="button" className="fill" onClick={() => setIsOpen(!isOpen)}>Вернуться на главную</Button>
              </div>
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
              <CloseIcon />
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
            <div className={styles.button__container}>
              <Button type="button" className="fill" onClick={() => setIsOpen(!isOpen)}>Вернуться на главную</Button>
            </div>
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
