import DailyView from "./DailyView"



function MonthlyView(){
    const data1 =  {
        kitchen: [
            {cleaner: "Mokrzyk", task: "Mycie mikrofalówki"},
            {cleaner: "Paweł", task: "Zjedzenie ziemniaka"}
        ],
        bathroom: [
            {cleaner: "Piotrek", task: "Umycie dupska"}
        ],
        wc: [],
        corridor: [],
        livingroom: [],
        other: []
    }
    var date1 = new Date(2021, 9, 1)
    var date2 = new Date(2021, 9, 2)
    const data2 =  {
        corridor: [
            {cleaner: "Piotrek", task: "Ścieranie kurzu"},
            {cleaner: "Paweł", task: "Zajęcie się Mamą mokrzyka"}
        ],
        bathroom: [
            {cleaner: "Piotrek", task: "Umycie dupska"}
        ],
        wc: [],
        kitchen: [],
        livingroom: [],
        other: []
    }
    
    return(
        <div>
            <DailyView date={date1} cleaningData={data1}/>
            <DailyView date={date2} cleaningData={data2}/>
        </div>
    )
}

export default MonthlyView;