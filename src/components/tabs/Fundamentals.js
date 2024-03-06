import React from "react";
import { RiInformationFill } from "react-icons/ri";

import CoinInfo from "../common/CoinInfo";

const Fundamentals = () => {
    return (
        <div className="pb-5 px-7">
            <div className="text-3xl font-bold py-5 flex items-center">Fundamentals <RiInformationFill className="text-xl mt-2 ml-2 text-slate-400"/></div>

            <div className="flex">
                <div className="basis-1/2">
                    <CoinInfo label="Bitcoin Price" number={16815.46} sign="$"/>
                </div>
                <div className="basis-1/2">
                    <CoinInfo label="Market Cap" number={323507290407} sign="$"/>
                </div>
                
            </div>

            <div className="flex">
                <div className="basis-1/2">
                    <CoinInfo label="24h Low / 24h High" number={16382.07} sign="$"/>
                </div>
                <div className="basis-1/2">
                    <CoinInfo label="Market Cap Dominance" number={38.343} backsign="%"/>
                </div>
                
            </div>

            <div className="flex">
                <div className="basis-1/2">
                    <CoinInfo label="7d Low / 7d High" number={16382.07} number2={16874.12}  sign="$"/>
                </div>
                <div className="basis-1/2">
                    <CoinInfo label="Volume / Market Cap " number={0.0718}/>
                </div>
                
            </div>

            <div className="flex">
                <div className="basis-1/2">
                    <CoinInfo label="Trading Volume" number={23249202782}  sign="$"/>
                </div>
                <div className="basis-1/2">
                    <CoinInfo label="All Time High" number={69044.77} sign="$"/>
                </div>
                
            </div>

            <div className="flex">
                <div className="basis-1/2">
                    <CoinInfo label="Market Cap Rank" number="#1"/>
                </div>
                <div className="basis-1/2">
                    <CoinInfo label="All Time Low" number={67.81}  sign="$"/>
                </div>
                
            </div>
        </div>
    )
}

export default Fundamentals;