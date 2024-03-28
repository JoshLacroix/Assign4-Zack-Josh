const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const Client = require('./clientschema');

async function createToken(payload){
    const token = await jwt.sign(payload, process.env.JWT_SECRET);

    return token;
}

async function decode_token(token){
    return await jwt.decode(token)
}

async function verify_token(token){
    try{
        const decoded = await jwt.verify(token, process.env.JWT_SECRET);
        return decoded
    }
    catch(err) {
        console.log('Bad token');
        console.log(err);
    } 
}

async function hashPassword(password){
    const salt = await bcrypt.genSalt(10);

    const hash = await bcrypt.hash(password, salt);

    return hash 
}

async function comparePassword(password, hashPassword){
    const verified = await bcrypt.compare(password, hashPassword)

    return verified
}

async function createClient(clientInfo){
    const newClient = new Client(clientInfo)

    await newClient.save()
}

async function findClientByEmail(email){
    const client = await Client.findOne({ email: email})

    return client;
}

module.exports = {
    createToken,  decode_token, verify_token, hashPassword, comparePassword, createClient, findClientByEmail
}