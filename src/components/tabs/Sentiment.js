import React from "react";
import { RiInformationFill } from "react-icons/ri";

import document from "../../../assets/document.png";
import arrow from "../../../assets/arrow.png";
import MeasureInfo from "../common/MeasureInfo";
const Sentiment = () => {
  const measureInfoCollection = [
    {
      label:
        "Lorem ipsum dolor sit amet consectetur. Dui vel quis dignissim mattis enim tincidunt.",
      description: `Lorem ipsum dolor sit amet consectetur. Ac phasellus risus est
        faucibus metus quis. Amet sapien quam viverra adipiscing
        condimentum. Ac consectetur et pretium in a bibendum in. Sed vitae
        sit nisi viverra natoque lacinia libero enim.`,
      image: document,
      backgroundColor: "bg-blue-100",
    },
    {
      label:
        "Lorem ipsum dolor sit amet consectetur. Dui vel quis dignissim mattis enim tincidunt.",
      description: `Lorem ipsum dolor sit amet consectetur. Ac phasellus risus est
        faucibus metus quis. Amet sapien quam viverra adipiscing
        condimentum. Ac consectetur et pretium in a bibendum in. Sed vitae
        sit nisi viverra natoque lacinia libero enim.`,
      image: arrow,
      backgroundColor: "bg-green-100",
    },
  ];

  return (
    <div className="px-7 bg-white mt-4 pb-7">
      <div className="text-3xl font-bold py-4">Sentiment</div>

      <div className="text-xl font-semibold text-slate-800 pb-4 flex items-center">
        Key Events <RiInformationFill className="text-xl mt-2 ml-2 text-slate-400"/>
      </div>

      <div className="flex text-sm md:snap-x">
        <div className="flex flex-row">
        {measureInfoCollection.map((info, index) => (
          <MeasureInfo key={index} info={info} />
        ))}
        </div>
      </div>

      <div>
        <div className="text-xl font-semibold text-slate-800 py-7 flex items-center">
          Analyst Estimates <RiInformationFill className="text-xl mt-2 ml-2 text-slate-400"/>
        </div>

        <div className="flex">
          <div className="w-20 h-20 lg:w-28 lg:h-28 bg-green-100 flex items-center justify-center rounded-full text-green-400 font-semibold">
            <div className="text-3xl">76</div>
            <p className="ml-1">%</p>
          </div>

          <div className="ml-4 text-xs lg:text-base text-slate-500">
              <div className="flex flex-row lg:m-2">
                <div className=" mr-6">Buy</div>
                <div className="basis-1/2 w-[150px] lg:w-[600px] h-2 m-[10px] bg-green-600 rounded-sm"></div>
                <div className="basis-1/4 mt-1 lg:mt-0">76%</div>
              </div>
              <div className="flex flex-row lg:m-2">
                <div className=" mr-4">Hold</div>
                <div className="w-[30px] h-2 m-[10px] bg-slate-300 rounded-sm"></div>
                <div className="basis-1/4 mt-1 lg:mt-0">8%</div>
              </div>
              <div className="flex flex-row lg:m-2">
                <div className=" mr-6">Sell</div>
                <div className="w-[60px] h-2 m-[10px] bg-red-500 rounded-sm"></div>
                <div className="basis-1/4 mt-1 lg:mt-0">16%</div>
              </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sentiment;
