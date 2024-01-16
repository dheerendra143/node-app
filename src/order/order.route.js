const router = require('express').Router();
const {createData, fetchData} = require('./handleOrder');


router.get('/order/:id', fetchData);
router.post('/order/:id', createData);

module.exports = () => router;