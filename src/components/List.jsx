import {useReducer} from "react";

function taskReducer(todos,action){
   switch (action.type){
      // case 'EDIT':
      //    return 
      case 'DELETE':
         return todos.filter(todo => todo.id !== action.id);
      default:
         return todos;
   }
}

export default function List({homeworkTodos}){
   const [todos, dispatch] = useReducer(taskReducer, homeworkTodos)

   return (
      <>
         {todos.map(task => (
            <div key={task.id} className="taskCard">
               <input type="checkbox"/> {task.assignment} | {task.dueDate} 
               <button onClick={() => dispatch({type: 'DELETE'})}>Delete</button>
               <button>Edit</button>
            </div>
         ))}
      </>
   )
}