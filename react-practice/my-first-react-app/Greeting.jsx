import { useState, useEffect } from "react";

export const Greeting = function Greeting() {
  return <h1>&quot;Hola! me llamo Fede.&quot;</h1>;
};

const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

export function MonthList() {
  return (
    <ul>
      {/* here we are using the index as key */}
      {months.map((month, index) => (
        <li key={index}>{month}</li>
      ))}
    </ul>
  );
}

export const App2 = function App2() {
  return (
    <div>
      <h1>Test title</h1>
      <svg>
        <circle cx="25" cy="75" r="20" stroke="green" strokeWidth="2" />
      </svg>
      <form>
        <input type="text" />
      </form>
    </div>
  );
};

export const List = function LIst() {
  const animals = ["Lion", "Cow", "Snake", "Lizard"];

  return (
    <div>
      <h1>Animals: </h1>
      <ul>
        {animals.map((animal) => {
          return <li key={animal}>{animal}</li>;
        })}
      </ul>
    </div>
  );
};
//
function ListItem(props) {
  return <li>{props.animal}</li>;
}

function ListAn(props) {
  return (
    <ul>
      {props.animals.map((animal) => {
        return <ListItem key={animal} animal={animal} />;
      })}
    </ul>
  );
}

export function List2() {
  const animals = ["Lion", "Cow", "Snake", "Lizard"];

  return (
    <div>
      <h1>Animals: </h1>
      <ListAn animals={animals} />
    </div>
  );
}
//
function ListAn2(props) {
  console.log(props);
  console.log(props.animalList);
  if (!props.animalList) {
    return <div>Loading...</div>;
  }

  if (props.animalList.length === 0) {
    return <div>There are no animals in the list!</div>;
  }

  return (
    <ul>
      {props.animalList.map((animal) => {
        return <li key={animal}>{animal}</li>;
      })}
    </ul>
  );
}

export function List3() {
  const animals = [`lion`, `cat`, `dog`];

  return (
    <div>
      <h1>Animals: </h1>
      <ListAn2 animalList={animals} />
    </div>
  );
}

//
function Button(props) {
  const buttonStyle = {
    color: props.color,
    fontSize: props.fontSize + "px",
  };

  return <button style={buttonStyle}>{props.text}</button>;
}

export function AppButton() {
  return (
    <div>
      <Button text="Click Me!" color="blue" fontSize={12} />
      <Button text="Don't Click Me!" color="red" fontSize={12} />
      <Button text="Click Me!" color="blue" fontSize={20} />
    </div>
  );
}
//
export function Person() {
  const [person, setPerson] = useState({ name: "John", age: 100 });
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const fullName = firstName + ` ` + lastName;

  const handleIncreaseAge = () => {
    console.log("in handleIncreaseAge (before setPerson call): ", person);
    setPerson((prevPerson) => ({ ...prevPerson, age: prevPerson.age + 1 }));
    setPerson((prevPerson) => ({ ...prevPerson, age: prevPerson.age + 1 }));
    // we've called setPerson, surely person has updated?
    console.log("in handleIncreaseAge (after setPerson call): ", person);
  };
  function handleFirstNameChange(e) {
    setFirstName(e.target.value);
  }

  function handleLastNameChange(e) {
    setLastName(e.target.value);
  }
  console.log(firstName);
  console.log(lastName);
  // this console.log runs every time the component renders
  // what do you think this will print?
  console.log("during render: ", person);

  return (
    <>
      <input type="text" value={firstName} onChange={handleFirstNameChange} />
      <input type="text" value={lastName} onChange={handleLastNameChange} />
      <h1>{fullName}</h1>
      <h2>{person.age}</h2>
      <button onClick={handleIncreaseAge}>Increase age</button>
    </>
  );
}
//
export function Clock() {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    const key = setInterval(() => {
      setCounter((count) => count + 1);
    }, 1000);

    return () => {
      clearInterval(key);
    };
  }, []);

  return <p>{counter} seconds have passed.</p>;
}
//
