import React from "react";
import { Link } from "react-router-dom";

export const Page = ({ name, url, img }) => {
  return (
    <div className="flex">
      <Link to={url}>
        {name} <img className="h-60 w-60 m-auto" src={img} alt={img} />
      </Link>
    </div>
  );
};
