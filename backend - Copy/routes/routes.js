const express = require("express");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const User = require("../model/user");
require("dotenv").config();
const Product= require("../model/product");
const admin = require("../model/admin");
const seller = require("../model/seller");



const router = express.Router();

// Register Route
router.post("/register", async (req, res) => {
  try {
    let { email, password, name ,conformpassword} = req.body;

    if (!email || !password || !name ||!conformpassword) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const record = await User.findOne({ email });
    if (record) {
      return res.status(400).json({ message: "Email is already registered" });
    }

    // Hash the password before saving
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = new User({ name, email, password: hashedPassword, conformpassword:hashedPassword});
    const result = await user.save();

    // Create JWT token
    const token = jwt.sign(
      { userId: result._id, email: result.email },
      process.env.JWT_SECRET,
      { expiresIn: "12h" }
    );

    return res.status(201).json({
      message: "User registered successfully",
      token: token,
      user: { name: result.name, email: result.email },
    });
  } catch (error) {
    return res.status(500).json({ message: "Internal server error", error: error.message });
  }
});

// Login route

router.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({ message: "Missing email or password" });
    }

    const user = await User.findOne({ email });
    if (!user) {
      return res.status(401).json({ message: "Invalid credentials" });
    }

    // Compare hashed password
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return res.status(401).json({ message: "Invalid credentials" });
    }

    // Create JWT token
    const token = jwt.sign(
      { userId: user._id, email: user.email },
      process.env.JWT_SECRET,
      { expiresIn: "1h" }
    );

    return res.status(200).json({
      message: "Login successful",
      token: token,
      login: { name: user.name, email: user.email },
    });
  } catch (error) {
    return res.status(500).json({ message: "Internal server error", error: error.message });
  }
});


// Forgot Password Route
router.post("/forgot-password", async (req, res) => {
  try {
    const { email, newPassword, confirmPassword } = req.body;

    if (!email || !newPassword || !confirmPassword) {
      return res.status(400).json({ message: "All fields are required" });
    }

    if (newPassword !== confirmPassword) {
      return res.status(400).json({ message: "Passwords do not match" });
    }

    const user = await User.findOne({ email });
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    // Hash the new password before saving
    const hashedPassword = await bcrypt.hash(newPassword, 10);
    user.password = hashedPassword;
    await user.save();

    return res.status(200).json({ message: "Password reset successfully" });
  } catch (error) {
    return res.status(500).json({ message: "Internal server error", error: error.message });
  }
});


router.get("/profile",  async (req, res) => {
  try {
    const user = await User.findById(req.userData.userId).select("-password"); // Exclude password

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    return res.status(200).json(user);
  } catch (error) {
    return res.status(500).json({ message: "Internal server error", error: error.message });
  }
});


// Forgot password route
router.post("/forgot-password", async (req, res) => {
  try {
    const { email, newPassword } = req.body;
    const user = await User.findOne({ email });

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    user.password = newPassword;
    await user.save();

    return res.status(200).json({ message: "Password reset successfully" });
  } catch (error) {
    return res.status(500).json({ message: "Internal server error", error: error.message });
  }
});


// Product 
router.post("/product", async (req, res) => {
  console.log(req, "req at api");
  
  try {
    let { productName, productImg, productPrice,productDiscription } = req.body;

    // Create new user with plain text password (not secure for real apps)
    const product = new Product({ productName, productImg, productPrice,productDiscription });
    console.log(product, "product saved in db");
    
    const result = await product.save();
    console.log(result, "result of save query");

    return res.status(201).json({
      message: "Product Saved successfully",
      product:{productName:result.productName , productImg: result.productImg , productPrice: result.productPrice , productDiscription: result.productDiscription}
    });
  } catch (error) {
    return res.status(500).json({ message: "Internal server error", error: error.message });
  }
});


router.get("/products", async (req, res) => {
  try {
    const products = await Product.find(); // Assuming Product is your Mongoose model
    return res.status(200).json(products);
  } catch (error) {
    return res.status(500).json({ message: "Internal server error", error: error.message });
  }
});

