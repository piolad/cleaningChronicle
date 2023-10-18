import React, {useState, useEffect} from 'react'
import './App.css'
import MonthSelector from './MonthSelector'
import MonthlyView from './MonthlyView'


function App() {
  
  return (
    <div>
      <button>LOGIN</button>
      <h1>Cleaning Chronicles - Wittiga 4</h1>

      <MonthSelector></MonthSelector>

      <div>
        <MonthlyView></MonthlyView>
      </div>
    </div>
  )
}

export default App