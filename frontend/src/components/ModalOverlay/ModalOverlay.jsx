import modalOverlayStyles from './ModalOverlay.module.scss';

export const ModalOverlay = ({ children }) => {
  return (
    <div className={modalOverlayStyles.overlay}>
      {children}
    </div>
  );
};
