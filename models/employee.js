const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const employeeSchema = new Schema({
    name: {
        type: String
    },
    position: {
        type: String
    },
    office: {
        type: String
    },
    salary: {
        type: Number
      
    }
}, {timestamps: true});

const employee = mongoose.model('employee',employeeSchema);

module.exports = employee;