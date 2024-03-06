import React from "react";
import jhonSmith from "../../../assets/jhon-smith.jpg";
const TeamMember = (props) => {

    const {image,member_name, description} = props?.member;
    const document = require(`../../../assets/${image}`)
  return (
    <div className="flex p-2 bg-blue-100 mb-5">
      <div className="w-[50%] text-center p-2">
        <img className="w-[300px] h-[100px] rounded-lg" src={document} />
        <p className="font-bold text-sm pt-2">{member_name}</p>
        <p className="text-xs text-slate-500">Designation here</p>
      </div>
      <div className="m-4 pt-2 text-base">
        {description}
      </div>
    </div>
  );
};

export default TeamMember;
