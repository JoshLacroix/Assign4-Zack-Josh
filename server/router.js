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

router.post('/login', async function(req, res) {
    const { email, password } = req.body;

    const client = await controller.findClientByEmail(email);

    const goodPassword = await controller.comparePassword(password, client.password);

    if (goodPassword){
        const token = await controller.createToken({email: client.email, password: client.password, 
            favorite_movie_genre: client.favorite_movie_genre});
        res.status(200)
        res.send(token);
    }
    else {
        res.status(401).send({ error: 'Invalid Email or Password' });
    }
})

router.get('/movies', async function(req, res) {
    //token in authorization header
    const token = req.headers.authorization

    if (!token) {
        return res.status(401).send({ error: 'Missing token' });
    }

    const verify = await controller.verify_token(token)

    const genre = verify.favorite_movie_genre
    
    const movies = await controller.findMoviesByGenre(genre)
    console.log(' movies: ',  movies);
   


    res.send('yes')
})

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

module.exports = router