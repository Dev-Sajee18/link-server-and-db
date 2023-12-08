const mongoose = require('mongoose');

const dataSchema = new mongoose.Schema({
    employeeName: {
        required: true,
        type: String
    },
    employeeDepartment: {
        required: true,
        type: String
    },
    employeeSalary: {
        required: true,
        type: String
    },
    employeeDestination:{
        required: true,
        type: String
    }
})

module.exports = mongoose.model('Data', dataSchema)