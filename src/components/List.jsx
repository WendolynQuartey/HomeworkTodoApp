import { useState } from "react";
import EditForm from "./EditForm.jsx"

export default function List({ todos, dispatch }) {
   const [editingTask, setEditingTask] = useState(null)

   function handleToggle(task) {
      dispatch({ type: 'EDIT', id: task.id, payload: { completed: !task.completed } })
   }

   function handleDelete(id) {
      console.log('Deleting tasks with id:', id);
      dispatch({ type: 'DELETE', id: id });
   }

   function handleEdit(task) {
      setEditingTask(task.id) // Opens edit form
   }

   function handleSaveEdit(taskId, updatedTask) {
      dispatch({ type: 'EDIT', id: taskId, payload: updatedTask });
      console.log('Edited task with:', { taskId, updatedTask });
      setEditingTask(null);
   }

   return (
      <>
         {todos.map(task => (
            <div key={task.id} className="taskCard">
               {editingTask === task.id ? (
                  <EditForm task={task} onSave={(updatedTask) => handleSaveEdit(task.id, updatedTask)} />
               ) : (
                  <div>
                     <input type="checkbox" checked={task.completed} onChange={() => handleToggle(task)} /> {task.assignment} | {task.dueDate} | {task.priority}
                     {task.completed == false ? (

                        <button onClick={() => handleEdit(task)}>Edit</button>
                     ) : (
                        <>
                           <button onClick={() => handleEdit(task)}>Edit</button>
                           <button onClick={() => handleDelete(task.id)}>Delete</button>
                        </>)}
                  </div>
               )}
            </div>
         ))}
      </>
   )
}