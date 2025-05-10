require('dotenv').config();

module.exports = {
  secret: process.env.SECRET || "default-secret-key"
};