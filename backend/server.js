const express = require('express');
const app = express();
const PORT = 4587;
const mongoose = require('mongoose');


mongoose.connect("mongodb+srv://31860noor:hP8))GNr-S6-Cja@cluster0.twzrvkq.mongodb.net/").
then(() => {console.log("MongoDB connected successfully")}).catch(() => {console.log("Error connecting to MongoDB")});

app.get('/', (req,res) => {
    res.send("<h1>Server Running</h1>");
})

app.listen(3000, () =>{
    console.log(`Server running on ${PORT}`);
}); 