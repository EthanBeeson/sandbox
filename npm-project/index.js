const http = require("http");

const host = "localhost";

const port = 8000;

const requestListener = function(req, res){
	res.writeHead(200);
	res.end("My First Server");
}

const server = http.createServer(requestListener);
server.listen(port, host, function(){
	console.log("Server is running on port " + port);
})
