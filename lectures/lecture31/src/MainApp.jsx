import React from "react";

import ClassDemoComponent from "./ClassDemoComponent.jsx";
import Timer from "./Timer.jsx";

const MainApp = (props) => {
  return (
    <main>
      <h1>{props.title}</h1>
      {/* <ClassDemoComponent /> */}

      <Timer />
    </main>
  );
};

export default MainApp;
