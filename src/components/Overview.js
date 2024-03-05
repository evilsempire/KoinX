import React from "react";
import Chart from "./Chart";
import TabGroup from "./tabs/TabGroup";
import Performance from "./tabs/Performance";
import Fundamentals from "./tabs/Fundamentals";
import Sentiment from "./tabs/Sentiment";
import About from "./About";
import Tokenomics from "./tabs/Tokenomics";

const Overview = () => {
  return (
    <div className="overview basis-5/7">
      <Chart />

      <TabGroup />

      <div className="bg-white">
        <Performance />
        <Fundamentals />
        <Sentiment />
        <About />
        <Tokenomics />
      </div>
    </div>
  );
};

export default Overview;
