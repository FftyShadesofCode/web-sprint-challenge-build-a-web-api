const express = require('express');
const server = express();


const projectRouter = require('./projects/projects-router')
const actionRouter = require('./actions/actions-router')

server.use(express.json());
server.use('/api/projects', projectRouter)
server.use('/api/actions', actionRouter)

server.get('/', (req, res) => {
    res.send(`<h2>We've been trying to reach you about your cars extended warranty!</h2>`);
});

module.exports = server;