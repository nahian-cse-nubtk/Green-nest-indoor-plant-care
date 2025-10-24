import React from "react";
import { CiDollar } from "react-icons/ci";
import { useNavigate } from "react-router";

const Plant = ({ plant }) => {
  //console.log(plant);
const navigate = useNavigate();
  const hanldleNavigate =()=>{
    navigate(`/plant/${plant.plantId}`)
  }
  return (
    <div className="card h-100 bg-base-100 shadow-sm p-2">
      <figure>
        <img className="object-fill"
          src={plant.image}
          alt="plant image"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{plant.plantName}</h2>
        <div className="text-xl flex justify-between items-center">
            <div className="bg-green-200 px-3 py-2 rounded-md">
            <p>{plant.rating} M</p>
            </div>
            <div className="bg-green-200 px-3 py-2 rounded-md">
            <p className="flex items-center gap-1 "><CiDollar></CiDollar> {plant.price}</p>
            </div>
        </div>
        <div className="card-actions justify-start">
          <button onClick={hanldleNavigate} className="btn bg-green-400">View Details</button>
        </div>
      </div>
    </div>
  );
};

export default Plant;
