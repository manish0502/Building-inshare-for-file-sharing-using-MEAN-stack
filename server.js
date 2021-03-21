require('dotenv').config
const express = require('express');
const app = express();
const connectDB = require('./config/db');
const path = require('path');
const cors = require('cors');




app.use(express.static('public'));
// databse setup

connectDB();


app.use(express.json({extended : false}));
app.set('views', path.join(__dirname, '/views'));
app.set('view engine', 'ejs');


//setup routes

app.use('/api/files', require('./routes/files'))
app.use('/files' , require('./routes/show'))
app.use('/files/download', require('./routes/download'));




// server setup

const PORT = process.env.PORT || 3000;

app.listen(PORT ,()=>{
    console.log(`server is running at ${PORT}`);
})