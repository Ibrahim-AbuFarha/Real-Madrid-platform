import React from "react";
import Header from "../components/header/Header";
import Footer from "../components/footer/footer";
import { Outlet } from "react-router-dom";


//out let is the active rout
function MainLayout() {
  return (
    <div>
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
}

export default MainLayout;
