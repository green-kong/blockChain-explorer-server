const { Router } = require('express');

const router = Router();

const blockRouter = require('./block.js');

const txRouter = require('./tx.js');

router.use('/block', blockRouter);

router.use('/tx', txRouter);

module.exports = router;
