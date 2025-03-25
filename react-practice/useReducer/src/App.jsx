import { useState, useContext, useReducer } from "react";
import { TodoUseReducer, TodoUseState } from "./Todo";
import "./App.css";

//USEREDUCE

export const ACTIONS = {
  ADD_TODO: `add_todo`,
  TOGGLE_TODO: `toggle_todo`,
  DELETE_TODO: `delete_todo`,
};

function reducer(todos, action) {
  switch (action.type) {
    case ACTIONS.ADD_TODO:
      return [...todos, newTodo(action.name)];
    case ACTIONS.TOGGLE_TODO:
      return todos.map((todo) => {
        if (todo.id === action.id) {
          return { ...todo, complete: !todo.complete };
        }
        return todo;
      });
    case ACTIONS.DELETE_TODO:
      return todos.filter((todo) => todo.id !== action.id);
    default:
      return todos;
  }
}

function newTodo(name) {
  return { id: Date.now(), name: name, complete: false };
}

export function TodoListUseReduce() {
  const [todos, dispatch] = useReducer(reducer, []);
  const [name, setName] = useState(``);

  function handleSubmit(e) {
    e.preventDefault();
    dispatch({ type: ACTIONS.ADD_TODO, name: name });
    setName(``);
  }

  return (
    <div className="container">
      <h1>useReduce Practice</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
      </form>
      <div>
        {todos.map((todo) => {
          return <TodoUseReducer key={todo.id} todo={todo} dispatch={dispatch} />;
        })}
      </div>
    </div>
  );
}

//USESTATE

export function TodoListUseState() {
  const [todos, setTodos] = useState([]);
  const [name, setName] = useState(``);

  function handleSubmit(e) {
    e.preventDefault();
    const allTodos = [...todos, { id: Date.now(), name: name, complete: false }];
    setTodos(allTodos);
    setName(``);
  }
  function toggleTodo(thisTodo) {
    const newArray = todos.map((todo) => {
      if (todo.id === thisTodo.id) {
        return { ...todo, complete: !todo.complete };
      }
      return todo;
    });
    setTodos(newArray);
  }
  function deleteTodo(thisTodo) {
    const newArray = todos.filter((todo) => todo.id !== thisTodo.id);
    setTodos(newArray);
  }

  return (
    <div className="container">
      <h1>useState Practice</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
      </form>
      <div>
        {todos.map((todo) => {
          return <TodoUseState key={todo.id} todo={todo} toggleTodo={toggleTodo} deleteTodo={deleteTodo} />;
        })}
      </div>
    </div>
  );
}
