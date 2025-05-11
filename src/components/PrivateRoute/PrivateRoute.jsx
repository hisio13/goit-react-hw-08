import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectIsLoggedIn, selectIsRefreshing } from '../../redux/auth/selectors';

const PrivateRoute = ({ component }) => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const isRefreshing = useSelector(selectIsRefreshing);

  return !isLoggedIn && !isRefreshing ? <Navigate to="/login" /> : component;
};

export default PrivateRoute;
