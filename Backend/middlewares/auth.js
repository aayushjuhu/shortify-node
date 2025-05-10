const {getUser} = require("../services/auth");

async function restrictToLoggedinUserOnly(req, res, next) {
    // console.log(req);
    const userUid=req.cookies?.uid;
    // console.log(userUid);

    if(!userUid) return null;
    const user=getUser(userUid);
    console.log(user);

    if(!user) return null;

    req.user=user;
    next();
}



module.exports={restrictToLoggedinUserOnly};