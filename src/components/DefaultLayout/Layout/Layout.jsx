import React from "react";
import Header from "../Header/Header";
import { Outlet } from "react-router";
import Footer from "../Footer/Footer";

const Layout = () => {
  return (
    <div>
      <div className="sticky top-0 left-0 right-0 z-50">
        <Header />
      </div>

      <div>
        <Outlet />
      </div>

      <Footer />
    </div>
  );
};

export default Layout;
