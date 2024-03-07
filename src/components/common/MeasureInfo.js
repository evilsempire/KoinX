import React from "react";

const MeasureInfo = (props) => {
  const { image, label, backgroundColor, description } = props?.info;

  return (
    <div className={" p-4 flex rounded-lg mr-5 snap-center " + backgroundColor}>
      <img className="w-[40px] h-[40px] mr-3" src={image} />
      <div className="text-sm mr-3">
        <div>{label}</div>
        <div className="pt-2 pb-4 text-slate-500 text-[13px]">
          {description}
        </div>
      </div>
    </div>
  );
};

export default MeasureInfo;
