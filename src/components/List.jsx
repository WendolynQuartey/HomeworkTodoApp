export default function List({homeworkTodos}){

   return (
      <>
         {homeworkTodos.map(task => (
            <div key={task.id}>
               <input type="checkbox"/> {task.assignment} | {task.dueDate} 
               <button>Delete</button>
               <br />
               <button>Edit</button>
            </div>
         ))}
      </>
   )
}