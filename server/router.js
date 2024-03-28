const express = require('express');
const router = express.Router();
const controller = require('./controller');

router.post('/register', async function(req, res){
    const newClient = req.body
    console.log(newClient);

    newClient.password = await controller.hashPassword(newClient.password);

    const client = controller.createClient(newClient)

    res.status(200);
    res.send(client);
})

module.exports = router