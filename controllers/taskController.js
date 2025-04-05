import taskModel from "../models/taskModel.js";

export const createTask = async (req, res) => {
    const { title, description, dueDate } = req.body;

    if (!title || !description || !dueDate) {
        return res.json({ success: false, message: "All fields are required" });
    }

    try {

        const task = new taskModel({
            title,
            description,
            dueDate,
            createdBy: req.body.userId
        });

        await task.save();

        res.json({ success: true, message: "Task created" });

    } catch (error) {
        res.json({ success: false, message: error.message });

    }
}

export const getTasks = async (req, res) => {

    try {

        const tasks = await taskModel.find({ createdBy: req.body.userId });

        res.json({ success: true, tasks });

    } catch (error) {
        res.json({ success: false, message: error.message });

    }
}

export const deleteTask = async (req, res) => {
    const { taskId } = req.body;

    if (!taskId) {
        return res.json({ success: false, message: "Task ID is required" });
    }

    try {

        await taskModel.findByIdAndDelete(taskId);

        res.json({ success: true, message: "Task deleted" });

    } catch (error) {
        res.json({ success: false, message: error.message });

    }
}

export const updateTask = async (req, res) => {
    const { taskId, title, description, dueDate } = req.body;

    if (!taskId || !title || !description) {
        return res.json({ success: false, message: "Task ID, title and description are required" });
    }

    try {

        await taskModel.findByIdAndUpdate(taskId, { title, description, dueDate });

        res.json({ success: true, message: "Task updated" });

    } catch (error) {
        res.json({ success: false, message: error.message });

    }
}

export const taskDone = async (req, res) => {
    const { taskId } = req.body;
    if (!taskId) {
        return res.json({ success: false, message: "Task ID is required" });
    }

    try {
        const task = await taskModel.findById(taskId);
        if (!task) {
            return res.json({ success: false, message: "Task not found" });
        }
        task.completed = true;
        await task.save();
        res.json({ success: true, message: "Task marked as completed" });
    } catch (error) {
        res.json({ success: false, message: error.message });
    }
}

