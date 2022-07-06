const { Router } = require('express');
const { Op } = require('sequelize');
const db = require('../models/index.js');

const router = Router();

router.post('/getTx', async (req, res) => {
  const txList = await db.txs.findAll({
    order: [['id', 'DESC']],
    limit: 10,
  });
  res.json(txList);
});

router.post('/getAllTx', async (req, res) => {
  const txList = await db.txs.findAll({
    order: [['id', 'DESC']],
  });

  res.json(txList);
});

router.post('/searchTx', async (req, res) => {
  const { select, value } = req.body;
  let txList;
  if (select !== 'account') {
    txList = await db.txs.findAll({
      where: { [select]: value },
    });
  } else {
    txList = await db.txs.findAll({
      where: { [Op.or]: [{ from: value }, { to: value }] },
    });
  }
  res.json(txList);
});

router.post('/getTxInfo', async (req, res) => {
  const { hash } = req.body;
  console.log(hash);
  const result = await db.txs.findOne({
    where: { hash },
  });

  res.json(result);
});

module.exports = router;
