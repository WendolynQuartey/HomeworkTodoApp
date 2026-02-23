import Class from "./Class.jsx"
import AddItem from "./CreateForm/AddItem.jsx"

export default function Homepage({ todos,dispatch }) {

   return (
      <>
      <h1>Homework Todo List</h1>
         <AddItem />
         <Class todos={todos} dispatch={dispatch}/>
      </>
   )
}