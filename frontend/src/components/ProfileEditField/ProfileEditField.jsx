import cls from './ProfileEditField.module.scss';
import { classNames } from '../../helpers/classNames';

export const ProfileEditField = ({
  title,
  fieldValue,
  isChanging,
  setIsChanging,
  children,
  secondFieldValue,
  secondTitle,
  resetCheges,
  resetErrors,
  isDisabled,
  handleSubmit,
  disabledSave,
}) => {
  return (
    <div className={classNames(cls.line, { [cls.columnLayout]: isChanging }, [])}>
      <div className={cls.column}>
        <div className={cls.dataWrapper}>
          <h3
            className={classNames(
              cls.lineTitle,
              { [cls.lineTitleActive]: isChanging },
              [],
            )}
          >
            {title}
          </h3>
          {!isChanging && <p className={cls.fieldPlaceholder}>{fieldValue}</p>}
          {isChanging && !secondFieldValue && children}
        </div>
        {secondFieldValue && (
          <div className={cls.dataWrapper}>
            <h3
              className={classNames(
                cls.secondLineTitle,
                { [cls.secondLineTitleActive]: isChanging },
                [],
              )}
            >
              {!isChanging && secondTitle}
            </h3>
            {!isChanging && (
              <p className={cls.fieldPlaceholder}>{secondFieldValue}</p>
            )}
            {isChanging && children}
          </div>
        )}
      </div>

      <div className={cls.buttons}>
        <button
          type="button"
          className={classNames(
            cls.editButton,
            { [cls.cancelButton]: isChanging },
            [],
          )}
          onClick={() => {
            setIsChanging(!isChanging);
            resetCheges();
            resetErrors();
          }}
          disabled={isDisabled}
        >
          {!isChanging ? 'Редактировать' : 'Отменить'}
        </button>

        {isChanging && (
          <button
            type="submit"
            className={cls.saveButton}
            onClick={handleSubmit}
            disabled={disabledSave}
          >
            Сохранить
          </button>
        )}
      </div>
    </div>
  );
};
