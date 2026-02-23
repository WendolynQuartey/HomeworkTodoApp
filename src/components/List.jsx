import { useState } from "react";
import EditForm from "./EditForm.jsx"

export default function List({ todos, dispatch }) {
   const [editingTask, setEditingTask] = useState(null)
   function handleDelete(id) {
      console.log('Deleeting tasks with id:', id);
      dispatch({ type: 'DELETE', id: id });
   }

   function handleEdit(task) {
      setEditingTask(task.id) // Opens edit form
   }

   function handleSaveEdit(taskId, updatedTask) {
      dispatch({ type: 'EDIT', id: taskId, updatedTodo: updatedTask });
      setEditingTask(null);

   }

   return (
      <>
         {todos.map(task => (
            <div key={task.id} className="taskCard">
               {editingTask === task.id ? (
                  <EditForm task={task} onSave={(updatedTask) => handleSaveEdit(task.id, updatedTask)}/>
         ) : (
            <div>
            <input type="checkbox" /> {task.assignment} | {task.dueDate} | {task.priority}
            <button onClick={() => handleDelete(task.id)}>Delete</button>
            <button onClick={() => handleEdit(task)}>Edit</button>
            </div>
            )}
           </div> 
         ))}
      </>
   )
}