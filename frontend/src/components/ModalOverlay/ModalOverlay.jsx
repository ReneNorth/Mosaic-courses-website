import modalOverlayStyles from './ModalOverlay.module.scss';

export const ModalOverlay = ({ children, isCalendarPopupPlace }) => {
  return (
    <div
      className={modalOverlayStyles.overlay}
      id="overlay"
    >
      {children}
    </div>
  );
};
