import React from "react";
import Page  from "../components/Page";

export default function Home() {
  return (
    <>
      <div className="flex justify-center items-center text-center h-96 font-bold">
        <div className="px-8">
          <Page
            name={"Sorting Visualizer"}
            url={"sorting-visualizer"}
            img="https://i.ibb.co/Nn7JxGQ/Screenshot-1.png"
          />
        </div>
        <div className="px-8">
          <Page
            name={"Path Finding Visualizer"}
            url={"pathfinding-visualizer"}
            img="https://tamimehsan.github.io/AlgorithmVisualizer/static/media/graph.6e6849d5.png"
          />
        </div>
      </div>
    </>
  );
};
