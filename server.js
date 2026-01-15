const express = require('express');
const { ExpressPeerServer } = require('peer');
const http = require('http');

const app = express();
const server = http.createServer(app);

const peerServer = ExpressPeerServer(server, {
  debug: true,
  path: '/peerjs'
});

app.use('/peerjs', peerServer);

app.get('/', (req, res) => res.send('Peer server running'));

const port = process.env.PORT || 9000;
server.listen(port, () => console.log(`Peer server listening on ${port}`));