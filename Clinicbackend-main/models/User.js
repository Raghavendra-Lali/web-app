const mongoose = require('mongoose')
const AutoIncrement = require('mongoose-sequence')(mongoose)

const userSchema = new mongoose.Schema({

    name: {
        type: String,
        required: true
    },

    age: {
        type: Number,
        required: true
    },

    mobileno: {
        type: String,
        required: true
    },

    gender: {
        type: String,
        enum: ['Male', 'Female', 'Other'],
        required: true,
        default: "Male"
    },

    bloodgroup: {
        type: String,
        required: false
    },

    address: {
        type: String,
        required: false
    },

    occupation: {
        type: String,
        required: false
    },

    prevvisited: {
        type: Date,
        default: Date.now()
    },

    maritalstatus: {
        type: String,
        enum: ['Single', 'Married', 'Divorced', 'Legally separated', 'Widowed'],
        required: true,
        default: "Single"
    },

    email: {
        type: String,
        required: false
    },

    height: {
        type: Number,
        required: false
    },

    weight: {
        type: Number,
        required: false
    },

    nextvisdate: {
        type: Date,
        default: Date.now()
    },

    dtype: {
        type: String,
        required: true
    },

    diagnosis: {
        type: String,
        required: true
    },

    medname1: {
        type: String,
    },

    dosage1: {
        type: String,
    },

    quantity1: {
        type: String,
    },
    food1: {
        type: String,
    },


    medname2: {
        type: String,
    },

    dosage2: {
        type: String,
    },

    quantity2: {
        type: String,
    },

    food2: {
        type: String,
    },


    medname3: {
        type: String,
    },

    dosage3: {
        type: String,
    },

    quantity3: {
        type: String,
    },

    food3: {
        type: String,
    },

})

userSchema.plugin(AutoIncrement, {
    inc_field: 'pid',
    id: 'patientid',
    start_seq: 1
})

module.exports = mongoose.model('User', userSchema)