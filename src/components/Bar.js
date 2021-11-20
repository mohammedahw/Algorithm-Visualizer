import React from "react";
import { useState } from "react/cjs/react.development";

export const Bar = ({ value, color, ref }) => {
  const [col, setCol] = useState(color);

  let barStyle = {
    background: col,
    height: `${value}px`,
  };

  return (
    <>
      <div className={` w-1 inline-block mt-0 mr-1`} style={barStyle}></div>
    </>
  );
};
