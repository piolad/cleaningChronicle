import React, {useState, useEffect} from 'react'
import './App.css'
import MonthSelector from './MonthSelector'
import MonthlyView from './MonthlyView'


function App() {
  
  // usestate to store the current month
  const [month, setMonth] = useState(new Date().getMonth())

  return (
    <div>
      <button className='loginButton'>LOGIN</button>
      <h1>Cleaning Chronicles - Wittiga 4</h1>

      <MonthSelector month={month} setMonth={setMonth}></MonthSelector>

      <div>
        <MonthlyView ></MonthlyView>
      </div>
    </div>
  )
}

export default App