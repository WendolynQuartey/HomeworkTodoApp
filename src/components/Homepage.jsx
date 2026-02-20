import Class from "./Class.jsx"
import AddItem from "./CreateForm/AddItem.jsx"

export default function Homepage({homeworkTodos}) {

   return (
      <>
      <h1>Homework Todo List</h1>
         <AddItem />
         <Class homeworkTodos={homeworkTodos}/>
      </>
   )
}