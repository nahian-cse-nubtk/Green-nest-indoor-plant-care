import React from 'react';
import { useLoaderData } from 'react-router';
import Plant from '../../Components/Plant/Plant';

const Plants = () => {
    const plantsData =useLoaderData();
    console.log(plantsData)
    return (
        <div>
        <h1 className='text-center text-4xl font-bold my-5'>All Indoor Plants</h1>
        <div className='grid grid-cols-1 md:grid-cols-3 mx-3 md:mx-20 gap-3 my-10'>
            {
                plantsData.map(plant=><Plant plant={plant}></Plant>)
            }
        </div>


        </div>
    );
};

export default Plants;