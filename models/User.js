const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    name: {
        type: String,
        maxlength: 50
    },
    email: {
        type: String,
        trim: true,
        unique: 1
    },
    password: {
        type: String,
        minlength: 5
    },
    lastname: {
        type: String,
        maxlength: 50
    },
    role: {
        type: Number,
        default: 0
    },
    image: String,
    token: {
        type: Number
    }
})

const User = mongoose.model('User', userSchema) // 모델은 스키마를 감싸준다.

module.exports = { User } // 외부에서 사용하기위해 모델을 export해준다.