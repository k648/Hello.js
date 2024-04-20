

var express = require ('express');


const app = express();

app.get('/', (req, res) => {
    res.send('Hello World!')
  })

let port = 3000;

app.listen(port , ()=>{
console.log(`the server is listening on ${port}`)
});