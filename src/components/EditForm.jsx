import {useState} from "react";

export default function EditForm({task, onSave}) {
   const [editedTask, setEditedTask] = useState({
      assignment: task.assignment,
      dueDate: task.dueDate,
      priority: task.priority,
      completed: task.completed,
      class: task.class,
   })

   function handleChange(e){
     setEditedTask({
      ...editedTask, // Keep all the other data
      [e.target.name]: e.target.value // Only update the data that's been changed
     });
   }

   function handleSubmit(e){
      e.preventDefault();
      onSave(editedTask);
   }

   return (
   <fieldset>
      <legend>Editing: {task.assignment}</legend>
      <form onSubmit={handleSubmit}>
         <label>
            Assignment: 
            <input type="text" name="assignment" value={editedTask.assignment} onChange={handleChange}/>
         </label>
         <label>
            Due Date
            <input type="date" name="dueDate" value={editedTask.dueDate} onChange={handleChange}/>
         </label>
         <label>
            <select  name="priority" value={editedTask.priority} onChange={handleChange}>
               <option value="high">High</option>
               <option value="medium">Medium</option>
               <option value="low">Low</option>
            </select>
         </label>
         <input type="submit" value="Save" />
      </form>
   </fieldset>
   )
}