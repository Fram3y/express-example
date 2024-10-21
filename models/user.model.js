const { Schema, model } = require('mongoose');
const bcrypt = require('bcryptjs');

const validateEmail = (email) => {
    let regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    return regex.test(email);
}

const userSchema = new Schema({
    full_name: {
        type: String,
        required:[true, 'Full name is required'],
        trim: true
    },
    email: {
        type: String,
        required:[true, 'Email address is required'],
        unique: true,
        lowercase: true,
        trim: true,
        // validate: [validateEmail, 'Please use a valid email address'],
        match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please use a valid email address'], 
    },
    password: {
        type: String,
        required:[true, 'Password is required']
    }
}, {timestamps: true})

userSchema.methods.comparePassword = function(password){
    return bcrypt.compareSync(password, this.password, function(result){
        return result;
    });
}

module.exports = model('User', userSchema);