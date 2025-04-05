import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        match: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
    },
    resetOtp:{
        type: String,
        default: ''
    },
    resetOtpExpireAt:{
        type: Number,
        default: 0
    }
});

const userModel = mongoose.models.user || mongoose.model('user', userSchema);

export default userModel;