import userModel from "../models/userModel.js";
import { comparePassword, hashPassword } from "./../helpers/authHelper.js";
import jwt  from "jsonwebtoken";

export const registerController = async (req, res) => {
  try {
    const { name, email, password, phone, address } = req.body;
    //validations
    if (!name) {
      return res.send({ error: "Name is Required" });
    }
    if (!email) {
      return res.send({ error: "Email is Required" });
    }
    if (!password) {
      return res.send({ error: "Password is Required" });
    }
    if (!phone) {
      return res.send({ error: "Phone no is Required" });
    }
    if (!address) {
      return res.send({ error: "Address is Required" });
    }
    //check user
    const exisitingUser = await userModel.findOne({ email });
    //exisiting user
    if (exisitingUser) {
      return res.status(200).send({
        success: true,
        message: "Already Register please login",
      });
    }
    //register user
    const hashedPassword = await hashPassword(password);
    //save
    const user = await new userModel({
      name,
      email,
      phone,
      address,
      password: hashedPassword,
    }).save();

    res.status(201).send({
      success: true,
      message: "User Register Successfully",
      user,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Errro in Registeration",
      error,
    });
  }
};

export const loginController = async(req, res) => {
    try {
        const {email, password} = req.body;
        if(!email || ! password){
            res.status(404).json({
                success:false,
                msg: "Invalid email or password"
            })
        }
        const user = await userModel.findOne({ email });
        if(!user){
            res.status(500).json({
                success: false,
                msg: "Email does not exists"
            })
        }
        const match = await comparePassword(password, user.password);
        if(!match){
            res.status(200).send({
                success:false,
                msg: "invalid password"
            })
        }
        const token = await jwt.sign({ _id:user._id }, process.env.JWT_SECRET);
        res.status(200).json({
            user: {

            name: user.name,
            email: user.email,
            phone: user.phone,
            address: user.address,
            },
            token,
        })
    } catch (error) {
        console.log(error);
        res.status(500).json({
            success: false,
            msg: "Error in login",
            error
        })
    }
}

export const testController = async (req, res) => {

    try {
        res.send("protected route")
    } catch (error) {
        console.log(error);
    }
}
