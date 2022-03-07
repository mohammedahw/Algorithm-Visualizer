import React from "react";
import { Link } from "react-router-dom";
import { GiAtomicSlashes } from "react-icons/gi";

export default function Navbar() {
  return (
    <nav className="bg-gray-800 text-gray-100">
      <div className="px-8 mx-auto py-6">
        <div className="flex justify-between">
          <div className="flex items-center">
            <div>
              <GiAtomicSlashes className="h-12 w-12 mr-2" />
            </div>
            <div className="font-bold text-2xl">
              <Link to="/">Algorithm Visualizer</Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
