import React from "react";
import { Link } from "react-router-dom";
import { FaReact } from "react-icons/fa";

export const Navbar = () => {
  return (
    <nav className="bg-gray-800 text-blue-300">
      <div className="px-8 mx-auto py-1">
        <div className="flex justify-between">
          <div className="flex items-center">
            <div>
              <FaReact className="h-9 w-6 mr-2" />
            </div>
            <div>
              <Link to="/">Home</Link>
            </div>
          </div>
          <div className="flex items-center">Algorithm Visualizer</div>
          <div></div>
        </div>
      </div>
    </nav>
  );
};
