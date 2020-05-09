const express = require('express');
const router = express.Router();
const pool = require('../modules/pool');


router.get('/', (req, res) => { //Go to database and get all of the rows that we have
    console.log('GET /review');
    pool.query('SELECT * from "feedback"')
    .then((result) => {
        console.log('Get rows: ', result.rows)
        res.send(result.rows);//send it to client
    }).catch((error) => {
        console.log('Error GET /feedback', error)
        res.sendStatus(500);
    });
})

module.exports = router;