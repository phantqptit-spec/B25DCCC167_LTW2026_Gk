import React from "react";
import { Outlet } from "react-router-dom";
import NavBar from "./NavBar";

const Layout = () => {
  return (
    <div>
      <NavBar />
      <hr />
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;