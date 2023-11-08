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
        if(!groupedData[value.date_f]){
            groupedData[value.date_f] = {};
        }
        if(!groupedData[value.date_f][convertRoomNameToEng(value.room)]){
            groupedData[value.date_f][convertRoomNameToEng(value.room)] = [];
        }
        if(!groupedData[value.date_f][convertRoomNameToEng(value.room)][key] ){
            groupedData[value.date_f][convertRoomNameToEng(value.room)][key] = [];
        }
        
        //append els to array
        groupedData[value.date_f][convertRoomNameToEng(value.room)][key].push(value);
        
    }
    return groupedData;
}

function getDaysInMonth(month, year) {
    const today = new Date();
    const date = new Date(year, month, 1);
    const days = [];
    while (date.getMonth() === month && date.getDate() <= (today.getDate()+1)) {
        days.push(new Date(date));
        date.setDate(date.getDate() + 1);
    }
    return days;
}

function MonthlyView() {
    const [data, setData] = useState({ data: {} });

    useEffect(() => {
        const fetchData = async () => {
            const result = await fetch('http://localhost:3000/testtable?fulldata=true');
            const body = await result.json();
            setData( groupDataByDate(body) );
        };
        fetchData();
    }, []);

    const today = new Date();
    const daysInMonth = getDaysInMonth(today.getMonth(), today.getFullYear());

    console.log(data);

    //iteratively convert data to daily views
    var dailyViews = [];
    for (const day of daysInMonth) {
        const date = day.toISOString().split('T')[0];
        const cleaningData = data[date] || {};
        dailyViews.push(<DailyView date={date} cleaningData={cleaningData} />);
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
