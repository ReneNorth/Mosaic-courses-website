import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const ProtectedRoute = ({ children, isAuthorized }) => {
  const navigate = useNavigate();

  useEffect(() => {
    if (!isAuthorized) {
      navigate('/sign-in');
    }
  }, [isAuthorized, navigate]);

  return isAuthorized ? children : null;
};

export default ProtectedRoute;
