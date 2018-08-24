const express = require('express');
const mongoose = require('mongoose');
const db = require('./config/keys').mongoURI;
const users = require('./routes/api/users');
const events = require('./routes/api/events');
const bodyParser = require('body-parser');

//connecting to mongodb
mongoose
    .connect(db)
    .then(() => console.log('Sucessfully connected to MongoDB'))
    .catch((err) => console.log(err));


const app = express();


app.get('/', (req, res) => {
    res.send('Hello World');
});
app.use('/api/users', users);
app.use('/api/events', events);

//Middleware
app.use(bodyParser.urlencoded({extended:false})); 
app.use(bodyParser.json());

//process.env.PORT for deploying to heroku
const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server is running on port: ${port}.`));