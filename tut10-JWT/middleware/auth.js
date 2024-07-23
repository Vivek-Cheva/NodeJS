const {getuser} = require("../service/auth")

async function Tologin(req,res,nxt){
    const useruid = req.cookies?.uid;
    if(!useruid) return res.redirect("/login")
        const user = getuser(useruid)
    if(!user) return res.redirect("/login")

        req.user = user;
        nxt();
}

module.exports={
    Tologin,
}