const { Schema, model } = require('mongoose');

const stageSchema = new Schema({
    title: {
        type: String,
        required:[true, 'Title field is required']
    },
    description: {
        type: String,
        required:[true, 'Description field is required']
    },
    location: {
        type: String,
        required:[true, 'Location field is required']
    },
    festival: {
        type: Schema.Types.ObjectId,
        ref: 'Festival',
        required:[true, 'Festival is required']
    },
    image_path: {
        type: String,
    }
}, {timestamps: true});

module.exports = model('Stage', stageSchema);