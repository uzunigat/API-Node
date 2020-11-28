const { query } = require('express');
const express = require('express');
const router = express.Router();

const mysqlConnection = require('../database.js');