import { useState } from "react";
import Component3 from "./component3";

function Component2() {
  console.log("component2");
  return (
    <div className="box">
      <div>Component 2</div>
      <Component3 />
    </div>
  );
}

export default Component2;
