import React from "react";
import { CiDollar } from "react-icons/ci";
import Consultation from "../Consultation/Consultation";

const PlantDetail = ({ plant }) => {
  return (
   <div className="">
     <div className="card bg-base-100 w-200 shadow-sm p-5">
      <figure>
        <img className="w-100 h-100" src={plant.image} alt="plant image" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">
          <span>PlantName: </span>
          {plant.plantName}
        </h2>
        <div className="text-xl flex justify-between items-center">
          <div className="bg-gray-200 px-3 py-2">
            <p><span>Rating: </span>{plant.rating} M</p>
          </div>
          <div className="bg-gray-200 px-3 py-2">
            <p className="flex items-center gap-1"><span>Price: </span>
              <CiDollar></CiDollar> {plant.price}
            </p>
          </div>
        </div>
        <div className="text-xl my-2 bg-green-200 w-28 p-3">
            <p>Stock: {plant.availableStock}</p>
        </div>
        <p className="text-xl text-justify"><span className="font-bold">Description: </span>{plant.description}</p>
        <div className="card-actions justify-end">
          {/* <button className="btn btn-primary">Buy Now</button> */}
        </div>
      </div>
    </div>
    <div>
        <div className="text-center text-4xl font-bold my-10"><h1>Book Consultation</h1></div>
        <Consultation></Consultation>

    </div>
   </div>
  );
};

export default PlantDetail;
