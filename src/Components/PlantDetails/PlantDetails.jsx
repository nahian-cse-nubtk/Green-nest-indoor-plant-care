
import { useLoaderData, useParams } from "react-router";
import PlantDetail from "../PlantDetail/PlantDetail";

const PlantDetails = () => {

  const id = useParams().id;
  const loadedData = useLoaderData();

  const plant = loadedData.filter((data) => data.plantId == id);

  return (
  <div className="flex justify-center py-10 bg-green-100">
    <PlantDetail plant={plant[0]}></PlantDetail>
  </div>
  );
};

export default PlantDetails;
