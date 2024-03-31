
import { Navigate } from 'react-router-dom';
import useFetch from '../hooks/fetch.hook.js';
import { useAuthStore } from '../store/store.js';


export const ToDashboardIfAuth = ({ children }) => {
  const token = localStorage.getItem("token");
  const [{ isLoading, apiData, serverError }] = useFetch("getUserAuth", {
    headers: { Authorization: `Bearer ${token}` },
  });

  if (isLoading || serverError) {
    return children;
  }

    
if (apiData) {
    return <Navigate to={'/dashboard'} replace={true}></Navigate>;
  }

  return children;
};


export const AuthorizeUser = ( {children} ) => {
    const token = localStorage.getItem('token');
    
    if( !token ) {
        return <Navigate to={'/'} replace={true}></Navigate>;
    }

    return children;
};


export const ProtectRoute = ( {children} ) => {
    const email = useAuthStore.getState().auth.email;

    if( !email ) {
        return <Navigate to={'/login'} replace={true}></Navigate>;
    }

    return children;
};

