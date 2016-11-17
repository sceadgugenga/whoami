var express = require('express')
var app = express();
var getinfo = require('./getinfo')
app.set('trust_proxy', 1)
app.use(function(req, res) {
	var retVal = getinfo(req, res)
	res.send(retVal)
})
app.listen(process.env.PORT || 3000, function() {
	console.log('  Request Header Parser Microservice listening on port 3000!')
})