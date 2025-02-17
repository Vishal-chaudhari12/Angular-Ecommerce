const mongoose= require('mongoose')

const sellarSchema = new mongoose.Schema({
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

    licenceNo: {
        type: String,
        required: true,
        trim: true,
        uniqu:true
      },

    address: {
      type: String,
      required: true,
      trim: true,
      
    },
   
    password: {
      type: String,
      required: true,
    },
   

  });
  
  // Create and Export Model
   module.exports = mongoose.model("sellar",sellarSchema)