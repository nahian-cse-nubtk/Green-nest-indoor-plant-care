import { createBrowserRouter } from "react-router";
import Root from "../Components/Root/Root";
import Home from "../Pages/Home/Home";
import PlantDetails from "../Components/PlantDetails/PlantDetails";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      {
        index: true,
        Component: Home,

        loader: async () => {
          const [allPlants, plantCare,plantExperts] = await Promise.all([
            fetch("/plants.json"),
            fetch("/CareTips.json"),
            fetch("/expert.json")
          ]);

          const plants = await allPlants.json();
          const careTips = await plantCare.json();
          const experts = await plantExperts.json();

          return { plants, careTips,experts };
        },
        hydrateFallbackElement: <p>loading...</p>,
      },
      {
        path: '/plant/:id',
        loader: ()=>fetch('/plants.json'),
        Component: PlantDetails,
        hydrateFallbackElement: <p>Loading...</p>
      }
    ],
  },
]);
