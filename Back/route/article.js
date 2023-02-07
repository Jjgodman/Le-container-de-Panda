//importation des bibliotheque nécessaire
const express = require('express');
const router = express.Router();
const articleCtrl = require('../controllers/article');
const multer = require('../middleware/multer-config');

//importation des routes
router.post('/', multer, articleCtrl.createArticle);
router.get('/', articleCtrl.getAllArticles);
router.get('/:id', articleCtrl.getOneArticle);
//route à la quelle j'envoie une image, qui l'enregistre dans le dossier images et qui renvoie le nom de l'image
router.post('/image', multer, articleCtrl.createImage);

//exportation du router
module.exports = router;