import React from "react";
import { Link } from "react-router-dom";

export default function Page({ name, url, img }) {
  return (
    <div className="">
      <Link to={url}>
        <img className="h-60 w-60" src={img} alt={img} /> {name}
      </Link>
    </div>
  );
};
