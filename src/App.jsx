import { useState } from "react";
import "./styles.css";
import { NewToDoForm } from "./newToDoForm";
import { TodoList } from "./TodoList";

export default function App() {
  const [todos, setTodos] = useState([]);

  const addTodo = title => {
    setTodos(currentValue => {
      return [
        ...currentValue,
        { id: crypto.randomUUID(), title, completed:false}
      ]
    });
  }

  const toggleTodo = (id, completed) => {
    setTodos(currentValue => {
      return currentValue.map(todo => {
        if (todo.id === id) {
          return {...todo, completed}
        }
        return todo;
      });
    });
  }

  const deleteTodo = (id) => {
    setTodos(currentValue => {
      return currentValue.filter(todo => todo.id !== id);
  });
  }

  return (
  <>
    <NewToDoForm onSubmit={addTodo}/>
    <h1 className="header">Todo List</h1>
    <TodoList todos={todos} toggleTodo={toggleTodo} deleteTodo={deleteTodo}/>
  </>
  )
}