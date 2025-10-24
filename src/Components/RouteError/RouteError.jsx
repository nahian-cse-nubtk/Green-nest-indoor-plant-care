import React from 'react';
import { useNavigate } from 'react-router';

const RouteError = () => {
    const navigate = useNavigate();
    return (
        <div className='flex flex-col justify-center items-center text-center min-h-screen space-y-3'>
            <img src="/error404.png" alt="Page Not Found" />
            <p className='text-3xl'>Opps! Page Not Found</p>
            <button className='btn bg-green-200 p-2 text-xl' onClick={()=>{navigate(-1)}}>Back</button>

        </div>
    );
};

export default RouteError;