//importation des bibliotheque nécessaire
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const path = require('path');
const helmet = require("helmet");
const mongoSanitize = require("express-mongo-sanitize");
const rateLimit = require("express-rate-limit");
const dotenv = require("dotenv");

//configuration de dotenv
dotenv.config();
const limiter = rateLimit({
    windowMs: 15 * 60 * 1000,
    max: 100
});

//importation des routes
const routesArticle = require('./route/article.js');

//création de l'application
const app = express();

//connexion à mongoose
mongoose.connect(process.env.DB, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('Connexion à MongoDB réussie !'))
    .catch(error => console.log('Connexion à MongoDB échouée ! Erreur : ', error));

//autorisation de connexion pour tout le monde
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
});

//utilisation des bibliotheque
app.use(bodyParser.json());
app.use(helmet());
app.use(mongoSanitize({replaceWith: '_'}));
app.use(limiter);

//connexion aux routes
app.use('/api/article', routesArticle);
//gestion des image 
app.use('/images', express.static(path.join(__dirname, 'images')));

module.exports = app;