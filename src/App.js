import Task from './Task.js'


function App() {
  const myTasks = [
    {title: "Create React App", description: "Create react app using vite to understand the folder structure", dueDate: "2024-Feb-29th"},
    {title: "Create Flask App", description: "Create flask app using flask to understand the folder structure", dueDate: "2024-Mar-29th"},
    {title: "Create Python App", description: "Create python app using python3 to understand the folder structure", dueDate: "2024-Apr-29th"}
  ]
  
  return (
   <>
   <h1>Welcome to my Todo App</h1>
   {myTasks.map((task,index)=>{
    return(
      <Task key={index} title={task.title} description={task.description} dueDate={task.dueDate}/>
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

