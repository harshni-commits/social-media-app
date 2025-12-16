const router = require("express").Router();
const User = require("../models/User");

router.post("/register", async (req, res) => {
    const user = new User(req.body);
    await user.save();
    res.json("User Registered");
});

router.post("/login", async (req, res) => {
    const user = await User.findOne(req.body);
    if (user) res.json("Login Success");
    else res.json("Invalid Credentials");
});

module.exports = router;
