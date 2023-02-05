//importation des bibliotheque nécessaire
const express = require('../node_modules/express');
const bodyParser = require('../node_modules/body-parser');
const mongoose = require('../node_modules/mongoose');
const path = require('../node_modules/path');
const helmet = require("../node_modules/helmet");
const mongoSanitize  =  require ( '../node_modules/express-mongo-sanitize' ) ;
const rateLimit = require("../node_modules/express-rate-limit");
const dotenv  = require('../node_modules/dotenv');

//configuration de dotenv
dotenv.config();

//configuration du limiter de requete
const limiter = rateLimit({
    windowMs: 15 * 60 * 1000, // 15 minutes
    max: 100 // limit each IP to 100 requests per windowMs
});

//importation des routes
const routesArticle = require('./route/article.js');

//configuration de mongoose
mongoose.set('strictQuery', false);

//création de l'application
const app = express();

//connexion à mongoose
mongoose.connect(process.env.DB, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('Connexion à MongoDB réussie !'))
    .catch(error => console.log('Connexion à MongoDB échouée ! Erreur : ', error));

//autorisation de connexion pour tout le monde
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
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

module.exports = app;