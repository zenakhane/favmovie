const supertest = require('supertest');
const PgPromise = require("pg-promise")
const express = require('express');
const assert = require('assert');
const fs = require('fs');
require('dotenv').config()
const API = require('./api');
const { default: axios } = require('axios');
const cors = require('cors')
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static('public'));
const config = {
    connectionString: process.env.DATABASE_URL ,
    max: 30,
     ssl: process.env.DATABASE_URL ? true : false
};
const pgp = PgPromise({});
const db = pgp(process.env.DATABASE_URL);
// const db = pgp(DATABASE_URL);
API(app, db);
const PORT = process.env.PORT || 2000;
// API routes to be added here
app.get('/', async function(req, res) {
    console.log({})
    res.json({})
});
app.listen(PORT, function() {
    console.log(`App started on port ${PORT}`)
});



