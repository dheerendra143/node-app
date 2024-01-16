const router = require('express').Router();
const user = require('./handleUser')();
 
router.get('/user/:id', user.fetch);
router.post('/user/:id', user.create);

module.exports = () => router;