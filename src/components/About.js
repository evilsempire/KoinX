import React from "react";
import CheckNow from "./common/CheckNow";
import mobileTrading from "../../assets/mobile-trading.jpg";
import desktopTrading from "../../assets/desktop-trading.jpg";

const About = () => {
  return (
    <div className="px-7 pb-4 bg-white mt-4">
      <div className="text-3xl font-bold py-4">About Bitcoin</div>

      <p className="font-bold">What is Bitcoin</p>
      <p>
        Bitcoin’s price today is US$16,951.82, with a 24-hour trading volume of
        $19.14 B. BTC is +0.36% in the last 24 hours. It is currently -7.70%
        from its 7-day all-time high of $18,366.66, and 3.40% from its 7-day
        all-time low of $16,394.75. BTC has a circulating supply of 19.24 M BTC
        and a max supply of 21 M BTC.
      </p>

      <hr className="my-4" />
      <p className="font-bold">Lorem ipsum dolor sit amet</p>
      <p className="my-2">
        Lorem ipsum dolor sit amet consectetur. Aliquam placerat sit lobortis
        tristique pharetra. Diam id et lectus urna et tellus aliquam dictum at.
        Viverra diam suspendisse enim facilisi diam ut sed. Quam scelerisque
        fermentum sapien morbi sodales odio sed rhoncus. Ultricies urna volutpat
        pendisse enim facilisi diam ut sed. Quam scelerisque fermentum sapien
        morbi sodales odio sed rhoncus.
      </p>

      <p className="my-2">
        Diam praesent massa dapibus magna aliquam a dictumst volutpat. Egestas
        vitae pellentesque auctor amet. Nunc sagittis libero adipiscing cursus
        felis pellentesque interdum. Odio cursus phasellus velit in senectus
        enim dui. Turpis tristique placerat interdum sed volutpat. Id imperdiet
        magna eget eros donec cursus nunc. Mauris faucibus diam mi nunc praesent
        massa turpis a. Integer dignissim augue viverra nulla et quis lobortis
        phasellus. Integer pellentesque enim convallis ultricies at.
      </p>

      <p className="my-2">
        Fermentum hendrerit imperdiet nulla viverra faucibus. Sit aliquam massa
        vel convallis duis ac. Mi adipiscing semper scelerisque porttitor
        pulvinar nunc risus. Fermentum potenti iaculis lacinia congue ipsum
        fames amet dui. Purus ultrices tincidunt volutpat in eget. Ullamcorper
        dui
      </p>

      <hr className="my-4" />

      <div className="font-bold text-2xl">Already Holding Bitcoin?</div>

      <div className="flex flex-col lg:flex-row">
        <CheckNow
          gradientColor="from-teal-400 to-blue-600"
          image={mobileTrading}
          label="Calculate your profits"
        />

        <CheckNow
          gradientColor="from-orange-300 to-red-600"
          image={desktopTrading}
          label="Calculate your profits"
        />
      </div>

      <p className="py-4">
        Fermentum hendrerit imperdiet nulla viverra faucibus. Sit aliquam massa
        vel convallis duis ac. Mi adipiscing semper scelerisque porttitor
        pulvinar nunc risus. Fermentum potenti iaculis lacinia congue ipsum
        fames amet dui. Purus ultrices tincidunt volutpat in eget. Ullamcorper
        dui
      </p>
    </div>
  );
};

export default About;
