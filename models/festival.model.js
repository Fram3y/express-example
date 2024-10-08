const { Schema, model } = require('mongoose');

const festivalSchema = new Schema({
    title: {
        type: String,
        required:[true, 'Title field is required']
    },
    description: {
        type: String,
        required:[true, 'Description field is required']
    },
    city: {
        type: String,
        required:[true, 'City field is required']
    },
    start_date: {
        type: Date,
        required:[true, 'Start Date is required']
    },
    end_date: {
        type: Date,
        required:[true, 'End Date is required']
    },
    image_path: {
        type: String
    }
}, {timestamps: true});

module.exports = model('Festival', festivalSchema);