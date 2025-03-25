import { ACTIONS } from "./App";

export function TodoUseReducer({ todo, dispatch }) {
  function toggle() {
    dispatch({ type: ACTIONS.TOGGLE_TODO, id: todo.id });
  }

  return (
    <div className="listItem">
      <span style={{ color: todo.complete ? `#AAA` : `#000` }}>{todo.name}</span>
      <div>
        <button onClick={toggle}>Toggle</button>
        <button onClick={() => dispatch({ type: ACTIONS.DELETE_TODO, id: todo.id })}>Delete</button>
      </div>
    </div>
  );
}

export function TodoUseState({ todo, toggleTodo, deleteTodo }) {
  return (
    <div className="listItem" key={todo.id}>
      <span style={{ color: todo.complete ? `#AAA` : `#000` }}>{todo.name}</span>
      <div>
        <button onClick={() => toggleTodo(todo)}>Toggle</button>
        <button onClick={() => deleteTodo(todo)}>Delete</button>
      </div>
    </div>
  );
}
