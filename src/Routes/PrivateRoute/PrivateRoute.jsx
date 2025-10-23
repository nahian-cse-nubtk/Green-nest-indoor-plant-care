import React, { useContext } from 'react';
import AuthContext from '../../Provider/AuthContext/AuthContext';
import { Navigate, useLocation } from 'react-router';

const PrivateRoute = ({children}) => {
    const location =useLocation();
    //console.log(location);
   const {user}=useContext(AuthContext)
   if(user){
    return children;
   }
   return <Navigate state={location.pathname} to="/login"></Navigate>
};
export default PrivateRoute;