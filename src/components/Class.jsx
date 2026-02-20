import {homeworkTodos} from "../data/homeworkData.js";


export default function Class(){
   let classList = homeworkTodos.map(task => {
      return <div>{task.class}</div>
   });
   
   return (
      <>
         {homeworkTodos.map(task => (
            <div key={task.id}>{task.class}</div>
         ))}
      </>
   )
}