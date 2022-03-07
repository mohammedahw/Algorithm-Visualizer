import React from "react";
import Page from "../components/Page";

export default function Home() {
  return (
    <>
      <div className="flex justify-center items-center text-center h-96 font-bold">
        <div className="px-16">
          <Page
            name={"Sorting Visualizer"}
            url={"sorting-visualizer"}
            img="http://www.scriptspot.com/files/sortvis.png"
          />
        </div>
        <div className="px-16">
          <Page
            name={"Pathfinding Visualizer"}
            url={"pathfinding-visualizer"}
            img="https://raw.githubusercontent.com/antonpantev/pathfinding/master/PreviewImages/ScreenShot.png"
          />
        </div>
      </div>
    </>
  );
}
