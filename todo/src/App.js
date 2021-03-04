// import logo from './logo.svg';
import { useState } from "react";

/* import logo from "./tek_logo.png"; */
import "./App.css";
import Todo from "./Components/Todo";
import TodoForm from "./Components/TodoForm";

function App() {
  const [todos, setTodos] = useState([
    { text: "eat", isCompleted: false },
    { text: "code", isCompleted: false },
    { text: "game", isCompleted: false },
    { text: "sleep", isCompleted: false },
    { text: "coffee", isCompleted: false },
  ]); //sample todo items.  these will need to be changed in your app.  Just filler todos, although they are quite important!

  const addTodo = (text) => {
    const newTodos = [...todos, { text }];
    setTodos(newTodos);
  };
  const completeTodo = (index) => {
    const newTodos = [...todos];
    newTodos[index].isCompleted = true;
    setTodos(newTodos);
  };
  const removeTodo = (index) => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };

  return (
    <div className="App">
      <header className="App-header">
        <div>
          <br />
          <p>Todo List App</p>
          {todos.map((todo, index) => (
            <Todo
              key={index}
              index={index}
              todo={todo}
              completeTodo={completeTodo}
              removeTodo={removeTodo}
            />
          ))}

          <TodoForm addTodo={addTodo} />
        </div>
      </header>
    </div>
  );
}

export default App;
