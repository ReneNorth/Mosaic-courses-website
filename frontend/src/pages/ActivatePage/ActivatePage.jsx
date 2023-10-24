import { NavLink, useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import cls from './ActivatePage.module.scss';
import { activateUser } from '../../services/slices/authSlice';

export function ActivatePage() {
  const { uid, token } = useParams();
  const {
    activateSucces,
    activateError,
  } = useSelector((state) => state.auth);

  const dispatch = useDispatch();

  useEffect(() => {
    const data = {
      uid,
      token,
    };
    dispatch(activateUser(data));
  }, [dispatch, uid, token]);
  return (
    <div className={cls.main} />
  );
}
