const express = require('express');
const router = express.Router();
const RunnerManager = require('../../compiler/RunnerManager');

router.post('/run', (req, res) => {
  const file = req.body;
  console.log(
    `file.lang: ${file.lang}`,
    `file.code:${file.code}`,
    `file.userId:${file.userId}`
  );
  // res.json({
  //   success: true
  // });
  RunnerManager.run(file.lang, file.code, file.userId, res);
});

module.exports = router;
