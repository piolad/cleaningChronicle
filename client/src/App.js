import React, {useState, useEffect} from 'react'
import './App.css'

function App() {

  return (
    <div>
      <button>LOGIN</button>
      <h1>Cleaning Chronicles - Wittiga 4</h1>

      <div>
        <label>Miesiąc: </label>
        <select>
          <option>Styczeń</option>
          <option>Luty</option>
          <option>Marzec</option>
          <option>Kwiecień</option>
          <option>Maj</option>
          <option>Czerwiec</option>
          <option>Lipiec</option>
          <option>Sierpień</option>
          <option>Wrzesień</option>
          <option selected>Październik</option>
          <option>Listopad</option>
          <option>Grudzień</option>
        </select>
      </div>

      <div>
        {/* list of views */}
        <div className='view'>
          {/* example view */}
          <h2>01/10</h2>
          <div class="container">
            <div class="kitchen">
              <h3>Kuchnia</h3>
              <div>
                <p>Mycie mikrofalówki</p>
                <p>Mokrzyk</p>
              </div>
              <div>
                <p>Zjedzenie ziemniaka</p>
                <p>Paweł</p>
              </div>
            </div>
            <div class="bathroom">
              <h3>Łazienka</h3>
              <div>
                <p>Umycie dupy</p>
                <p>Piotrek</p>
              </div>
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
      </div>
    </div>
  )
}

export default App