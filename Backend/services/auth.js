const jwt = require('jsonwebtoken');
const secret = "@ancdf#";

function setUser(user){
    return jwt.sign({_id:user,email:user.email},secret);
}

function getUser(token){
    if(!token) return null;
    try {
        return jwt.verify(token,secret);
    } catch (error) {
        return null;
    }
}

module.exports={setUser,getUser};
