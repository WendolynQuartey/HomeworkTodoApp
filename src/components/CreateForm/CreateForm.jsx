import { useState } from "react";

export default function CreateForm({ dispatch }) {
   const [newTask, setNewTask] = useState({
      assignment: "",
      dueDate: "",
      priority: "",
      class: ""
   })

   function handleChange(e) {
      setNewTask({
         ...newTask, // Keep all the other data
         [e.target.name]: e.target.value // Only update the data that's been changed
      });
   }

   function handleSubmit(e) {
      e.preventDefault();
      const addedTask = {
         id: Date.now(),
         ...newTask,
         completed: false
      }

      dispatch({ type: 'ADD', newTask: addedTask })
   }

   return (
      <fieldset>
         <legend></legend>
         <form onSubmit={handleSubmit}>
            <label>
               Class:
               <input type="text" name="class" value={newTask.class} onChange={handleChange} />
            </label>
            <label>
               Assignment:
               <input type="text" name="assignment" value={newTask.assignment} onChange={handleChange} />
            </label>
            <label>
               Due Date
               <input type="date" name="dueDate" value={newTask.dueDate} onChange={handleChange} />
            </label>
            <label>
               Priority:
               <select name="priority" id="" value={newTask.priority} onChange={handleChange}>
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