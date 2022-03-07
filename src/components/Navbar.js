import React from "react";
import { Link } from "react-router-dom";
import { GiAtomicSlashes } from "react-icons/gi";

export default function Navbar() {
  return (
    <nav className="bg-gray-800 text-gray-100">
      <div className="px-8 mx-auto py-4">
        <div className="flex justify-between">
          <Link to={"/"}>
            <div className="flex items-center">
              <div>
                <GiAtomicSlashes className="h-8 w-8 mr-2" />
              </div>
              <div className="font-bold text-xl">Algorithm Visualizer</div>
            </div>
          </Link>
        </div>
      </div>
    </nav>
  );
}
