import { useState, useContext } from "react";
import { Person } from "./component1";

function Component4() {
  console.log("component4");
  const user = useContext(Person);
  console.log(user);

  return (
    <div className="box">
      <div>Component 4</div>
      <p>{user.name}</p>
      <button onClick={user.showData}>Click</button>
    </div>
  );
}

export default Component4;
