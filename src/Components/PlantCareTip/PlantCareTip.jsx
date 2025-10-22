import React from 'react';

const PlantCareTip = ({plant}) => {
    return (
       <div
            key={plant.plantId}
            className="bg-white rounded-xl shadow-md p-5 hover:shadow-lg transition-shadow duration-300"
          >
            <h2 className="text-xl font-semibold text-green-800 mb-3">
              {plant.plantName}
            </h2>

            <div className="space-y-2 text-gray-700">
              <p>
                <span className="font-semibold text-green-600">Watering:</span>{" "}
                {plant.watering}
              </p>
              <p>
                <span className="font-semibold text-green-600">Sunlight:</span>{" "}
                {plant.sunlight}
              </p>
              <p>
                <span className="font-semibold text-green-600">
                  Fertilizing:
                </span>{" "}
                {plant.fertilizing}
              </p>
            </div>
          </div>
    );
};

export default PlantCareTip;