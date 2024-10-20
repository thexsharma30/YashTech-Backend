// Simple token-based authentication
module.exports.adminAuth = (req, res, next) => {
    const token = req.headers['authorization'];
    if (token === 'admin-token') { // Replace with proper authentication method
      next();
    } else {
      res.status(401).json({ message: 'Unauthorized' });
    }
  };
  