import { useParams, useNavigate } from "react-router-dom";
function TaskDetails(props){
    const myParams = useParams()
    const navigator = useNavigate()

    console.log(myParams.title);
    // get the title that was clicked, show the task that has that title.
    const targetTask = props.tasks.find((task, ind)=>task.title === myParams.title)
    console.log(targetTask);

    function completeTaskHandler(e){
        // alert task is completed, now add new task
        alert("task is completed, now add new task")
        // navigate user to the form component
        navigator("/form")

    }
    return(
        <>
        <h1>Task Title: {targetTask.title}</h1>
        <p>Description:{targetTask.description}</p>
        <button >DueDate: {targetTask.dueDate}</button>
        <button onClick={completeTaskHandler}>Complete Task</button>
        </>
    )
}
export default TaskDetails;