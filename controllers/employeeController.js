const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
const Employee = require('../models/employee');

const urlencodedParser = bodyParser.urlencoded({ extended: false });


router.route('/').get((req , res) =>{
    Employee.find()
        .then(result => {
            res.send(result);
        })
        .catch(err => {
            console.log(err);
        })
})

router.route('/').post(urlencodedParser , (req , res) => {
    let name = req.body.name;
    let position =  req.body.position;
    let office = req.body.office;
    let salary = req.body.salary;
    let employee = new Employee({
        name: name,
        postion:position,
        office: office,
        salary: salary 
    });

    employee.save()
        .then(() => {
            //redirect
        })
        .catch(err => {
            console.log(err); 
        })

})

module.exports = router;