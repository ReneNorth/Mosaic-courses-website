import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ children, isAuthorized }) => {
  return isAuthorized ? children : <Navigate to="/sign-in" />;
};

export default ProtectedRoute;
