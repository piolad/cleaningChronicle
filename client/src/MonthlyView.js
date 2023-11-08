import { useState, useEffect } from "react";
import AddTaskButton from "./AddTaskButton";
import DailyView from "./DailyView";

const roomNamesConvertion = {
    "kibelson": "wc",
    "kuchnia": "kitchen",
    "salon": "livingroom",
    "łazienka": "bathroom",
    "korytarz": "corridor",
    "inne": "other"
}

function convertRoomNameToEng(roomName){
    return roomNamesConvertion[roomName.toLowerCase()];
}

function convertRoomNameToPl(roomName){
    for (const [key, value] of Object.entries(roomNamesConvertion)) {
        if(value.toLowerCase() === roomName.toLowerCase()){
            return key;
        }
    }
}

function groupDataByDate(data){
    var groupedData = {};
    for (const [key, value] of Object.entries(data.data)) {
        if(!groupedData[value.date]){
            groupedData[value.date] = {};
        }
        if(!groupedData[value.date][convertRoomNameToEng(value.room)]){
            groupedData[value.date][convertRoomNameToEng(value.room)] = [];
        }
        
        //append els to array
        groupedData[value.date][convertRoomNameToEng(value.room)].push(value);
        
    }
    return groupedData;
}

// const data = {
//     "data":
//     [
//     {
//         date: new Date(2021, 9, 1),
//         kitchen: [
//             {cleaner: "Mokrzyk", task: "Mycie mikrofalówki"},
//             {cleaner: "Paweł", task: "Zjedzenie ziemniaka"}
//         ],
//         bathroom: [
//             {cleaner: "Piotrek", task: "Umycie dupska"}
//         ],
//     },
//     {
//         date: new Date(2021, 9, 2),
//         corridor: [
//             {cleaner: "Piotrek", task: "Ścieranie kurzu"},
//             {cleaner: "Paweł", task: "Zajęcie się Mamą mokrzyka"}
//         ],
//         bathroom: [
//             {cleaner: "Piotrek", task: "Umycie dupska"}
//         ],
//     }

// ]
// }
function MonthlyView() {
    const [data, setData] = useState({ data: [] });

    useEffect(() => {
        const fetchData = async () => {
            const result = await fetch('http://localhost:3000/testtable?fulldata=true');
            const body = await result.json();
            setData( groupDataByDate(body) );
        };
        fetchData();
    }
        , []);

    //iteratively convert data to daily views
    var dailyViews = [];
    for (const [key, value] of Object.entries(data)) {
        console.log(key)
        dailyViews.push(<DailyView date={key} cleaningData={value} />);
        // dailyViews.push(<p>{value.date.toString()}</p>)
        // console.log(value.date)
    }

    return (
        <div>
            {dailyViews}
            <p></p>
            {/*  to consider:
                        <AddTaskButton></AddTaskButton> */}
        </div>
    );
}

export default MonthlyView;





// function MonthlyView(){

//     //iteratively convert data to daily views
//     var dailyViews = []
//     for (const [key, value] of Object.entries(data.data)) {
//         dailyViews.push(<DailyView date={value.date} cleaningData={value}/>)
//     }

//     return(
//         <div>
//             {dailyViews}

//         {/*  to consider:
//             <AddTaskButton></AddTaskButton> */}
//         </div>
//     )
// }

// export default MonthlyView;