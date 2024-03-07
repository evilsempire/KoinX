import React from "react";
import jhonSmith from "../../../assets/jhon-smith.jpg";
const TeamMember = (props) => {

    const {member_name, description} = props?.member;

    return (
    <div className="flex flex-col lg:flex-row p-2 bg-blue-100 mb-5">
      <div className="text-center p-2 lg:w-[50%]">
        <img className="lg:[w-300px] w-[100px] h-[100px] rounded-lg m-auto" src={jhonSmith} />
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
