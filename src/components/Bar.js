import React from "react";

export const Bar = ({ value, color, clas }) => {
  let barStyle = {
    background: color,
    height: `${value}px`,
  };

  return (
    <>
      <div
        className={`${clas} w-1 inline-block mt-0 mr-1`}
        style={barStyle}
      ></div>
    </>
  );
};
