const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
const Employee = require('../models/employee');
const employee = require('../models/employee');

const urlencodedParser = bodyParser.urlencoded({ extended: false });


router.route('/').get((req , res) =>{
    Employee.find()
        .then(result => {
            res.send(result);
        })
        .catch(err => {
            console.log(err);
        })
});

router.route('/').post(urlencodedParser , (req , res) => {
  let employee = new Employee({
        // _id: "",
        name: "Mridul",
        office:  "Gurgaon",
        position: "Associate Engineer",
        salary: 355000 
    });

    employee.save()
        .then((result) => {
            //redirect
            res.send(result);
        })
        .catch(err => {
            console.log(err); 
        })

});

router.route('/:id').get((req , res) => {
    let id = req.params.id;
    Employee.findById(id)
        .then(result => {
            res.send(result);
        })
        .catch(err => {
            console.log(err);
        })
})

router.route('/:id').put((req , res) => {
    let id = req.params.id;
   
    Employee.findByIdAndUpdate(id ,{
        name: "Mridul",
        office:"Gurgaon",
        position: "Engineer",
        salary: 655000  
    })
    .then(result => {
        res.send(result);
    })
    .catch(err => {
        console.log(err);
    })

});

router.route('/:id').delete((req , res) =>{
    let id = req.params.id;
    Employee.findByIdAndDelete(id)
        .then(result => {
            res.send(result);
        })
        .catch((err => {
            console.log(err);
        }));
});


module.exports = router;