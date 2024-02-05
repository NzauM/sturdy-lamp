import { useState } from "react";


function TaskForm({receiveData}) {
  const[title, setTitle] = useState("")
  const[description, setDescription] = useState("")
  const[dueDate, setDueDate] = useState("")
  console.log(title);
  function handleFormSubmit(e){
    e.preventDefault()
    const formData = {title:title, description:description, dueDate:dueDate}
    console.log(formData);
    receiveData(formData)

  }
  return (
    <>
      <form onSubmit={handleFormSubmit}>
        <label>
          Title:
          <input type="text" onChange={(e)=>setTitle(e.target.value)} value={title} name="title" />
        </label>
         <label>
          Description:
          <input type="text" value={description} onChange={(e)=>setDescription(e.target.value)} name="description" />
        </label> <label>
          Due Date:
          <input type="date" value={dueDate} onChange={(e)=>setDueDate(e.target.value)} name="dueDate" />
        </label>
        <button type="submit">Submit</button>
      </form>
    </>
  );
}
export default TaskForm;
