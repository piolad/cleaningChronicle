import './TaskElement.css'

function TaskElement({cleaner, task}){

    // console.log(cleaner);

    return(
        <div className="TaskElement">
            <p>{task}</p>
            <p className='cleaner'>{cleaner}</p>
        </div>
    )


}

export default TaskElement;