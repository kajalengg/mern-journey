const User = require('../models/user-model');
const bcrypt = require('bcryptjs');

const home = async (req, res) => {
  try {
    res.status(200).json({ message: "Home Page" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Server error home" });
  }
};

const lo = async (req, res) => {
  try {
    const { email, password } = req.body;
    const userExists = await User.findOne({ email });
    console.log(userExists);
    if (!userExists) {
      return res.status(400).json({ message: "Invalid email " });
    }

    const isPasswordValid = await userExists.comparePassword(password);

    if (isPasswordValid) {

      res.status(200)
    .json({ msg: "login successfull",
      token: await userExists.generateToken(),
      id: userExists._id.toString() });
      
    }else {
      return res.status(401).json({ message: "Invalid password" });
    }
    
  } catch (error) {
    //console.log(error);
    //res.status(500).send({ message: "Server error login" });
    next(error);
  }
};

const re = async (req, res) => {
  try {
    console.log(req.body);
    const {name, email, password, phone } = req.body;
    const userExists = await User.findOne({ email });
    if (userExists) {
      return res.status(400).json({ message: "User already exists" });
    }
    const usercreated = await User.create({
      name,
      email,
      password,
      phone,
    });
    res.status(201)
    .json({ msg: "registration successfull",
      token: await usercreated.generateToken(),
      id: usercreated._id.toString() });
  }
  catch (error) {
    //console.error(error);
    //res.status(500).json({ message: "Server error" });
    next(error);
  }


};
module.exports = {lo, re, home,};
