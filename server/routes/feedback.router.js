const express = require('express');
const router = express.Router();
const pool = require('../modules/pool');


router.get('/', (req, res) => { //Go to database and get all of the rows that we have
    console.log('GET /review');
    pool.query('SELECT * from "feedback" ORDER BY id')
    .then((result) => {
        console.log('Get rows: ', result.rows)
        res.send(result.rows);//send it to client
    }).catch((error) => {
        console.log('Error GET /feedback', error)
        res.sendStatus(500);
    });
})

router.post('/', async (req, res) => {
    const client = await pool.connect();
    try {
        const {
            feeling,
            understanding,
            support,
            comments,
           
        } = req.body;
        // await client.query('BEGIN')
        client.query(`INSERT INTO "feedback" ("feeling", "understanding", "support", "comments")
        VALUES ($1,$2,$3,$4);
        
        RETURNING id;`, [feeling, understanding, support, comments]);
        // await client.query('COMMIT')
        res.sendStatus(201);


    } catch (error) {
        console.log('Error POST /submit', error);
        res.sendStatus(500);
    
    }
});



module.exports = router;