const mongoose= require('mongoose')

const productSchema = new mongoose.Schema({
    productName: {
      type: String,
    },
  
    productImg: {
      type: String,
      uniqu:true
    },
   
    productDiscription: {
      type: String,
      required: true,
     
    },
    productPrice:{
        type: String
    }
  });
  
  // Create and Export Model
   module.exports = mongoose.model("product",productSchema)