const { query } = require('express');
const express = require('express');
const router = express.Router();

const mysqlConnection = require('../database.js');

router.get('/api/phones', (req, res) => {

    mysqlConnection.query('SELECT * FROM Phone', (err, rows, fields) => {

            if(!err) res.json(rows);

            else res.json({status: 'Error GET Phones'});
    });

});

router.get('/api/phones/:numero', (req, res) => {


    let q = `SELECT * FROM Phone WHERE numero = '${req.params.numero}'`;

    mysqlConnection.query(q, (err, rows, fields) => {

            if(!err) res.json(rows);

            else res.json({status: 'Error GET Phones'});
    });

});

router.post('/api/phones', (req, res) => {

    const {numero, type} = req.body;
    let q = `INSERT INTO Phone (numero, type) VALUES ('${numero}', '${type}')`;

    mysqlConnection.query(q, (err, rows, fields) => {

        if(!err) res.json({status: "Phone saved"});

        else res.json({status: 'not saved'});
    });

});


router.put('/api/phones/:numero', (req, res) => {

    const {numero, type} = req.body;
    let q = `UPDATE Phone SET numero = '${numero}', type = '${type}' where numero = '${req.params.numero}'`;

    mysqlConnection.query(q, (err, rows, fields) => {

        if(!err) res.json({status: "Phone updated"});

        else res.json({status: 'not updated'});
    });

});

router.delete('/api/phones/:numero', (req, res) => {

    let q = `DELETE FROM Phone WHERE numero = '${req.params.numero}'`;

    mysqlConnection.query(q, (err, rows, fields) => {

        if(!err) res.json({status: "Phone deleted"});

        else res.json({status: 'Not deleted'});
    });

})

module.exports = router;