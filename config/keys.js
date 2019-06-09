const dotenv = require('dotenv');
dotenv.config();
module.exports = {
  mongoURI: process.env.MONGO_URI || 'mongodb://localhost:27017/codex',
  secretOrKey: process.env.SECRET || 'secret'
};
