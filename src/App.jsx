import { useReducer } from 'react';
import { homeworkTodos } from "./data/homeworkData.js";
import Homepage from "./components/Homepage.jsx";
import './App.css';

function taskReducer(todos, action) {
  switch (action.type) {
    case 'ADD':
      return [action.newTask, ...todos]
    case 'EDIT':
      return todos.map(task => 
        task.id == action.id ?
          { ...task, ...action.payload } : task
      );
    case 'DELETE':
      return todos.filter(todo => todo.id !== action.id);
    default:
      return todos;
  }
}

function App() {
  const [todos, dispatch] = useReducer(taskReducer, homeworkTodos)

  return (
    <>
      <Homepage todos={todos} dispatch={dispatch} />
    </>
  )
}


export default App;
