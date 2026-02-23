import { useReducer } from 'react';
import { homeworkTodos } from "./data/homeworkData.js";
import Homepage from "./components/Homepage.jsx";
import './App.css';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Homepage homeworkTodos={homeworkTodos}/>
    </>
  )
}


export default App
