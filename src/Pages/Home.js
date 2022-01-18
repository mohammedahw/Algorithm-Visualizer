import React from "react";
import { Page } from "../components/Page";

export const Home = () => {
  return (
    <>
      <div className="flex justify-center mx-auto my-20 items-center text-center font-bold">
        <div className="px-8">
          <Page
            name={"Sorting Visualizer"}
            url={"sorting-visualizer"}
            img="https://icons-for-free.com/iconfiles/png/512/sort-131964785002424964.png"
          />
        </div>
        <div className="px-8">
          <Page
            name={"Path Finding Visualizer"}
            url={"pathfinding-visualizer"}
            img="https://static.thenounproject.com/png/3541888-200.png"
          />
        </div>
      </div>
    </>
  );
};
