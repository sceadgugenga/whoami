module.exports = function(req, res) {
	const url = require('url');
	var path = url.parse(req.url).pathname;
	var retVal;
	
	// Find browser os
	var os = req.headers['user-agent']
	var openParenInx = os.indexOf('(')
	var closeParenInx = os.indexOf(')')
	os = os.slice(openParenInx + 1, closeParenInx)
	
	// try to find IP
	var ipAdd = (req.headers['x-client-ip'] || 
	req.headers['x-forward-for'] || 
	req.headers['x-cluster-client-ip'] || 
	req.connection.remoteAddress || 
	req.socket.remoteAddress || 
	req.connection.socket.remoteAddress || 
	req.info.remoteAddress);
	if (ipAdd.substr(0, 7) == "::ffff:") {
       ipAdd = ipAdd.substr(7)
}
	
	// get lang 
	var lang = req.headers["accept-language"].split(",")[0]
	
	
	return {
		"ipaddress": ipAdd,
		"language": lang,
		"software": os
	}
}