var express = require("express");
var app = express();
let port = process.env.PORT;

app.get('/', (req, res) => {
    try
    {
        let a = Number(req.query.a) || 0
        let b = Number(req.query.b) || 0
        
        let sum = a + b
        res.json(sum)
    }
    catch(e)
    {
        res.json('Sai định dạng số')
    }
})

let server = require('http').Server(app);

server.listen(port , () => {
    console.log(`App listen on ${port}`);
  })
