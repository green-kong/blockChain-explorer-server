const db = require('../models/index.js');

const gethSocket = (web3, cb) => {
  cb();
  web3.eth.subscribe('newBlockHeaders', async (error, result) => {
    if (!error) {
      const { hash } = result;

      const newBlock = await web3.eth.getBlock(hash);
      const { logsBloom, ...rest } = newBlock;

      const blockResult = await db.blocks.create(rest);
      console.log('🚀 new Block added!');

      rest.transactions.forEach(async (v) => {
        const tx = await web3.eth.getTransaction(v);
        const newTx = {
          ...tx,
          timestamp: rest.timestamp,
          blockId: blockResult.id,
        };

        await db.txs.create(newTx);
        console.log('🎖 new Tx Confirmed!');
      });
    }
  });

  web3.eth.subscribe('newPendingTransactions', async (error, result) => {
    if (!error) {
      console.log(result);
      const pendingTx = await web3.eth.getPendingTransactions();
      console.log(pendingTx);
    }
  });
};

module.exports = gethSocket;
