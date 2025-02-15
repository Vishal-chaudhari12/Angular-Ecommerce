const jwt = require('jsonwebtoken');

const verifyToken = require('./verifyToken');

// Example of protected route
router.get('/protected-route', verifyToken, (req, res) => {
    res.json({ message: 'This is a protected route!', userData: req.userData });
  });

function verifyToken(req, res, next) {
  const token = req.headers.authorization?.split(' ')[1];

  if (!token) {
    return res.status(401).json({ message: "Access denied. Token not provided." });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.userData = decoded;
    next();
  } catch (error) {
    return res.status(401).json({ message: "Invalid token" });
  }
}

module.exports = verifyToken;
