import { ModalOverlay } from '../ModalOverlay/ModalOverlay';
import courseModalWrapperStyles from './CourseModalWrapper.module.scss';

const CourseModalWrapper = ({ children, handleClose }) => {
  return (
    <ModalOverlay>
      <div className={courseModalWrapperStyles.popup}>
        <button
          type="button"
          className={courseModalWrapperStyles.closeButton}
          aria-label="close"
          onClick={handleClose}
        />
        {children}
      </div>
    </ModalOverlay>
  );
};

export default CourseModalWrapper;
