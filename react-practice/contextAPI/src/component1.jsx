import { useState, createContext } from "react";

import Component2 from "./component2";

export const Person = createContext(null);

function component1() {
  console.log("component1");
  const [name, setName] = useState(`fede`);
  const age = 29;
  const showData = () => {
    console.log(`fede capo`);
    setName(`federico`);
  };
  return (
    <div className="box">
      <div>Component 1</div>
      <Person.Provider value={{ name, age, showData }}>
        <Component2 />
      </Person.Provider>
    </div>
  );
}

export default component1;
