import React, { useContext } from 'react';
import Navbar from '../Navbar/Navbar';
import { Outlet } from 'react-router';
import Footer from '../Footer/Footer';
import { ToastContainer } from 'react-toastify';
import AuthContext from '../../Provider/AuthContext/AuthContext';
import Loading from '../Loading/Loading';

const Root = () => {
    const{loadingNav}=useContext(AuthContext)
    return (
        <div>

            <Navbar></Navbar>
            {
                loadingNav&&<Loading></Loading>
            }
            <Outlet></Outlet>
            <Footer></Footer>
            <ToastContainer/>

        </div>
    );
};

export default Root;