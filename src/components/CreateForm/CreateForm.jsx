
export default function CreateForm({ todos, dispatch}){
   return (
   <fieldset>
      <legend></legend>
      <form>
         <label>
            Class:
            <input type="text" />
         </label>
         <label>
            Assignment: 
            <input type="text" />
         </label>
         <label>
            Due Date
            <input type="date" />
         </label>
         <label>
            Priority: 
            <select name="" id="">
               <option value="high">High</option>
               <option value="medium">Medium</option>
               <option value="low">LOW</option>
            </select>
         </label>
         <input type="submit" value="Save" />
      </form>
   </fieldset>
   )
}