import { useState } from "react"

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
        <h3>Task Title: {title} </h3>
        <p>Task Description: {description}</p>
        <button onClick={changeButton} style={{backgroundColor: buttonColor, color:"white"}}> {buttonText} </button>
        <button onClick={passInfoToPArent}>Show Secret Word</button>
        </>
    )
}

export default Task
