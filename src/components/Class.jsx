import List from "./List.jsx"

export default function Class({homeworkTodos}){
   let classList = homeworkTodos.filter((task, index, self) => 
      index === self.findIndex(t => t.class === task.class)
   );
   
   return (
      <>
         {classList.map(task => (
            <div key={task.id}>
               <h2>{task.class}</h2>
               <List homeworkTodos={homeworkTodos} />
            </div>
         ))}
      </>
   )
}