const express = require('express');
const app = express();
const path = require('path');

app.listen(3000 , () => console.log('listening to port 3000...'));

app.get('/' , (req , res) => {
    res.sendFile(path.join(__dirname , '/public' , '/index.html'));
})
app.get('/about' , (req , res , next) => {
    res.sendFile(path.join(__dirname , '/public' , '/about.html'));
})
app.get('/contact' , (req , res , next) => {
    res.sendFile(path.join(__dirname , '/public' , '/contact.html'));
})



