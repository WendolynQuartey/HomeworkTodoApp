import {useState} from "react";

export default function EditForm({task, onSave}) {
   const [editedTask, setEditedTask] = useState({
      assignment: task.assignment,
      dueDate: task.dueDate,
      priority: task.priority,
   })

   function handleChange(e){
     const {name, value} = e.target;
     setEditedTask(prev => ({
      ...prev,
      [name]: value
     }));
   }

   function handleSubmit(){
      e.preventDefault();
      onSave(editedTask);
   }

   return (
   <fieldset>
      <legend></legend>
      <form>
         <label>
            Assignment: 
            <input type="text" value={editedTask.assignment} onChange={handleChange}/>
         </label>
         <label>
            Due Date
            <input type="date" value={editedTask.dueDate} onChange={handleChange}/>
         </label>
         <label>
            <select value={editedTask.priority} onChange={handleChange}>
               <option value="high">High</option>
               <option value="medium">Medium</option>
               <option value="low">LOW</option>
            </select>
         </label>
         <input type="submit" value="Save" />
      </form>
   </fieldset>
   )
}