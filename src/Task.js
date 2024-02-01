import { useState } from "react"

function Task({title, description, dueDate}){
    const[bgColor, setBgColor] = useState("blue")

    function finishTaskFn(e){
        // setBgColor("red")
        setBgColor((newColor)=>{return newColor="red"})
        alert("Congrats Champ!!")
        e.target.textContent = "Task Completed"
        console.log(bgColor);
    }
    return(
        <>
        <h3>Task Title: {title} </h3>
        <p>Task Description: {description}</p>
        <button onClick={finishTaskFn} style={{backgroundColor:bgColor}}>Due-Date:{dueDate} </button>
        </>
    )
}

export default Task
