import React from "react";
import HomeClient from "./home/HomeClient";
import { Login } from "./widgets/auth/login/page";
import { Register } from "./widgets/auth/register/page";

const Home = () => {
  return (
    <div>
      <div className="login"></div>
      {/* <HomeClient /> */}
      {/* <Login /> */}
      <Register />
    </div>
  );
};

export default Home;
