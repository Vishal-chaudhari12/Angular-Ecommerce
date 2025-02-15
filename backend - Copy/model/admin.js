const mongoose= require('mongoose')

const adminSchema = new mongoose.Schema({
  id: {
    type: String,
    required: true,
    trim: true,
  },

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

    mobNo: {
      type: Number,
      required: true,
      trim: true,
      uniqu:true
    },

    deptName: {
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
   module.exports = mongoose.model("admin1",adminSchema)