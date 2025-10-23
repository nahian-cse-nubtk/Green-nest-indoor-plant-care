import { createBrowserRouter } from "react-router";
import Root from "../Components/Root/Root";
import Home from "../Pages/Home/Home";
import PlantDetails from "../Components/PlantDetails/PlantDetails";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import ForgetPassword from "../Pages/ForgetPassword/ForgetPassword";
import PrivateRoute from "./PrivateRoute/PrivateRoute";
import ProfilePage from "../Pages/ProfilePage/ProfilePage";
import UpdateProfile from "../Components/UpdateProfile/UpdateProfile";
import Plants from "../Pages/Plants/Plants";
import UserDropdown from "../Components/UserDropDown/UserDropDown";

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
        element: <PrivateRoute>
          <PlantDetails></PlantDetails>
        </PrivateRoute>,
        hydrateFallbackElement: <p>Loading...</p>
      },
      {
        path: "/login",
        Component: Login
      },
      {
        path: "/register",
        Component: Register
      },
      {
        path: "/forgetpass",
        Component: ForgetPassword
      },
      {
        path: '/profile',
        element: <PrivateRoute>
          <ProfilePage></ProfilePage>
          </PrivateRoute>
      },
      {
        path: '/update',
        element: <PrivateRoute><UpdateProfile></UpdateProfile></PrivateRoute>
      },
      {
        path:"/plants",
        Component: Plants,
        loader: ()=>fetch('/plants.json'),
        hydrateFallbackElement: <p>Loading....</p>
      },
      {
        path:'/dropdown',
        Component: UserDropdown
      }
    ],
  },
]);
