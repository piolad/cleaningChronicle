const express = require('express');
const path = require('path');
const pgp = require('pg-promise')(/*options */);
const db = pgp('postgres://pi:root@localhost:5432/cleaningchronicle')

const app = express();

// Serve static files from the ../client folder
app.use(express.static(path.join(__dirname, '../client')));

// Route for the default page
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../client/index.html'));
});

// Route for getting data from the database
app.get('/roommates', (req, res) => {
    db.any('SELECT * FROM "public"."roommates"')
        .then(data => {
            res.json(data);
        })
        .catch(error => {
            console.error(error);
            res.status(500).send('Internal Server Error');
        });
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
});
