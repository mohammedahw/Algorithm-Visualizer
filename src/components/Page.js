import React from "react";
import { Link } from "react-router-dom";

export default function Page({ name, url, img }) {
  return (
    <div className="flex justify-center items-center">
      <Link to={url}>
        <img className="h-60 w-60 m-auto" src={img} alt={img} /> {name}
      </Link>
    </div>
  );
};
