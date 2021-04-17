const mongoose = require('mongoose');

const templateSchema = mongoose.Schema({
  // id: { type: String, required: true },
  name: { type: String, required: true },
  sections: {
    html: { type: String, required: true },
    css: { type: String, required: true }
  }
}, {
  versionKey: false
});

module.exports = mongoose.model('Template', templateSchema);

