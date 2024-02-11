import cls from './CheckBoxField.module.scss';

export const CheckBoxField = ({
  type,
  handleChange,
  ...props
}) => {
  const CheckBoxSettings = {
    agreement: {
      name: 'agree',
      text: 'Даю согласие на обработку персональных данных',
      required: true,
    },
    print: {
      name: 'print',
      text: 'Нужен напечатанный сертификат',
      required: false,
    },
    mailing: {
      name: 'mailing',
      text: 'Я согласен получать маркетинговые и рекламные рассылки',
      required: false,
    },
  };
  return (
    // eslint-disable-next-line jsx-a11y/label-has-associated-control
    <label className={cls.content__checkbox} {...props}>
      <input
        onChange={handleChange}
        type="checkbox"
        name={CheckBoxSettings[type].name}
        required={CheckBoxSettings[type].required}
      />
      <span className={cls.checkbox} />
      <p className={cls.textMain}>{CheckBoxSettings[type].text}</p>
    </label>
  );
};
