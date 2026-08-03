const { response } = require('express');
const Service = require('../models/service-model')
const User = require('../models/user-model');
const { json } = require('zod');
const Contact = require('../models/contact-model');

const userr = async(req,res) =>{

    try{

        const ud = await User.find({},{password:0});
        if(!ud || ud.length===0){
            res.status(404).json({msg:"user not found"})
        }
        res.status(200).json(ud);

    }catch(error){
        next(error);
    }
}

const ser = async (req,res)=>{
    try{

        const sd = await Service.find();
        console.log(sd);
        if(!sd || sd.length===0){
            res.status(404).json({msg:"services not found"})
        }
        res.status(200).json(sd);

    }catch(error){
        next(error);
    }
}

const con = async (req,res)=>{
    try{

        const cd = await Contact.find();
        console.log(cd);
        if(!cd || cd.length===0){
            res.status(404).json({msg:"contacts not found"})
        }
        res.status(200).json(cd);

    }catch(error){
        next(error);
    }
    
}

const deleteUserById = async (req, res, next) => {
  try {
    const id = req.params.id;

    await User.deleteOne({ _id: id });

    return res.status(200).json({
      message: "User deleted successfully",
    });
  } catch (error) {
    next(error);
  }
};

const getUserById = async (req, res, next) => {
  try {
    const id = req.params.id;

    const data = await User.findOne(
      { _id: id },
      { password: 0 }
    );

    return res.status(200).json(data);
  } catch (error) {
    next(error);
  }
};


const updateUserById = async (req, res) => {
  try {
    const id = req.params.id;
    const { name, email, phone } = req.body;

    // Check if another user already has this email
    const existingUser = await User.findOne({ email });

    if (existingUser && existingUser._id.toString() !== id) {
      return res.status(400).json({
        message: "Email already exists.",
      });
    }

    await User.findByIdAndUpdate(
      id,
      { name, email, phone },
      { new: true }
    );

    return res.status(200).json({
      message: "User updated successfully.",
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      message: "Internal Server Error",
    });
  }
};

const deleteContactById = async (req, res, next) => {
  try {
    const id = req.params.id;

    await Contact.deleteOne({ _id: id });

    return res.status(200).json({
      message: "Contact deleted successfully",
    });
  } catch (error) {
    next(error);
  }
};

const deleteServiceById = async (req, res, next) => {
  try {
    const id = req.params.id;

    await Service.deleteOne({ _id: id });

    return res.status(200).json({
      message: "Service deleted successfully",
    });
  } catch (error) {
    next(error);
  }
};

const addService = async (req, res) => {
  try {
    const { service, price, description } = req.body;

    const newService = await Service.create({
      service,
      price,
      description,
    });

    return res.status(201).json({
      message: "Service added successfully",
      newService,
    });
  } catch (error) {
    return res.status(500).json({
      message: "Internal Server Error",
    });
  }
};


module.exports = {userr,ser,con,deleteUserById,getUserById,updateUserById,deleteContactById,deleteServiceById,addService,}