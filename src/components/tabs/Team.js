import React from "react";

import teamMembers from "../../data/teamMember.json";
import TeamMember from "../common/TeamMember";

const Team = () => {
  return (
    <div className="px-7 bg-white my-4 py-4">
      <div className="text-3xl font-bold py-4">Team</div>
      <p className="pb-5">
        Lorem ipsum dolor sit amet consectetur. Id consequat adipiscing arcu
        nibh. Eget mattis in mi integer sit egestas. Proin tempor id pretium
        quam. Facilisis purus convallis quam augue.
      </p>

      {
        teamMembers.map((member, index) => <TeamMember key={index} member={member}/>)
      }
    </div>
  );
};

export default Team;
