import React from "react";
import { FaAnglesRight } from "react-icons/fa6";

const BreadCrumb = () => {
    return (
        <div className="py-2 px-10 flex items-center">
            <span className="font-thin px-2">Cryptocurrencies {" " }</span> <FaAnglesRight className="text-xs mt-1 font-thin text-slate-600"/> <span className="px-2 font-semibold">Bitcoin</span>
        </div>
    )
}
export default BreadCrumb;