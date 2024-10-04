import "./App.css";
import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { useSelector } from "react-redux";
import Layout from "./components/DefaultLayout/Layout/Layout";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Contact from "./pages/Contact/Contact";
import Login from "./pages/Login/Login";
import Signup from "./pages/Signup/Signup";
import VehicleListing from "./pages/VehicleListing/VehicleListing";
import VehicleDetails from "./components/VehicleDetails/vehicleDetails";

function App() {
  useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 900,
      easing: "ease-in-sine",
      delay: 100,
    });
    AOS.refresh();
  }, []);

  const { isUserLoggedIn } = useSelector((state) => state.auth);

  const routes = createBrowserRouter([
    {
      path: "/",
      // element: isUserLoggedIn ? <Layout /> : <Navigate to="/login" />,
      element: <Layout/>,
      children: [
        {
          index: true,
          element: <Home />,
        },
        {
          path: "about_us",
          element: <About />,
        },
        {
          path: "contact_us",
          element: <Contact />,
        },
        {
          path: "vehicles",
          element: <VehicleListing />,
        },
        {
          path: "vehicle-details", 
          element: <VehicleDetails />,   
        },
      ],
    },
    {
      path: "login",
      // element: isUserLoggedIn ? <Navigate to="/" /> : <Login />,
      element: <Login />,
    },
    {
      path: "signup",
      // element: isUserLoggedIn ? <Navigate to="/" /> : <Signup />,
      element: <Signup />,
    },
  ]);

  return (
    <div>
      <RouterProvider router={routes} />
    </div>
  );
}

export default App;
