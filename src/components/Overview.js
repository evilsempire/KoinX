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
    <div className="overview lg:w-[71%] lg:mr-5 md:mr-2">
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
