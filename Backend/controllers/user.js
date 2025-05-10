const user = require('../models/user')
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const secret = "";


async function handleSignUp(req, res) {
    if (!req.body.name || !req.body.email || !req.body.password) {
        return res.status(400).json({ error: "Name, email, and password are required." });
    }
    const saltRounds = 10
    const passh = await bcrypt.hash(req.body.password, saltRounds);
    
    await user.create({
        name:req.body.name,
        email:req.body.email,
        password:passh
    });
    return res.status(200).json({"msg":"success"});
}

async function handleSignIn(req, res) {
    const User = await user.findOne({"email":req.body.email});
    const match = await bcrypt.compare(req.body.password,User.password);
    if(!User || !match) return res.send("Email or Password Wrong");
    const token=jwt.sign({name:User.name,email:User.email},secret)
    res.cookie('uid',token);
    return res.status(200).json({"state":"true","name":User.name,"email":User.email});
}

async function handleLogout(req, res){
    res.clearCookie('uid',{ path: '/' });
    res.end();
}


async function authVerify(req, res) {
    // console.log("hit auth");
    const token = req.cookies?.uid;
  
    if(!token) return res.status(500).json({"state":"false"});
    try {  
        const verifyToken = jwt.verify(token,secret);
        if(verifyToken){
            return res.status(200).json({"state":"true", "name":verifyToken.name});
        }
    } catch (error) {
        console.log("Invalid Token",error);
    }

}

module.exports={handleSignUp, handleSignIn, handleLogout, authVerify};
