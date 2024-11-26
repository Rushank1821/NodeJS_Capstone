const mongoose = require('mongoose');

const requestSchema = new mongoose.Schema({
    mobile: { 
        type: Number, 
        required: [true, 'Mobile number is mandatory.']
    },
    email: { 
        type: String, 
        required: [true, 'email is mandatory.']
    },
    amt: { 
        type: Number, 
        required: [true, 'Amount of loan to be specified.']
    },
    type: { 
        type: String, 
        required: [true, 'Type of loan to be specified']
    },
    msg: { 
        type: String, 
        required: [true, 'Purpose must be specified.']
    },
    code: { 
        type: String, 
        required: [true, 'Code for the loan is mandatory.']
    }
});

module.exports = mongoose.model('Request', requestSchema);


