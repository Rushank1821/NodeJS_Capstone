const mongoose = require('mongoose');

const serviceSchema = mongoose.Schema({
    type: { 
        type: String, 
        required: [true, 'Type of loan is mandatory.'] 
    },
    code: { 
        type: String, 
        required: [true, 'Code for loan is mandatory.'],
        unique: true
    },
    description: { 
        type: String, 
        required: [true, 'Description for loan is required.']
    },
    imgUrl: { 
        type: String, 
        required: [true, 'Image url is required.']
    },
    detail: { 
        type: Array, 
        required: [true, 'Description is mandatory.']
    }
});

module.exports = mongoose.model('Service', serviceSchema);

