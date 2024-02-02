import { useState } from 'react';
import Task from './Task.js'


function App() {
  const[secretWord, setsecretWord] = useState("")
  const myTasks = [
    {title: "Create React App", description: "Create react app using vite to understand the folder structure", dueDate: "2024-Feb-29th"},
    {title: "Create Flask App", description: "Create flask app using flask to understand the folder structure", dueDate: "2024-Mar-29th"},
    {title: "Create Python App", description: "Create python app using python3 to understand the folder structure", dueDate: "2024-Apr-29th"}
  ]

  const[tasks, setTasks] = useState(myTasks)


  function receiveChildData(secret){
    // receives data from child component
    alert("Alas, I have been called by my child")
    console.log(secret);
    setsecretWord(secret)
  }
  return (
   <>
   <h1>Welcome to my Todo App</h1>
   <p>Secret Word is: {secretWord}</p>
   {tasks.map((task,index)=>{
    return(
      <Task key={index} title={task.title} description={task.description} dueDate={task.dueDate} parentFn={receiveChildData}/>
    )
   })}
   </>
  );
}

export default App;


// takes a list of todos, and displays them in a different component
// TaskComponent => h1: Title, p: description, button: due-date
// A todo will have: Task description, Task Title, Due Date
// {title: "Create React App", description: "Create react app using vite to understand the folder structure", due-date: "2024-Feb-29th"}

