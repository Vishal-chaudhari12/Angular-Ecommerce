const mongoose= require('mongoose')

const loginSchema = new mongoose.Schema({
    
    email: {
      type: String,
      required: true,
      trim: true,
      uniqu:true
    },
   
    password: {
      type: String,
      required: true,
    },

  });
  
  // Create and Export Model
   module.exports = mongoose.model("login1",loginSchema)