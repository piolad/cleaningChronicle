import TaskElement from "./TaskElement"
import './MonthlyView.css'

function MonthlyView(){

    return(
    <div className='view'>
          {/* example view */}
          <h2>01/10</h2>
          <div class="container">
            <div class="kitchen">
              <h3>Kuchnia</h3>
              <TaskElement cleaner={"Mokrzyk"} task={"Mycie mikrofalówki"}></TaskElement>
              <TaskElement cleaner={"Paweł"} task={"Zjedzenie ziemniaka"}></TaskElement>
            </div>
            <div class="bathroom">
              <h3>Łazienka</h3>
              <TaskElement cleaner={"Piotrek"} task={"Umycie dupska"}></TaskElement>
            </div>
            <div class="wc">
              <h3>Kibelson</h3>
            </div>
            <div class="corridor">
              <h3>Korytatz</h3>
            </div>
            <div class="livingroom">
              <h3>Salon</h3>
            </div>
            <div class="other">
              <h3>Inne</h3>
            </div>
          </div>
    </div>
    )
}

export default MonthlyView