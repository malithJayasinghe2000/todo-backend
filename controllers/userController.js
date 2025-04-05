import userModel from "../models/userModel.js";

export const getUserData = async (req, res) => {
    try{
        const {userId} = req.body;

        const user = await userModel.findById(userId);

        if(!user){
            return res.json({success: false, message: "User not found"});
        }

        res.json({
            success: true, 
            userData:{
                name: user.name,
                email: user.email,
            }
        });

    }catch (error){
        res.json({success: false, message: error.message});

    }
}

export const updateUserData = async (req, res) => {
    try{
        const {userId, name, email} = req.body;

        const user = await userModel.findById(userId);

        if(!user){
            return res.json({success: false, message: "User not found"});
        }

        user.name = name;
        user.email = email;

        await user.save();

        res.json({
            success: true, 
            message: "User data updated successfully",
            userData:{
                name: user.name,
                email: user.email,
            }
        });

    }catch (error){
        res.json({success: false, message: error.message});

    }
}
