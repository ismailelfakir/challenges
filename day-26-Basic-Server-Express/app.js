const app = require('express')();

const PORT = 3000 ;

app.listen(PORT, ()=>{
  console.log('server is running in port '+PORT);
})

app.get('/', (req,res)=>{
  res.send("Welcome to my Express.js server!");
})
