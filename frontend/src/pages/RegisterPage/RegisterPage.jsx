import { NavLink } from 'react-router-dom';
import imageTwo from '../../images/register_img-two.png';
import imageOne from '../../images/register_img-one.png';
import cls from './RegisterPage.module.scss';
import { Button } from '../../components/Button/Button';
import { classNames } from '../../helpers/classNames';
import { InputField } from '../../components/InputField/InputField';
import { CheckBoxField } from '../../components/CheckBoxField/CheckBoxField';
import { SignHeaderLinks } from '../../components/SignHeaderLinks/SignHeaderLinks';
import useFormValidation from '../../hooks/useFormValidation';

export function RegisterPage() {
  const {
    errors, isValid, handleChange, handleBlur, handleChangeInRealTime, resetForm, values,
  } = useFormValidation();

  return (
    <section className={cls.section}>
      <div className={cls.decoration} />
      <div className={cls.block}>
        <form className={cls.formContainer} noValidate>
          <ul className={classNames(cls.list, {}, [])}>
            <SignHeaderLinks />
          </ul>
          <h3 className={cls.title}>Зарегистрируйте аккаунт</h3>
          <div className={cls.inputsWrapper}>
            <InputField type="name" errors={errors} isValid={isValid} handleChange={handleChange} values={values} />
            <InputField type="email" errors={errors} isValid={isValid} handleChange={handleChange} values={values} />
            <InputField type="tel" errors={errors} isValid={isValid} handleChange={handleChange} values={values} />
            <CheckBoxField type="agreement" handleChange={handleChange} />
            <CheckBoxField type="mailing" handleChange={handleChange} />
          </div>
          <div className={cls.buttonWrapper}>
            <Button
              type="submit"
              disabled={!isValid}
              className="fill"
              decoration="black"
            >
              Дальше
            </Button>
          </div>
        </form>
        <div className={cls.imgContainer}>
          <div className={cls.wrapper}>
            <div className={cls.plug} />
            <div className={cls.figureWrapper}>
              <img className={cls.figure} src={imageTwo} alt="картинка" />
              <div className={cls.figureBorder} />
            </div>
            <img className={cls.image} src={imageOne} alt="картинка" />
          </div>
        </div>
      </div>
    </section>
  );
}
