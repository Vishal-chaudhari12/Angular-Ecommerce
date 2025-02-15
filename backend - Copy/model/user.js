const mongoose= require('mongoose')

const userSchema = new mongoose.Schema({
    name: {
      type: String,
      required: true,
      trim: true,
    },
  
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
    conformpassword: {
      type: String,
      required: true,
     
    },
  });
  
  // Create and Export Model
   module.exports = mongoose.model("User1",userSchema)