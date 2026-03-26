import React from "react";
import { DisplayCategories } from "./sections/categories";
import { Foods } from "./sections/foods";

const pgae = () => {
  return (
    <div className="bg-[#F4F4F5]">
      <DisplayCategories />
      <Foods />
    </div>
  );
};

export default pgae;
