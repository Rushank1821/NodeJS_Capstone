const mongoose = require('mongoose');

const memberSchema = new mongoose.Schema({
    mobile: { 
        type: Number, 
        required: [true, 'Contact number is mandatory.'],
        unique: true
    },
    email: { 
        type: String, 
        required: [true, 'email is mandatory.'], 
        unique: true
    },
    occupation: { 
        type: String, 
        required: [true, 'Occupation must be specified.']
    },
    createpassword: { 
        type: String, 
        required: [true, 'Password is mandatory.'],
        unique: true
    }
});

module.exports = mongoose.model('Member', memberSchema);





