const express = require('express');
const router = express.Router();

const mysqlConnection = require('../database.js');

router.get('/', (req, res) => {

    mysqlConnection.query('SELECT * FROM Phone', (err, rows, fields) => {

        if(!err){

            res.json(rows);

        } else {

            console.log("Query Error");

        }

    });

});

router.get('/:id', (req, res) => {

    const { id } = req.params;
    console.log(id);

})

module.exports = router;