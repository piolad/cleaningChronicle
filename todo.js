//add entryid to new

// group by date

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
        if(value.toLowerCase === roomName.toLowerCase()){
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