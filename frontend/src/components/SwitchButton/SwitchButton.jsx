/* eslint-disable jsx-a11y/label-has-associated-control */
import cls from './SwitchButton.module.scss';
import { classNames } from '../../helpers/classNames';

export const SwitchButton = ({ isOn, handleToggle }) => {
  return (
    <div className={cls.switchButtonWrapper}>
      <input
        checked={isOn}
        onChange={handleToggle}
        className={cls.switchCheckbox}
        id="switch-button"
        type="checkbox"
      />
      <label
        className={classNames(cls.switchLabel, { [cls.switchLabelActive]: isOn }, [])}
        htmlFor="switch-button"
      >
        <span className={cls.switchButton} />
      </label>
    </div>
  );
};
