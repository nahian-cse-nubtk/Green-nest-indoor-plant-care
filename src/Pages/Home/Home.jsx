import React from 'react';
import { useLoaderData } from 'react-router';
import PlantSlider from '../../Components/PlantSlider/PlantSlider';
import TopRatedPlants from '../../Components/TopRatedPlants/TopRatedPlants';
import PlantCareTips from '../../Components/PlantCareTips/PlantCareTips';
import PlantExperts from '../../Components/PlantExperts/PlantExperts';

const Home = () => {
    const {plants,careTips,experts} = useLoaderData();

    //console.log(plants);
    return (
        <div>
            <div className='p-8'>
                <PlantSlider plants={plants}></PlantSlider>
            </div>
            <div>
                <TopRatedPlants plants={plants}></TopRatedPlants>

            </div>
            <div>
                <PlantCareTips careTips={careTips}></PlantCareTips>
            </div>
            <div>
                <PlantExperts experts={experts}></PlantExperts>
            </div>

        </div>
    );
};

export default Home;