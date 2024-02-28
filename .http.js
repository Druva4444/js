const http = require("http");
const server = http.createServer((req,res)=>{
   // res.write("hello welcome to our page")
    if(req.url === "/"){
        res.end("here is our short history")
    }
    if(req.url ==="/about"){
        res.end("here is our short history about")
    }
    res.end(
    
        'p>hello world</p>'
        
    );
}

)
server.listen(5000);