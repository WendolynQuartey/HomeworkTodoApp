import List from "./List.jsx"

export default function Class({ todos, dispatch }) {
   let uniqueClass = todos.filter((task, index, self) =>
      task && index === self.findIndex(t => t && t.class === task.class)
   );

   let classList = uniqueClass.map(task => {
      if (!task) return null;
      
      return (
         <div key={task.id} className="classCard">
            <h2>{task.class}</h2>
            <List todos={todos.filter(t => t && t.class === task.class)} dispatch={dispatch} />
            <br />
         </div>
      )
   });

   return (
      <>
         {classList}
      </>
   )
}