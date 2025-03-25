import { useState } from "react";
import Component4 from "./component4";

function Component3() {
  console.log("component3");
  return (
    <div className="box">
      <div>Component 3</div>
      <Component4 />
    </div>
  );
}

export default Component3;
