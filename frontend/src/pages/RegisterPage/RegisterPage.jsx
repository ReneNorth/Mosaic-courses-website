import { NavLink } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import imageTwo from '../../images/register_img-two.png';
import imageOne from '../../images/register_img-one.png';
import cls from './RegisterPage.module.scss';
import { Button } from '../../components/Button/Button';
import { classNames } from '../../helpers/classNames';
import { InputField } from '../../components/InputField/InputField';
import { CheckBoxField } from '../../components/CheckBoxField/CheckBoxField';
import { SignHeaderLinks } from '../../components/SignHeaderLinks/SignHeaderLinks';
import useFormValidation from '../../hooks/useFormValidation';
import { registerUser } from '../../services/slices/authSlice';

export function RegisterPage() {
  const {
    errors, isValid, handleSecondPasswordChange, setIsValid,
    handleChange, handleBlur, handleChangeInRealTime, resetForm, values,
  } = useFormValidation();

  // const {
  //   userName, userEmail, userPhone, userId, isLoading, registerSucces, registerError,
  // } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch(registerUser());
  // }, [dispatch]);

  const [formTitle, setTitle] = useState('Зарегистрируйте аккаунт');
  const [stepIndex, setStepIndex] = useState('1');
  // const [formTitle, setTitle] = useState('Придумайте пароль');
  // const [stepIndex, setStepIndex] = useState('2');
  const [dataEntryStep, setDataEntryStep] = useState(true);
  const nextStep = (e) => {
    e.preventDefault();
    setIsValid(false);
    setStepIndex('2');
    setTitle('Придумайте пароль');
  };

  const sendData = (e) => {
    e.preventDefault();
    const sendData = {
      email: values.email,
      first_name: values.name,
      password: values.password,
      phone: values.phone,
      general_agreement: !!values.agree,
      markcomm_agreement: !!values.mailing,
    };
    console.log(sendData);
    dispatch(registerUser(sendData));
  };

  const subStepsDataEntry = (step) => {
    if (step === '2') {
      return (
        <>
          <div className={cls.inputsWrapper}>
            <InputField
              type="password"
              errors={errors}
              isValid={isValid}
              handleChange={handleChange}
              values={values}
            />
            <InputField
              type="repeatPassword"
              errors={errors}
              isValid={isValid}
              handleChange={handleSecondPasswordChange}
              values={values}
            />
          </div>
          <div className={cls.buttonWrapper}>
            <Button
              type="submit"
              onClick={(e) => sendData(e)}
              disabled={!isValid}
              className="fill"
              decoration="black"
            >
              Дальше
            </Button>
          </div>
        </>
      );
    }
    return (
      <>
        <div className={cls.inputsWrapper}>
          <InputField
            type="name"
            errors={errors}
            isValid={isValid}
            handleChange={handleChange}
            values={values}
          />
          <InputField
            type="email"
            errors={errors}
            isValid={isValid}
            handleChange={handleChange}
            values={values}
          />
          <InputField
            type="tel"
            errors={errors}
            isValid={isValid}
            handleChange={handleChange}
            values={values}
          />
          <CheckBoxField type="agreement" handleChange={handleChange} />
          <CheckBoxField type="mailing" handleChange={handleChange} />
        </div>
        <div className={cls.buttonWrapper}>
          <Button
            type="button"
            onClick={(e) => nextStep(e)}
            disabled={!isValid}
            className="fill"
            decoration="black"
          >
            Дальше
          </Button>
        </div>
      </>
    );
  };

  return (
    <section className={cls.section}>
      <div className={cls.decoration} />
      <div className={cls.block}>
        <form className={cls.formContainer} noValidate>
          { dataEntryStep
            && (
              <>
                <ul className={classNames(cls.list, {}, [])}>
                  <SignHeaderLinks />
                  <li className={classNames(cls.step, {}, [])}>
                    {stepIndex}
                    /4
                  </li>
                </ul>
                <h3 className={cls.title}>{formTitle}</h3>
                {subStepsDataEntry(stepIndex)}
              </>
            )}
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
