import React from 'react';
import './MonthSelector.css';

function MonthSelector(){   
    const date = new Date()
    const currentMonth = date.getMonth()
    
    const months = ['Styczeń', 'Luty', 'Marzec', 'Kwiecień', 'Maj', 'Czerwiec',
    'Lipiec', 'Sierpień', 'Wrzesień', 'Październik', 'Listopad', 'Grudzień']
    
    const monthOptions = months.map((month, index) => {
        if(index === currentMonth){
            return <option selected>{month}</option>
        }
        else{
            return <option>{month}</option>
        }
    })
    
    return(
        <div className='monthSelector'>
            <label>Miesiąc: </label>
            <select>
                {monthOptions}
            </select>
        </div>
    )
}

export default MonthSelector;