import React from "react";
import BreadCrumb from "./BreadCrumb";
import Overview from "./Overview";
import Promotion from "./Promotion";

const Body = () => {
    return (
        <div className="body">
            <BreadCrumb/>
            <div className="container">
                <Overview />
                <Promotion />
            </div>
        </div>
    )
}

export default Body;