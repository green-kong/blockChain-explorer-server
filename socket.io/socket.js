const genNewTx = async (newBlock, web3) => {
  const tx = [];

  for (hash of newBlock.transactions) {
    const result = await web3.eth.getTransaction(hash);
    tx.push(result);
  }

  return tx;
};

const sio = async (io, web3, cb) => {
  cb();
  io.on('connection', (socket) => {
    console.log('User connected');

    web3.eth.subscribe('newBlockHeaders', async (error, result) => {
      if (!error) {
        const { hash } = result;

        const newBlock = await web3.eth.getBlock(hash);

        const tx = await genNewTx(newBlock, web3);

        socket.emit('new Tx', { tx });

        socket.emit('new Block', { newBlock });
      }
    });

    socket.on('disconnect', () => {
      console.log('User disconnect');
    });
  });
};

module.exports = sio;
