import { createBrowserRouter } from "react-router-dom";
import Layout from "../components/DefaultLayout/Layout/Layout";
import Home from "../pages/Home/Home";
import About from "../pages/About/About";
import Product from "../pages/ProductListing/ProductListing";
import Contact from "../pages/Contact/Contact";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
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
        path: "product",
        element: <Product />,
      },
    ],
  },
]);

export default routes;
