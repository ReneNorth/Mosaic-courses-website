import { useEffect } from 'react';

export const useModalClose = (closeModal) => {
  useEffect(() => {
    function handleOverlayClose(event) {
      if (event.target instanceof HTMLElement && (event.target.id === 'overlay')) {
        closeModal();
      }
    }

    function handleEscapeClose(event) {
      if (event.key === 'Escape') {
        closeModal();
      }
    }

    document.addEventListener('click', handleOverlayClose);
    document.addEventListener('keydown', handleEscapeClose);

    return () => {
      document.removeEventListener('click', handleOverlayClose);
      document.removeEventListener('keydown', handleEscapeClose);
    };
  });
};
