// Auth middleware — verifies JWT from httpOnly cookie
// Attaches the decoded user payload to req.user

import jwt from 'jsonwebtoken';

const auth = (req, res, next) => {
  const token = req.cookies?.token;

  if (!token) {
    return res.status(401).json({ error: 'Not authenticated' });
  }

  try {
    const payload = jwt.verify(token, process.env.JWT_SECRET);
    req.user = payload; // { id, name, email }
    next();
  } catch {
    return res.status(401).json({ error: 'Session expired, please sign in again' });
  }
};

export default auth;
