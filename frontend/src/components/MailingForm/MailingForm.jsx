import cls from './MailingForm.module.scss';

export const MailingForm = () => {
  return (
    <div className={cls.formWrapper}>
      <h4 className={cls.formTitle}>
        Будь в курсе новостей студии и получи скидку 10% на первое зянятие
      </h4>
      <form className={cls.form}>
        <input className={cls.input} type="email" placeholder="E-MAIL" />
        <button className={cls.submit} type="submit">
          Подписаться на рассылку
        </button>
      </form>
    </div>
  );
};