router.delete("/product/:productName", async (req, res) => {
  try {
    const { productName } = req.params;
    
    // Find and delete the product by name
    const result = await Product.findOneAndDelete({ productName });

    if (!result) {
      return res.status(404).json({ message: "Product not found" });
    }

    return res.status(200).json({ 
      message: "Product deleted successfully", 
      deletedProduct: result 
    });

  } catch (error) {
    return res.status(500).json({ message: "Internal server error", error: error.message });
  }
});



// Admin Routes

router.post("/admin", async (req, res) => {
  try {
    let { id,mobNo,deptName,email, password, name } = req.body;

    const record = await admin.findOne({ email });
    if (record) {
      return res.status(400).json({ message: "Email is already registered" });
    }

    // Create new user with plain text password (not secure for real apps)
    const admin1 = new admin({ id,name,mobNo, email,deptName, password });
    console.log(admin, "product saved in db");
    const result = await admin1.save();

    return res.status(201).json({
      message: "Admin registered successfully",
      admin: { name: result.name, email: result.email, mobNo: result.mobNo,deptName: result.deptName,id: result.id },
    });
  } catch (error) {
    return res.status(500).json({ message: "Internal server error", error: error.message });
  }
});

router.get("/admins", async (req, res) => {
  try {
    const admin1 = await admin.find(); // Assuming Product is your Mongoose model
    return res.status(200).json(admin1);
  } catch (error) {
    return res.status(500).json({ message: "Internal server error", error: error.message });
  }
});

router.post("/login-admin", async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.status(400).json({ message: "Missing email or password" });
    }

    const admin1 = await admin.findOne({ email });
    if (!admin1 || admin1.password !== password) {
      return res.status(401).json({ message: "Invalid credentials" });
    }

    return res.status(200).json({
      message: "Admin Login successful",
      login: { name: admin1.name, email: admin1.email },
    });
  } catch (error) {
    return res.status(500).json({ message: "Internal server error", error: error.message });
  }
});


router.get("/admins", async (req, res) => {
  try {
    const admin1 = await admin.find(); // Assuming Product is your Mongoose model
    return res.status(200).json(admin1);
  } catch (error) {
    return res.status(500).json({ message: "Internal server error", error: error.message });
  }
});


//Seller Section

router.post("/seller", async (req, res) => {
  try {
    let { id,mobNo,deptName,email, password, name,licenceNo ,address} = req.body;

    const record = await seller.findOne({ email });
    if (record) {
      return res.status(400).json({ message: "Email is already registered" });
    }

    // Create new user with plain text password (not secure for real apps)
    const seller1 = new seller({ id,name,mobNo, email,deptName, password ,licenceNo ,address});
    console.log(admin, "Seller saved in db");
    const result = await seller1.save();

    return res.status(201).json({
      message: "Seller registered successfully",
      admin: { name: result.name, email: result.email, mobNo: result.mobNo,deptName: result.deptName,id: result.id , licenceNo:result.licenceNo ,address:result.address},
    });
  } catch (error) {
    return res.status(500).json({ message: "Internal server error", error: error.message });
  }
});

router.get("/sellers", async (req, res) => {
  try {
    const seller1 = await seller.find(); // Assuming Seller is your Mongoose model
    return res.status(200).json(seller1);
  } catch (error) {
    return res.status(500).json({ message: "Internal server error", error: error.message });
  }
});

router.post("/login-seller", async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.status(400).json({ message: "Missing email or password" });
    }

    const seller1 = await seller.findOne({ email });
    if (!seller1 || seller1.password !== password) {
      return res.status(401).json({ message: "Invalid credentials" });
    }

    return res.status(200).json({
      message: "Sellar Login successful",
      login: { name: seller1.name, email: seller1.email },
    });
  } catch (error) {
    return res.status(500).json({ message: "Internal server error", error: error.message });
  }
});


module.exports = router;
