import cls from './CertificateSection.module.scss';
import useFormValidation from '../../hooks/useFormValidation';
import { Button } from '../Button/Button';

export const CertificateSection = () => {
  const {
    errors, isValid, handleChange, resetForm, values,
  } = useFormValidation();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = {
      nameGiver: values.nameGiver,
      nameGive: values.nameGive,
      number: values.number,
      email: values.email,
      contact_consent: false,
    };

    await fetch('http://127.0.0.1/api/v1/certificate/', {
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

    <div className={cls.container}>
      <div className={cls.titleWrapper}>
        <h3 className={cls.title}>О сертификате</h3>
        {/* eslint-disable max-len */}
        <p className={cls.description}>Мы проводим мастер-классы по живописи и гончарному делу для деток и взрослых. Мы делаем рисование доступным с помощью пошаговой программы и вовлечённых преподавателей. Мы делаем рисование доступным с помощью пошаговой программы. Мы проводим мастер-классы по живописи и гончарному делу для деток и взрослых. Мы проводим мастер-классы по живописи.</p>
      </div>
      <div className={cls.certificateWrapper}>
        <h2 className={cls.titleCertificate}>
          Подарочный
          <br />
          <span className={cls.span}>сертификат</span>
        </h2>
        <form onSubmit={handleSubmit} className={cls.form} noValidate>
          <div className={cls.wrapper}>
            <div className={cls.label}>
              <input
                value={values.nameGiver || ''}
                onChange={handleChange}
                className={cls.input}
                type="name"
                name="nameGiver"
                placeholder="ОТ КОГО"
                pattern="[a-zA-Zа-яА-Я0-9ё\-\s]{2,}"
                required
              />
              <span className={cls.margin}>
                {errors.nameGiver
                  ? 'Имя должно быть не менее 2-х символов'
                  : 'ᅟ'}
              </span>
              <input
                value={values.nameGive || ''}
                onChange={handleChange}
                className={cls.input}
                type="name"
                name="nameGive"
                placeholder="КОМУ"
                pattern="[a-zA-Zа-яА-Я0-9ё\-\s]{2,}"
                required
              />
              <span className={cls.margin}>
                {errors.nameGive
                  ? 'Имя должно быть не менее 2-х символов'
                  : 'ᅟ'}
              </span>
              <input
                className={cls.input}
                value={values.number || ''}
                onChange={handleChange}
                type="number"
                name="number"
                placeholder="НОМИНАЛ"
                required
              />
            </div>
            {errors.number
              ? <span className={cls.margin}>Введите число</span>
              : <p className={cls.margin}>Минимальная сумма 1500р</p>}
            <div className={cls.btnWrapper}>
              <Button className="fill" decoration="black" type="submit" disabled={!isValid}>
                Купить сертификат
              </Button>
              <div className={cls.btnBorder} />
            </div>
          </div>
          <div className={cls.wrapper}>
            <div className={cls.label}>
              <h3>Отправить сертификат на электронную почту</h3>
              <input
                value={values.email || ''}
                onChange={handleChange}
                className={cls.input}
                type="email"
                name="email"
                placeholder="Email"
                pattern="^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-]+)(\.[a-zA-Z]{2,5}){1,2}$"
                required
              />
              {errors.email
                ? <span className={cls.margin}>Введите корректный email</span>
                : <p className={cls.margin}>Введите почту одаряемого или свою</p>}
              {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
              <label className={cls.checkbox}>
                <input type="checkbox" name="print" />
                <span />
                <p>Нужен напечатанный сертификат</p>
              </label>
              <p>Забрать сертификат можно будет в студии в рабочее время спустя 2 дня</p>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};
