const User = require("../models/user")
async function handlegetallusers(req, res) {
    const alldbusers = await User.find({})
    return res.json(alldbusers);
}
async function handlegetuserbyid(req, res) {
    // const id = Number(req.params.id)
    const userid = await User.findById(req.params.id)
    // const userid  = await User.findByIdAndUpdate(req.params.id,{lastname:"changed_name"})

    // const user = users.find((user) => user.id === id)
    return res.json(userid);
}
async function handlepostusers(req, res) {
    console.log(req.body);
    const Body = req.body
    const result = await User.create({
        firstname: Body.first_name,
        lastname: Body.last_name,
        email: Body.email,
        gender: Body.gender,
    })
    console.log(result);

    return res.status(201).json({ msg: "inserted sucessfully" });
}

module.exports = {
    handlegetallusers,
    handlegetuserbyid,
    handlepostusers,
}