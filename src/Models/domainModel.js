const mongoose = require('mongoose');

const domainSchema = new mongoose.Schema({
  date: {
     type: Date,
      default: Date.now
     },
  domainName: {
     type: String, 
     required: true,
      unique: true 
    },
  name: {
     type: String,
      default: '' 
    },
  email: { 
    type: String, 
    default: '' 
    },
  phone: { 
    type: String,
     default: '' 
    },
});

const Domain = mongoose.model('Domain', domainSchema);

module.exports = Domain;
