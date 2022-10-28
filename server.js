const express = require("express");
const routes =require('./routes');

const app = express();
const port = process.env.PORT || 3001;

app.use(express.urlencoded({extended:true}));
app.use(express.json());
app.use(routes);
app.use(express.static('public'));

app.listen(port, ()=>{
    console.log(`Now Listening to ${port}`)
    console.log(__dirname)
})