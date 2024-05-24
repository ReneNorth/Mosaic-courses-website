import courseModalWrapperStyles from './CourseModalWrapper.module.scss';

const CourseModalWrapper = ({ children, handleClose }) => {
  return (
    <div className={courseModalWrapperStyles.overlay}>
      <div className={courseModalWrapperStyles.popup}>
        <button
          type="button"
          className={courseModalWrapperStyles.closeButton}
          aria-label="close"
          onClick={handleClose}
        />
        {children}
      </div>
    </div>
  );
};

export default CourseModalWrapper;
