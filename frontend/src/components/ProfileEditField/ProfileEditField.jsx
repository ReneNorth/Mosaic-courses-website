import { useState } from 'react';
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
  onSave,
}) => {
  return (
    <div className={cls.line}>
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
      <button
        type="button"
        className={classNames(
          cls.editButton,
          { [cls.editButtonActive]: isChanging },
          [],
        )}
        onClick={() => {
          setIsChanging(!isChanging);
          resetCheges();
          resetErrors();
        }}
        disabled={isDisabled}
      >
        {!isChanging && 'Редактировать'}
        {isChanging && 'Отменить'}
      </button>
    </div>
  );
};
