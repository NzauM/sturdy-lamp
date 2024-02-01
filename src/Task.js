function Task({title, description, dueDate}){
    return(
        <>
        <h3>Task Title: {title} </h3>
        <p>Task Description: {description}</p>
        <button>Due-Date:{dueDate} </button>
        </>
    )
}

export default Task
