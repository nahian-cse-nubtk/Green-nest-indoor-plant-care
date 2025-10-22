import React from 'react';
import Plant from '../Plant/Plant';

const TopRatedPlants = ({plants}) => {
    return (
        <div>
            <h1 className='text-center text-4xl font-bold my-5'>Top Rated Indoor Plants</h1>
            <div className='mx-10 my-5 md:mx-20 grid grid-cols-1 md:grid-cols-3 gap-10'>
                {
                    plants.slice(0,6).map(plant=><Plant plant={plant} key={plant.plantId}></Plant>)
                }
            </div>


        </div>
    );
};

export default TopRatedPlants;