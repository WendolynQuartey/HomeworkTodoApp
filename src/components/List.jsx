export default function List({homeworkTodos}){

   return (
      <>
         {homeworkTodos.map(task => (
            <div key={task.id}>
               {task.assignment} | {task.dueDate}
            </div>
         ))}
      </>
   )
}