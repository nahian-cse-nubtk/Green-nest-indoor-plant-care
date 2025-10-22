import React from 'react';
import PlantExpret from '../PlantExpert/PlantExpret';

const PlantExperts = ({experts}) => {
    //console.log(experts);
    return (
        <div>
            <h1 className='text-center text-4xl font-bold my-10'>Meet Our Green Experts</h1>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-5 my-5 mx-5 md:mx-20 '>
                {
                    experts.map((expert)=><PlantExpret key={expert.expertId} expert={expert}></PlantExpret>)
                }

            </div>
        </div>
    );
};

export default PlantExperts;