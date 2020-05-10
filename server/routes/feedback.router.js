const express = require('express');
const router = express.Router();
const pool = require('../modules/pool');

//GET Route
router.get('/', (req, res) => { 
    console.log('GET /review');
    pool.query('SELECT * from "feedback" ORDER BY id DESC')//Go to database and get all of the rows that we have
        .then((result) => {
            console.log('Get rows: ', result.rows)
            res.send(result.rows);//send it to client
        }).catch((error) => {
            console.log('Error GET /feedback', error)
            res.sendStatus(500);
        });
})//End GET Route


//POST Route
router.post('/', (req, res) => { // use POST to sent the data that user input from database
    console.log(req.params);
    const newFeedback = req.body;
    console.log(req.body);

    const queryString = `INSERT INTO "feedback" ("feeling", "understanding", "support", "comments")
    VALUES ($1, $2, $3, $4);`//Go to database and post a new feedback 
    // the $1, $2 get substituted with the values from the array below
    pool.query(queryString, [newFeedback.feeling, newFeedback.understanding, newFeedback.support, newFeedback.comments])
        .then((result => {
            console.log('sending this: ', result);
            res.sendStatus(200);
        })).catch(err => {
            console.log('Error in POST request', err)
            res.sendStatus(500);
        })
}); // End POST Route

//DELETE Route
router.delete('/:id', (req, res) => {
    let id = req.params.id;// We are using a request parameter (req.params) to identify
    // the specific feedback. We expect this will be an id from the database.
    console.log('req.params.id:', req.params.id);
    console.log('Delete request for this id: ', id);
    let sqlText = `DELETE FROM feedback WHERE id = $1`; //Go to database and delete a feedback by id
    pool.query(sqlText, [id])
        .then(result => {
            console.log('in DELETE router',result)
            res.sendStatus(200);
        }).catch(err => {
            console.log('Error in DELETE route', err);
            res.sendStatus(500);
        })
}) // End DELETE Route


module.exports = router;