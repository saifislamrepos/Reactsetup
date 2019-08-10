const express = require('express');
const router = express.Router();
const path = require('path');
const controllers = require('../config/controller');
router.get('*js', controllers.serveGzipped('text/javascript'));
router.use('/assets',express.static(path.join(__dirname,'../dist/assets'),{
    immutable : true,
    maxAge    : '1y'
}));
router.use(function (err, req, res, next) {
	console.log('error');
	if (!err.statusCode) err.statusCode = 500; 
	res.status(err.statusCode).send(err.message);
});

module.exports = router