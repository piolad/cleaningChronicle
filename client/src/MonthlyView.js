import TaskElement from "./TaskElement"
import './MonthlyView.css'

function MonthlyView(){

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
    <div className='view'>
          {/* example view */}
          <h2>01/10</h2>
          <div class="container">
            <div class="kitchen">
              <h3>Kuchnia</h3>
              {kitchenTasks}
            </div>
            <div class="bathroom">
              <h3>Łazienka</h3>
              {bathroomTasks}
            </div>
            <div class="wc">
              <h3>Kibelson</h3>
              {wcTasks}
            </div>
            <div class="corridor">
              <h3>Korytatz</h3>
              {corridorTasks}
            </div>
            <div class="livingroom">
              <h3>Salon</h3>
              {livingroomTasks}
            </div>
            <div class="other">
              <h3>Inne</h3>
              {otherTasks}
            </div>
          </div>
    </div>
    )
}

export default MonthlyView