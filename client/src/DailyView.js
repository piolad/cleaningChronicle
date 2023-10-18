import TaskElement from "./TaskElement"
import AddTaskButton from "./AddTaskButton"
import './DailyView.css'

function DailyView(){

    var kitchenTasks = [ 
        <TaskElement cleaner={"Mokrzyk"} task={"Mycie mikrofalówki"}></TaskElement>,
        <TaskElement cleaner={"Paweł"} task={"Zjedzenie ziemniaka"}></TaskElement>
    ]

    var bathroomTasks = [
        <TaskElement cleaner={"Piotrek"} task={"Umycie dupska"}></TaskElement>
    ]

    var wcTasks = []
    var corridorTasks = []
    var livingroomTasks = []
    var otherTasks = []
    
    return(
    <div className='dailyView'>
      
          <h2>01/10</h2>
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