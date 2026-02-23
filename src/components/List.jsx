import { useReducer } from "react";

// function taskReducer(todos,action){
//    switch (action.type){
//       // case 'EDIT':
//       //    return 
//       case 'DELETE':
//          return todos.filter(todo => todo.id !== action.id);
//       default:
//          return todos;
//    }
// }

// function handleDelete(id) {
//    dispatch({type: 'DELETE', id: id})
// }

export default function List({ todos, dispatch }) {
   // const [todos, dispatch] = useReducer(taskReducer, homeworkTodos)
   function handleDelete(id) {
      console.log('Deleeting tasks with id:', id);
      dispatch({ type: 'DELETE', id: id });
   }

   return (
      <>
         {todos.map(task => (
            <div key={task.id} className="taskCard">
               <input type="checkbox" /> {task.assignment} | {task.dueDate}
               <button onClick={() => handleDelete(task.id)}>Delete</button>
               <button>Edit</button>
            </div>
         ))}
      </>
   )
}