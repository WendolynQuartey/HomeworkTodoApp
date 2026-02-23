import List from "./List.jsx"

export default function Class({ homeworkTodos }) {
   let uniqueClass = homeworkTodos.filter((task, index, self) =>
      index === self.findIndex(t => t.class === task.class)
   );

   let classList = uniqueClass.map(task => (
      <div key={task.id} className="classCard">
         <h2>{task.class}</h2>
         <List homeworkTodos={homeworkTodos.filter(t => t.class === task.class)} />
         <br />
      </div>
   ));

   return (
      <>
         {classList}
      </>
   )
}