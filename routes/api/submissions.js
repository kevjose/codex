const express = require('express');
const mongoose = require('mongoose');
const router = express.Router();

const Submission = require('../../models/Submission');

router.get('/:id', (req, res) => {
  const userId = mongoose.Types.ObjectId(req.params.id);
  Submission.find({ userId: userId })
    .sort({ _id: -1 })
    .exec(function(err, submissions) {
      if (err) res.json({ status: 'failure', error: err });
      else {
        res.json({ status: 'success', submissions: submissions });
      }
    });
});

module.exports = router;
