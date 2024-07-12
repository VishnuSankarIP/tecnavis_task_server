const users=require('../Models/userModel')
const jwt = require('jsonwebtoken');

exports.register = async (req, res) => {
    console.log("Inside Register request");
    const { name, email, password } = req.body;

    try {
        const existingUser = await users.findOne({ email });

        if (existingUser) {
            return res.status(406).json("User Already exists"); 
        } else {
            const newUser = new users({ name, email, password });
            await newUser.save();

            
            const token = jwt.sign({ userId: newUser._id }, process.env.JWT_SECRET);

          
            res.status(200).json({ newUser, token });
        }

    } catch (err) {
        console.log(err);
        res.status(401).json("Registration failed"); 
    }
}




