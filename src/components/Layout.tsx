import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./Homepage component/Navbar";

function Layout(): React.ReactElement {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
}

export default Layout;
