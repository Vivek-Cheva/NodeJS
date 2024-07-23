const jwt = require("jsonwebtoken")

const sessionidtouser = new Map()
const secret = "Kalyan@123"
function setuser(user){
    // sessionidtouser.set(id,user)
    
    const payload = {
        _id: user._id,
        email:user.email
    }
    return jwt.sign(payload,secret)
}

function getuser(token){
    // return sessionidtouser.get(id);
    if(!token) return null;
    return jwt.verify(token, secret)
}
module.exports={
    setuser,
    getuser
}