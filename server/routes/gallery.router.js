const { Router, application } = require('express');
const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();


// GET //
router.get('/', (req, res) => {
    console.log('in GET route');
    let sqlQuery = `
    SELECT * FROM "list"
    ORDER BY "id" ASC
    `;
    pool.query(sqlQuery)
    .then((dbRes) => {
        res.send(dbRes.rows);
    })
    .catch((dbErr)=> {
        console.log('GET route not working', dbErr);
        res.sendStatus(500);
    })
})


// POST //

router.post('/', (req,res) => {
    const list = req.body
    const sqlText = `INSERT INTO list ("path", "likes", "description")
    VALUES ($1,$2,$3)`;
    pool.query(sqlText, [list.path,list.likes,list.description])

    .then((result) => {
        console.log(`Added image to the database`, result);
        res.sendStatus(201);
    })
    .catch((error) => {
        console.log(`Error making database query ${sqlText}`, error);
        res.sendStatus(500); // Good server always responds
    })
})



// PUT //
router.put('/:id', (req,res) => {
    console.log('In PUT route');
    console.log('req.params: ', req.params.id);
    // console.log('req.body: ', req.body);
    
    let sqlQuery = 
        `UPDATE "list"
            SET "likes" = "likes" + 1
            WHERE "id"=$1;`;
    let sqlValues = [req.params.id];
    pool.query(sqlQuery, sqlValues)
    .then((response) => {
        console.log('Success in PUT');
        res.sendStatus(200);
    })
    .catch((error) => {
        console.log('Error in PUT: ', error)
        res.sendStatus(500);
    })
})

module.exports = router;