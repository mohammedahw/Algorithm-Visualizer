import React from "react";

export const Bar = ({ value, color }) => {
  let barStyle = {
    background: color,
    height: `${value}px`,
  };

  return (
    <>
      <div
        value={value}
        className={` w-1 inline-block mt-0 mr-1`}
        style={barStyle}
      ></div>
    </>
  );
};
