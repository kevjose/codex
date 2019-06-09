const express = require('express');
const router = express.Router();
const RunnerManager = require('../../compiler/RunnerManager');

router.post('/run', (req, res) => {
  const file = req.body;
  console.log(`file.lang: ${file.lang}`, `file.code:${file.code}`);
  // res.json({
  //   success: true
  // });
  RunnerManager.run(file.lang, file.code, res);
});

module.exports = router;
