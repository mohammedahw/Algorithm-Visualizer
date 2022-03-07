import React from "react";
import { Link } from "react-router-dom";

export default function Page({ name, url, img }) {
  return (
    <div className="font-serif">
      <Link to={url}>
        <img
          className="h-60 w-60 rounded border-4 border-gray-600 transition transform hover:-translate-y-1 motion-reduce:transition-none motion-reduce:hover:transform-none"
          src={img}
          alt={img}
        />{" "}
        {name}
      </Link>
    </div>
  );
}
