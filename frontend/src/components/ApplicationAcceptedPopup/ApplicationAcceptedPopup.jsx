import { useCallback } from 'react';
import ReactDOM from 'react-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { ModalOverlay } from '../ModalOverlay/ModalOverlay';
import applicationAcceptedPopupStyles from './ApplicationAcceptedPopup.module.scss';
import mosaicHeartImage from '../../images/heart-mosaic.png';
import { Button } from '../Button/Button';
import { setIsApplicationAcceptedPopupOpen } from '../../services/slices/popupSlice';
import { useModalClose } from '../../hooks/useModalClose';
import CloseIcon from '../../images/CloseIcon';
import { useResize } from '../../hooks/useResize';
import { ENDPOINTS } from '../../utils/consts/constants';

const ApplicationAcceptedPopup = () => {
  const dispatch = useDispatch();
  const isAuthorized = useSelector((store) => store.auth.isAuthorized);

  const { width } = useResize();
  const navigate = useNavigate();

  function handleClose() {
    dispatch(setIsApplicationAcceptedPopupOpen(false));
  }

  const handleButtonClick = useCallback(() => {
    navigate(ENDPOINTS.main);
    dispatch(setIsApplicationAcceptedPopupOpen(false));
  }, [navigate, dispatch]);

  useModalClose(handleClose);

  const modalRoot = document.getElementById('modal-root');
  if (!modalRoot) return null;

  return ReactDOM.createPortal(
    <ModalOverlay>
      <div className={applicationAcceptedPopupStyles.container}>
        <button
          type="button"
          aria-label="Кнопка закрыть"
          className={applicationAcceptedPopupStyles.closeButton}
          onClick={handleClose}
        >
          <CloseIcon />
        </button>
        <img
          src={mosaicHeartImage}
          alt="Сердечко из мозаики"
          className={applicationAcceptedPopupStyles.image}
        />
        <h2 className={applicationAcceptedPopupStyles.title}>
          {isAuthorized
            ? 'Мастер-класс забронирован'
            : 'Мы получили запрос на бронирование мастер-класса'}
        </h2>
        <p className={applicationAcceptedPopupStyles.text}>
          {isAuthorized
            ? 'Вы забронировали мастер-класс. Оплату осуществляется в студии.'
            + 'Оператор свяжется с вами в ближайшее время, для подтверждение заявки.'
            : 'Для подтверждения наш оператор свяжется с вами в ближайшее время'}
        </p>
        {isAuthorized
          && <p className={applicationAcceptedPopupStyles.text}>Спасибо за внимание к нашей студии!</p>}
        <div className={applicationAcceptedPopupStyles.buttonContainer}>
          <Button
            className="fill"
            {...(width > 664 ? { decoration: 'black' } : {})}
            fill
            onClick={handleButtonClick}
          >
            Вернуться на главную
          </Button>
        </div>
        <p className={applicationAcceptedPopupStyles.workTime}>Рабочее время студии:</p>
        <p className={applicationAcceptedPopupStyles.workTimeValue}>пн-сб — 9:00–19:00, вс — выходной</p>
      </div>
    </ModalOverlay>,
    modalRoot,
  );
};

export default ApplicationAcceptedPopup;
