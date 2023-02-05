//importation des bibliotheque nécessaire
const express = require('express');
const router = express.Router();
const articleCtrl = require('../controllers/article');
const multer = require('../middleware/multer-config');

//importation des routes
router.post('/', multer, articleCtrl.createArticle);
router.get('/', articleCtrl.getAllArticles);
router.get('/:id', articleCtrl.getOneArticle);
router.put('/:id', multer, articleCtrl.modifyArticle);
router.delete('/:id', articleCtrl.deleteArticle);

//exportation du router
module.exports = router;