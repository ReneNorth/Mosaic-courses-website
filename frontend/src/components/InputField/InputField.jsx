import { classNames } from '../../helpers/classNames';
import cls from './InputField.module.scss';

export const InputField = ({
  type,
  placeholder,
  errors,
  handleChange,
  values,
  onChange,
  handlePhoneValidation,
  ...props
}) => {
  const inputSettings = {
    email: {
      type: 'email',
      name: 'email',
      placeholder: 'Email*',
      pattern: '([a-zA-Z0-9_\\-\\.]+)@([a-zA-Z0-9_\\-]+)(\\.[a-zA-Z]{2,5}){1,2}',
      errorText: 'Введите корректный email',
      maxLength: '64',
      minLength: '2',
    },
    name: {
      type: 'text',
      name: 'name',
      placeholder: 'Имя*',
      pattern: '[ a-zA-Z\u0400-\u04ff]{2,}',
      errorText: 'Имя должно быть не менее 2-x символов',
      maxLength: '25',
      minLength: '2',
    },
    tel: {
      type: 'tel',
      name: 'phone',
      placeholder: 'Телефон*',
      pattern: '(\\+)([\\s\\(\\)\\-\\d]){10,20}$',
      errorText: 'Номер должен начинаться со знака "+" иметь от 10 до 20 символов',
      maxLength: '20',
      minLength: '2',
    },
    password: {
      type: 'password',
      name: 'password',
      placeholder: 'Пароль',
      errorText: 'Пароль должен быть не менее 8 символов',
      maxLength: '20',
      minLength: '8',
    },
    repeatPassword: {
      type: 'password',
      name: 'repeatPassword',
      placeholder: 'Повторите пароль',
      errorText: 'Пароли должны совпадать',
      maxLength: '20',
      minLength: '8',
    },
  };

  return (
    <div className={cls.label}>
      <input
        value={values[inputSettings[type].name] || ''}
        onChange={handleChange}
        type={inputSettings[type].type}
        name={inputSettings[type].name}
        maxLength={inputSettings[type].maxLength || ''}
        minLength={inputSettings[type].minLength || ''}
        placeholder={placeholder || inputSettings[type].placeholder}
        required
        pattern={inputSettings[type].pattern || null}
        className={classNames(cls.input, {}, [errors[inputSettings[type].name] ? cls.invalid : ''])}
        {...props}
      />
      <span className={cls.error}>
        {errors[inputSettings[type].name]
          ? `${inputSettings[type].errorText}`
          : ''}
      </span>
    </div>
  );
};
