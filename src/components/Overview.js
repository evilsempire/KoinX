import React from "react";
import Chart from "./Chart";
import TabGroup from "./tabs/TabGroup";
import Performance from "./tabs/Performance";
import Fundamentals from "./tabs/Fundamentals";
import Sentiment from "./tabs/Sentiment";
import About from "./About";
import Tokenomics from "./tabs/Tokenomics";
import Team from "./tabs/Team";

const Overview = () => {
  return (
    <div className="overview basis-4/7">
      <Chart />

      <TabGroup />

      <div className="bg-white">
        <Performance />
        <Fundamentals />
      </div>

      <Sentiment />

      <About />
      <Tokenomics />
      
      <Team />
    </div>
  );
};

export default Overview;
