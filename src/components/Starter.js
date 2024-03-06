import React from "react";

import signup from "../../assets/sign-up.png";

const Starter = () => {
  return (
    <div className="bg-blue-700 text-white p-10 text-center rounded-lg mb-7">
      <div className="text-3xl font-bold pb-4">
        Get Started with KoinX for FREE
      </div>
      <div className="text-sm pb-5">
        With our range of features that you can equip for free, KoinX allows you
        to be more educated and aware of your tax reports.
      </div>
      <div className="py-5 text-center block m-auto w-[60%]">
        <img src={signup} width={200} />
      </div>
      <button className="bg-white rounded-md text-black p-4 font-semibold text-xl pb-4">
        Get Started for FREE {"->"}
      </button>
    </div>
  );
};

export default Starter;
