import React from 'react';
import './MonthSelector.css';

function MonthSelector({month, setMonth}){   
    const currentMonth = month
    
    const months = ['Styczeń', 'Luty', 'Marzec', 'Kwiecień', 'Maj', 'Czerwiec',
    'Lipiec', 'Sierpień', 'Wrzesień', 'Październik', 'Listopad', 'Grudzień']
    
    const monthOptions = months.map((monthName, index) => {
        if(index === currentMonth){
            return <option selected>{monthName}</option>
        }
        else{
            return <option>{monthName}</option>
        }
    })
 
    return(
        <div className='monthSelector'>
            <label>Miesiąc: </label>
            <select onChange={(e)=>{setMonth(months.indexOf(e.target.value))}}>
                {monthOptions}
            </select>
        </div>
    )
}

export default MonthSelector;