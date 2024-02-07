import { useState} from "react"
import { Link, Outlet } from "react-router-dom"

function Task({title, description, dueDate, parentFn}){
    const[buttonColor, setButtonColor] = useState("blue")
    const[buttonText, setButtonText] = useState(`Due-Date:${dueDate}`)


    function changeButton(e){
      // setButtonColor((color)=>(color==="blue" ? "red" : "blue"))      
      setButtonColor("red")
      setButtonText("Task Completed")
    }


    let secretInfo = "Js is lowkey annoying"

    function passInfoToPArent(){
      // pass secret info to parent
      console.log(parentFn)
      parentFn(secretInfo)
    }
    return(
        <>
        <h3> {title} <Link to={`/tasks/${title}`}>View Task</Link> </h3>
        {/* <Outlet/> */}

        
        {/* <p>Task Description: {description}</p>
        <button onClick={changeButton} style={{backgroundColor: buttonColor, color:"white"}}> {buttonText} </button>
        <button onClick={passInfoToPArent}>Show Secret Word</button> */}
        </>
    )
}

export default Task
