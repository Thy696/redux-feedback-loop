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

// router.post('/', (req, res) => { // use POST to sent the data that user input from database
//     console.log(req.params);
//     const newFeedback = req.body;
//     console.log(req.body);

//     const queryString = `INSERT INTO "feedback" ("feeling", "understanding", "support", "comments")
//     VALUES ($1, $2, $3 , $4);`
//     // the $1, $2 , $3 , $4 get substituted with the values from the array below
//     pool.query(queryString, [newFeedback.feeling, newFeedback.understanding,newFeedback.support,newFeedback.comments])
//         .then((result => {
//             console.log('sending this: ', result);
//             res.sendStatus(200);
//         })).catch(err => {
//             console.log('Error in POST request', err)
//             res.sendStatus(500);
//         })
//     // res.sendStatus(200);
// }); // END PUT Route


module.exports = router;