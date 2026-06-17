const mongoose = require("mongoose");
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');


const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  phone: {
    type: String,
    required: true
  },
  isAdmin: {
    type: Boolean,
    default: false
  },
});

userSchema.pre('save', async function () {
  //console,log("pre method",this);

  const user = this;
  if (!this.isModified('password')) {
    return next();
  }

  try {
    const saltRounds = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(user.password, saltRounds);
    user.password = hashedPassword;
  }
  catch (error) {
    next(error);
  }

});

userSchema.methods.comparePassword = async function (candidatePassword) {
  try {
    return await bcrypt.compare(candidatePassword, this.password);
  } catch (error) {
    throw new Error("Password comparison failed");
  }
};

userSchema.methods.generateToken = async function () {
  try {
    return jwt.sign(
      {
        id: this._id.toString(), 
        email: this.email,
        isAdmin: this.isAdmin,
      },
      
      process.env.JWT_SECRET,

      {
        expiresIn: '30d',
      });

  }catch (error) {
    throw new Error("Token generation failed");
  }
  
 };
const User = mongoose.model("User", userSchema);

module.exports = User;