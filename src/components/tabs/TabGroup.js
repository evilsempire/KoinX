import React, { useState } from "react";
import styled from "styled-components";
const Tab = styled.button`
  cursor: pointer;
  font-size: 16px;
  padding-top: 30px;
  padding-bottom: 8px;
  margin-bottom: 30px;
  margin-right: 30px;
  color: #3E424A;
  font-weight: 500;
  outline: 0;
  ${({ active }) =>
    active &&
    `
    color:  #0141CF;
    padding-bottom: 8px;
    border-bottom: 4px solid #0141CF;
    opacity: 1;
  `}
`;
// const ButtonGroup = styled.div`
//   display: flex;
// `;
const types = [
  "Overview",
  "Fundamentals",
  "News Insights",
  "Sentiments",
  "Team",
  "Technicals",
  "Tokenomics",
];
function TabGroup() {
  const [active, setActive] = useState(types[0]);
  return (
    <>
      <div className="flex border-b-stone-900 overflow-x-auto">
        {types.map((type) => (
          <Tab
            key={type}
            active={active === type}
            onClick={() => setActive(type)}
          >
            {type}
          </Tab>
        ))}
      </div>
      <p />
    </>
  );
}

export default TabGroup;
