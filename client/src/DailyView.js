import TaskElement from "./TaskElement"
import AddTaskButton from "./AddTaskButton"
import './DailyView.css'

function DailyView({cleaningData, date}){

    var kitchenTasks = []
    var bathroomTasks = []
    var wcTasks = []
    var corridorTasks = []
    var livingroomTasks = []
    var otherTasks = []
    
    for (const [key, value] of Object.entries(cleaningData)) {

        if(key === "kitchen"){
            for (const [key, value] of Object.entries(cleaningData.kitchen)) {
                kitchenTasks.push(<TaskElement cleaner={value.cleaner} task={value.task}></TaskElement>)
            }
        }
        if(key === "bathroom"){
            for (const [key, value] of Object.entries(cleaningData.bathroom)) {
                bathroomTasks.push(<TaskElement cleaner={value.cleaner} task={value.task}></TaskElement>)
            }
        }
        if(key === "wc"){
            for (const [key, value] of Object.entries(cleaningData.wc)) {
                wcTasks.push(<TaskElement cleaner={value.cleaner} task={value.task}></TaskElement>)
            }
        }
        if(key === "corridor"){
            for (const [key, value] of Object.entries(cleaningData.corridor)) {
                corridorTasks.push(<TaskElement cleaner={value.cleaner} task={value.task}></TaskElement>)
            }
        }
        if(key === "livingroom"){
            for (const [key, value] of Object.entries(cleaningData.livingroom)) {
                livingroomTasks.push(<TaskElement cleaner={value.cleaner} task={value.task}></TaskElement>)
            }
        }
        if(key === "other"){
            for (const [key, value] of Object.entries(cleaningData.other)) {
                otherTasks.push(<TaskElement cleaner={value.cleaner} task={value.task}></TaskElement>)
            }
        }
      }


    return(
    <div className='dailyView'>
      
          <h2>{date}</h2>
          <div class="container">
            <div class="kitchen">
              <h3>Kuchnia</h3>
              {kitchenTasks}
              <AddTaskButton></AddTaskButton>
            </div>
            <div class="bathroom">
              <h3>Łazienka</h3>
              {bathroomTasks}
              <AddTaskButton></AddTaskButton>
            </div>
            <div class="wc">
              <h3>Kibelson</h3>
              {wcTasks}
              <AddTaskButton></AddTaskButton>
            </div>
            <div class="corridor">
              <h3>Korytarz</h3>
              {corridorTasks}
              <AddTaskButton></AddTaskButton>
            </div>
            <div class="livingroom">
              <h3>Salon</h3>
              {livingroomTasks}
              <AddTaskButton></AddTaskButton>
            </div>
            <div class="other">
              <h3>Inne</h3>
              {otherTasks}
              <AddTaskButton></AddTaskButton>
            </div>
          </div>
    </div>
    )
}

export default DailyView