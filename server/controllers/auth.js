const User = require('../models/user');

const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const env = require('../config/env');

exports.login = async (req, res, next) => {
    try {
      const { type, username, email, password } = req.body;
  
      const user = null;
      
      user = await User.findOne({
        $or: [{ username }, { email }],
      });
  
      if (!user) {
        return res.status(404).json({
          message: 'User not found',
        });
      }
  
      const isMatch = await bcrypt.compare(password, user.password);
  
      if (!isMatch) {
        return res.status(400).json({
          message: 'Wrong password',
        });
      }
  
      const payload = {
        id: user.id,
        type,
      };
  
      const token = jwt.sign(payload, env.JWT_SECRET, {
        expiresIn: '5d',
      });
  
      return res.status(200).json({
        message: 'Login successful',
        token,
      });
    } catch (err) {
      next(err);
    }
  };