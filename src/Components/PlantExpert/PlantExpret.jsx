import React from "react";

const PlantExpret = ({ expert }) => {
  return (
    <div className="card bg-base-100 h-100 shadow-sm p-4">
      <figure>
        <img
          src={expert.image}
          alt="expert image"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{expert.name}</h2>
        <p className="">
          {expert.specialization}
        </p>

      </div>
    </div>
  );
};

export default PlantExpret;
