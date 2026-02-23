import List from "./List.jsx"

export default function Class({ todos, dispatch }) {
   let uniqueClass = todos.filter((task, index, self) =>
      index === self.findIndex(t => t.class === task.class)
   );

   let classList = uniqueClass.map(task => (
      <div key={task.id} className="classCard">
         <h2>{task.class}</h2>
         <List todos={todos.filter(t => t.class === task.class)} dispatch={dispatch} />
         <br />
      </div>
   ));

   return (
      <>
         {classList}
      </>
   )
}