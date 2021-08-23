const express = require('express');
const mongoose = require('mongoose');
const app = express();
const dburl = 'mongodb+srv://mridul:qwertyuiop1234567890@todo.4zjnj.mongodb.net/database?retryWrites=true&w=majority';
const employeesRouter = require('./controllers/employeeController');


app.use('/employees',employeesRouter);

mongoose.connect(dburl, { useNewUrlParser: true, useUnifiedTopology: true })
    .then((result) => app.listen(2678, () => {
        console.log('server started at http://localhost:2678');
    }))
    .catch((err) => console.log(err));

