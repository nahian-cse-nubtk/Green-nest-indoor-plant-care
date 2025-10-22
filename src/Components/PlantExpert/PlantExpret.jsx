import React from "react";

const PlantExpret = ({ expert }) => {
  return (
    <div className="card bg-base-100 h-100 shadow-sm">
      <figure>
        <img
          src={expert.image}
          alt="expert image"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{expert.name}</h2>
        <p className="font-bold">
          {expert.specialization}
        </p>
        <div className="card-actions justify-end">
          <button className="btn btn-primary">Buy Now</button>
        </div>
      </div>
    </div>
  );
};

export default PlantExpret;
