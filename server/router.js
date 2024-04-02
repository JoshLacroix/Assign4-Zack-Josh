const express = require('express');
const router = express.Router();
const controller = require('./controller');
const Client = require('./clientschema');

router.post('/register', async function(req, res){
    const { email, password, confirm_password, favorite_movie_genre, terms_and_condition } = req.body;

    try {

        const hashedPassword = await controller.hashPassword(password);

        const newClient = new Client({
            email,
            password: hashedPassword,
            confirm_password: hashedPassword,
            favorite_movie_genre,
            terms_and_condition
        });

        await newClient.save();

        res.status(200).json({ message: 'Registration successful' });
    } catch (error) {
        if (error.name === 'ValidationError') {
            return res.status(400).json({ error: error.message });
        }
        console.error('Error:', error);
        res.status(500).json({ error: 'Registration failed' });
    }
});

router.post('/login', async function(req, res) {
    const { email, password } = req.body;

    try {
        const client = await controller.findClientByEmail(email);

        if (!client) {
            return res.status(401).json({ error: 'Invalid Email or Password' });
        }

        const passwordMatch = await controller.comparePassword(password, client.password);

        if (!passwordMatch) {
            return res.status(401).json({ error: 'Invalid Email or Password' });
        }

        const token = await controller.createToken({
            email: client.email,
            favorite_movie_genre: client.favorite_movie_genre
        });

        res.status(200).json({ token });
    } catch (error) {
        console.error('Error:', error);
        res.status(500).json({ error: 'Login failed' });
    }
});


router.get('/movies', async function(req, res) {
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