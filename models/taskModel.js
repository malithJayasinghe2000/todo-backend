import mongoose from "mongoose";

const taskSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    dueDate: {
        type: Date,
        required: true
    },
    createdBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user'
    },
    completed: {
        type: Boolean,
        default: false
    },

});

const taskModel = mongoose.models.task || mongoose.model('task', taskSchema);

export default taskModel;