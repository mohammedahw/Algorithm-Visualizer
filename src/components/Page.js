import React from "react";
import { Link } from "react-router-dom";

export default function Page({ name, url, img }) {
  return (
    <Link to={url}>
      <div class="flex justify-center transition transform hover:-translate-y-1 motion-reduce:transition-none motion-reduce:hover:transform-none">
        <div className="rounded-lg shadow-lg bg-white max-w-sm">
          <a href="#!">
            <img className="rounded-t-lg h-40 w-80" src={img} alt="" />
          </a>
          <div className="p-6">
            <h5 className="text-gray-900 text-xl font-medium mb-2">{name}</h5>
          </div>
        </div>
      </div>
    </Link>
  );
}
// h-60 w-60 rounded border-4 border-gray-600 transition transform hover:-translate-y-1 motion-reduce:transition-none motion-reduce:hover:transform-none
