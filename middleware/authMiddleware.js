const jwt = require('jsonwebtoken');  // Import JWT

const authMiddleware = (req, res, next) => {
  const token = req.header('Authorization')?.replace('Bearer ', '');  // Ambil token dari header

  if (!token) {
    return res.status(401).json({ error: 'Authorization token is missing or invalid' });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);  // Verifikasi token
    req.user = decoded;  // Simpan data user yang sudah di-decode ke request
    next();  // Lanjutkan ke route handler
  } catch (err) {
    res.status(401).json({ error: 'Invalid or expired token' });
  }
};

module.exports = authMiddleware;
