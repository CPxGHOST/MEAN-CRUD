const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const employeeSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    position: {
        type: String,
        required: true
    },
    office: {
        type: String,
        required: true
    },
    salary: {
        type: Number,
        required: true
    }
}, {timestamps: true});

const employee = mongoose.model('employee',employeeSchema);

module.exports = employee;