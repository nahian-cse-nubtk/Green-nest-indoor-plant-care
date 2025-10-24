import React from 'react';
import PlantCareTip from '../PlantCareTip/PlantCareTip';

const PlantCareTips = ({careTips}) => {
    return (
        <div>
            <h1 className='text-center text-4xl font-bold my-10'>Plant Care Tips</h1>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-5 p-5 mx-3 md:mx-20'>
                {
                    careTips.slice(0,9).map(plant=><PlantCareTip plant={plant}></PlantCareTip>)
                }
            </div>

        </div>
    );
};

export default PlantCareTips;