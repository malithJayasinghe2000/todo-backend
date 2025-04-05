import jwt from "jsonwebtoken";

const userAuth = async (req, res, next) => {
    const token = req.cookies.token;
    if(!token){
        return res.json({success: false, message: "Access denied"});
    }
    try{
        const tokenDecode = jwt.verify(token, process.env.JWT_SECRET);
        
        if(tokenDecode.id){
            req.body.userId = tokenDecode.id;
        }else{
            return res.json({success: false, message: "Access denied"});
        }
        next();
    }catch(error){
        return res.json({success: false, message: "Access denied"});
    }
}

export default userAuth;