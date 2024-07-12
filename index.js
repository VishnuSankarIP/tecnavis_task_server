require('dotenv').config
const express=require('express')
const cors=require('cors')
const router = require('./Router/route');
require('./DB/connection')

const portalServer=express()

portalServer.use(cors())
portalServer.use(express.json());


const PORT = process.env.PORT || 3000;

// Routes
portalServer.use(router);

// Start the server
portalServer.listen(PORT, () => {
    console.log(`Project server started at port ${PORT}`);
});

// Default route
portalServer.get("/", (req, res) => {
    res.status(200).send(`<h1>Project server started and waiting for client request</h1>`);
});
