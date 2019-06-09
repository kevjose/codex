const mongoose = require('mongoose');
const Schema = mongoose.Schema;
// Create Schema
const SubmissionSchema = new Schema({
  lang: {
    type: String,
    required: true
  },
  code: {
    type: String,
    required: true
  },
  userId: {
    type: String,
    required: false
  },
  analysis: {
    type: String,
    required: false
  },
  created_at: {
    type: Date,
    default: Date.now
  }
});
module.exports = Submission = mongoose.model('submissions', SubmissionSchema);
