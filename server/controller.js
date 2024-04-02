const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const Client = require('./clientschema');
const Movie = require('./movieschema')

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
        return null
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
    const { password, ...rest } = clientInfo;
    const hashedPassword = await hashPassword(password);

    const newClient = new Client({
        ...rest,
        password: hashedPassword
    });

    await newClient.save();
}


async function findMoviesByGenre(genre){
    const movie = await Movie.find({genre:genre})

    return movie
}

async function findClientByEmail(email){
    const client = await Client.findOne({ email: email})

    return client;
}

async function login(email, password) {
    try {
        const client = await Client.findOne({ email });
  
        if (!client) {
            throw new Error('Invalid Email or Password');
        }
  
        const passwordMatch = await comparePassword(password, client.password);
  
        if (!passwordMatch) {
            throw new Error('Invalid Email or Password');
        }
  
        const token = createToken({ email: client.email });
        return token;
    } catch (error) {
        throw new Error('Login failed');
    }
}


module.exports = {
    createToken,  decode_token, verify_token, hashPassword, comparePassword, createClient, findClientByEmail,findMoviesByGenre, login
}