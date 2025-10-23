import React, { useContext } from 'react';
import AuthContext from '../../Provider/AuthContext/AuthContext';
import { Navigate, useLocation } from 'react-router';
import Loading from '../../Components/Loading/Loading';

const PrivateRoute = ({children}) => {
    const location =useLocation();
    //console.log(location);
   const {user,loading}=useContext(AuthContext)

   if(loading){
    return <Loading></Loading>
   }

   if(user){
    return children;

   }
   return <Navigate state={location.pathname} to="/login"></Navigate>
};
export default PrivateRoute;