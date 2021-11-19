import React from "react";

export const Bar = ({ color, value }) => {
  return (
    <>
      <div
        className=" w-1 inline-block mt-0 mr-1"
        style={{
          height: `${value}px`,
          backgroundColor: `${color}`,
        }}
      ></div>
    </>
  );
};
