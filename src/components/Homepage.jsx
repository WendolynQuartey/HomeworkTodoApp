import Class from "./Class.jsx"
import CreateForm from "./CreateForm/CreateForm.jsx"

export default function Homepage({ todos,dispatch }) {

   return (
      <>
      <h1>Homework Todo List</h1>
         <CreateForm todos={todos} dispatch={dispatch}/>
         <Class todos={todos} dispatch={dispatch}/>
      </>
   )
}