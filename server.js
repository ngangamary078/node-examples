let http = require("http");

let server = http.createServer((req, res)=>{
    console.log("Received a request")
    res.writeHead(500, {});
    res.write("Hello world");
    res.end();
    // console.log(req);
    // console.log(res);
})
console.log("server starting");
server.listen(5500);