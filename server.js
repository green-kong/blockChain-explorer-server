const express = require('express');
const Web3 = require('web3');
const gethSocket = require('./gethSocket/socket.js');
const { sequelize } = require('./models/index.js');
const db = require('./models/index.js');
const cors = require('cors');
const route = require('./routes/index.js');
const http = require('http');
const socketIO = require('socket.io');
const sio = require('./socket.io/socket.js');

const web3 = new Web3(
  new Web3.providers.WebsocketProvider('ws://127.0.0.1:9005')
);

const app = express();

const server = http.createServer(app);
const io = socketIO(server, {
  cors: {
    origin: '*',
    credentials: true,
  },
});

app.use(
  cors({
    origin: true,
    credentials: true,
  })
);
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use('/api', route);

server.listen(4000, async () => {
  console.log('🚀 4000 port : Express server started!');

  gethSocket(web3, () => {
    console.log('👏 geth webSocket connected!');
  });

  await sio(io, web3, () => {
    console.log('🎨 socketIO Started!');
  });

  await sequelize.sync({ alter: true });
  console.log('🎉 DB Connected!');
});
