import { useState } from 'react';
import Task from './Task.js'
import TaskForm from './TaskForm.js';
import { Routes, Route, Link, Outlet } from 'react-router-dom';
import TaskDetails from './TaskDetails.js';


function App() {
  const[secretWord, setsecretWord] = useState("")
  const myTasks = [
    {title: "Create React App", description: "Create react app using vite to understand the folder structure", dueDate: "2024-Feb-29th"},
    {title: "Create Flask App", description: "Create flask app using flask to understand the folder structure", dueDate: "2024-Mar-29th"},
    {title: "Create Python App", description: "Create python app using python3 to understand the folder structure", dueDate: "2024-Apr-29th"}
  ]

  const[tasks, setTasks] = useState(myTasks)

  function receiveFormData(param){
    console.log(param);
    setTasks([...tasks,param])
  }


  function receiveChildData(secret){
    // receives data from child component
    alert("Alas, I have been called by my child")
    console.log(secret);
    setsecretWord(secret)
  }
  return (
   <>
    <h1>Welcome to my Routed App</h1>
   {/* <button>Add Task </button> */}
   <Link to={'/form'}>Add Task</Link>
   <Link to={'/tasks'}>See My Tasks</Link>
   <Routes>
    <Route path='/form' element={<TaskForm receiveData={receiveFormData}/>}/>
    <Route path='/tasks' element={
      <>
      <h1>Welcome to my Todo App</h1>
   {/* <p>Secret Word is: {secretWord}</p> */}
   
   {tasks.map((task,index)=>{
    return(
      <>
      <Task key={index} title={task.title} description={task.description} dueDate={task.dueDate} parentFn={receiveChildData}/>

      </>
    )
   })}
   <Outlet/>
   
      </>
    }>
      <Route path=':title' element={<TaskDetails tasks={tasks}/>}/>
    </Route>

    {/* CREATE CHILD ROUTE COMPONENTS, PASS OUTLET  IN PARENT, WHERE WE WANT TO SEE THE CHILD COMPONENT*/}

    <Route path='/testpath' element={<><h1>We are In Test Path</h1> <Outlet></Outlet> </>}>
      <Route path=':new' element={<h1>New Component From Nested Route</h1>}/>
    </Route>
   </Routes>
  
   {/* <button>See My Tasks</button> */}
   
   </>
  );
}

export default App;


// takes a list of todos, and displays them in a different component
// TaskComponent => h1: Title, p: description, button: due-date
// A todo will have: Task description, Task Title, Due Date
// {title: "Create React App", description: "Create react app using vite to understand the folder structure", due-date: "2024-Feb-29th"}

