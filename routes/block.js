const { Router } = require('express');
const { Sequelize } = require('../models/index.js');
const db = require('../models/index.js');

const router = Router();

router.post('/getBlock', async (req, res) => {
  const blockList = await db.blocks.findAll({
    order: [['id', 'DESC']],
    limit: 10,
  });
  res.json(blockList);
});

router.post('/getAllBlock', async (req, res) => {
  const allBlocks = await db.blocks.findAll({
    order: [['id', 'DESC']],
  });
  res.json(allBlocks);
});

router.post('/searchBlock', async (req, res) => {
  const { select, value } = req.body;
  const result = await db.blocks.findAll({
    where: { [select]: value },
  });
  res.json(result);
});

router.post('/getBlockInfo', async (req, res) => {
  const { hash } = req.body;
  const result = await db.blocks.findOne({
    where: { hash },
    include: [
      {
        model: db.txs,
        attributes: ['hash'],
      },
    ],
  });
  res.json(result);
});

module.exports = router;
