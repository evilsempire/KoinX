import React from "react";
import BreadCrumb from "./BreadCrumb";
import Overview from "./Overview";
import Promotion from "./Promotion";

const Body = () => {
  return (
    <div className="body px-10">
      <BreadCrumb />
      <div className=" flex flex-row">
          <Overview />
          <Promotion />
      </div>
    </div>
  );
};

export default Body;
