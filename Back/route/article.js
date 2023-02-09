//importation des bibliotheque nécessaire
const express = require('express');
const router = express.Router();
const articleCtrl = require('../controllers/article');
const multer = require('../middleware/multer-config');

//importation des routes
router.post('/', multer, articleCtrl.createArticle);
router.get('/', articleCtrl.getAllArticles);
router.get('/:id', articleCtrl.getOneArticle);
router.post('/image', multer, articleCtrl.createImage);

//exportation du router
module.exports = router;