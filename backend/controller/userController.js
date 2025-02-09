import User from "../model/userModel.js"
import bcrypt from "bcryptjs"

export const signup = async (req, res) => {
    try {
        // console.log(req.body)
        const { name, email, password } = req.body;
        const user = await User.findOne({ email })
        if (user) {
            return res.status(400).json({ message: "Email already exists" })
        }
        const hashedPassword = await bcrypt.hash(password, 10)
        const newUser = new User({
            name: name,
            email: email,
            password: hashedPassword
        })
        await newUser.save()
        res.status(201).json({ message: "User created successfully" })
    } catch (error) {
        console.log(error)
        res.status(500).json({ message: error.message })
    }
}

export const login = async (req, res) => {
    try {
        const { email, password } = req.query;
        console.log(req.query)
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(400).json({ message: "Invalid email or password" });
        }

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(400).json({ message: "Invalid email or password" });
        }

        res.status(200).json({
            message: "User logged in successfully",
            user: {
                id: user._id,
                name: user.name,
                email: user.email
            }
        });

    } catch (error) {
        console.log(error)
        res.status(500).json({ message: error.message })
    }
}