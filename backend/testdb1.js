const express = require('express');
const path = require('path');
const pgp = require('pg-promise')(/*options */);
const db = pgp('postgres://pi:root@192.168.1.21:5432/cleaningchronicle')

const app = express();

// Serve static files from the ../client folder
// app.use(express.static(path.join(__dirname, '../client/build')));

// Route for the default page
// app.get('/', (req, res) => {
//     res.sendFile(path.join(__dirname, '../client/public/index.html'));
// });

// Route for getting data from the database
app.get('/testtable', (req, res) => {
    // the url would look like this: http://localhost:3000/testtable?dateFrom=2021-10-01&dateTo=2021-10-31
    const dateFrom = req.query.dateFrom || new Date(new Date().getFullYear(), new Date().getMonth(), 1).toISOString().slice(0, 10);
    const dateTo = req.query.dateTo || new Date().toISOString().slice(0, 10);
    
    //conver date to string
    db.any('SELECT TO_CHAR(date, \'YYYY-MM-DD\') as DATE_F, * FROM "public"."testtable" WHERE date BETWEEN \''+dateFrom+'\' AND \''+dateTo+'\' ORDER BY date ASC LIMIT 1000')
        .then(data => {
            // res.json(data);
            //fix CORS:
            res.header("Access-Control-Allow-Origin", "*");
            res.header("Access-Control-Allow-Headers", "X-Requested-With");
            // res.json(data);
            //test data:
            // res.json({data: [{date: '2021-10-01', task: 'test task 1'}, {date: '2021-10-02', task: 'test task 2'}]});
            if(req.query.fulldata == 'true'){
                //request like : http://localhost:3000/testtable?dateFrom=2021-10-01&dateTo=2021-10-31&fulldata=true
                res.json({ data: data});
                return;
            }
            const data1 = {
                "data":
                [
                {
                    date: new Date(2021, 9, 1),
                    kitchen: [
                        {cleaner: "Mokrzyk", task: "Mycie mikrofalówki"},
                        {cleaner: "Paweł", task: "Zjedzenie ziemniaka"}
                    ],
                    bathroom: [
                        {cleaner: "Piotrek", task: "Umycie dupska"}
                    ],
                },
                {
                    date: new Date(2021, 9, 2),
                    corridor: [
                        {cleaner: "Piotrek", task: "Ścieranie kurzu"},
                        {cleaner: "Paweł", task: "Zajęcie się Mamą mokrzyka"}
                    ],
                    bathroom: [
                        {cleaner: "Piotrek", task: "Umycie dupska"}
                    ],
                }
            
            ]
            }
            res.json(data);

        })
        .catch(error => {
            console.error(error);
            res.status(500).send('Internal Server Error');
        });
});

app.get('/inserttesttable' , (req, res) => {
    // the url would look like this: http://localhost:3000/insert?date=2021-10-01&room=wc&roommate=piotrek&activity=umycie%20dupska

    if(!req.query.date || !req.query.room || !req.query.roommate || !req.query.activity){
        res.status(400).send('Bad Request');
        return;
    }
    const date = req.query.date;
    const room = req.query.room;
    const roommate = req.query.roommate;
    const activity = req.query.activity;

    //print the ip of the client:
    console.log(req.ip);

    db.any('INSERT INTO "public"."testtable"("date", "room", "roommate", "activity") VALUES (\''+date+'\', \''+room+'\', \''+roommate+'\', \''+activity+'\')')
        .then(data => {
            res.json({status: 'ok'});
        })
        .catch(error => {
            console.error(error);
            res.status(500).send('Internal Server Error');
        });


})

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
});
