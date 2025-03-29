const mongoose= require('mongoose')

const cardSchema = new mongoose.Schema({
    userId: String, // Associate cart with a user
    products: [
      {
        productId: String,
        title: String,
        price: Number,
        image: String,
        quantity: Number
      }
    ]

  });
  
  // Create and Export Model
   module.exports = mongoose.model("Cart",cardSchema)