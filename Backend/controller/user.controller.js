import User from "../model/user.model.js";
import bcryptjs from "bcryptjs";

export const signup = async (req, res) => {
    try {
        const { fullname, email, password } = req.body;

        // Validate input
        if (!fullname || !email || !password) {
            return res.status(400).json({ message: "All fields are required" });
        }

        // Check if the user already exists
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ message: "User already exists" });
        }

        // Hash the password
        const hashedPassword = await bcryptjs.hash(password, 10);

        // Create a new user
        const newUser = new User({
            fullname,
            email,
            password: hashedPassword,
        });

        // Save the user to the database
        await newUser.save();

        // Respond with a success message
        res.status(201).json({ message: "User created successfully",
            user:{
            _id: newUser._id,
            fullname: newUser.fullname,
            email: newUser.email
        } });
    } catch (error) {
        console.error("Error:", error.message);
        res.status(500).json({ message: "Internal Server Error" });
    }
};

export const login=async (req, res) => {
    try {
        const {email,password} = req.body;
        const user = await User.findOne({ email });
        const isMatch=await bcryptjs.compare(password, user.password)
        if(!user || !isMatch){
            return res.status(400).json({message:"Invalid username or password"});

        }else{
            res.status(200).json({message:"Login succesful",user:{
                _id:user._id,
                fullname:user.fullname,
                email:user.email
            }})
        }
    } catch (error) {
        console.log("Error: "+error.message)
        res.status(500).json({ message: "Internal Server Error" });
    }
}