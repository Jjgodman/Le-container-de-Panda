//importation des bibliotheque nécessaire
const model = require('../models/article');

//route pour récupérer tout les articles
exports.getAllArticles = (req, res, next) => {
    Sauce.find().then(
        (sauce) =>{
            res.status(200).json(sauce)
        }
    )
    .catch(error => res.status(400).json({ error }));
};

//route pour récupérer un article
exports.getOneArticle = (req, res, next) => {
    Article.findOne({
        _id: req.params.id
    }).then(
        (article) => {
            res.status(200).json(article)
        }
    )
    .catch(error => res.status(404).json({ error }));
};

//route pour créer un article
exports.createArticle = (req, res, next) => {
    const article = new Article({
        title: req.body.title,
        content: req.body.content,
        imageUrl: `${req.protocol}://${req.get('host')}/image/${req.file.filename}`
    });
    article.save().then(
        () => {
            res.status(201).json({
                message: 'Article enregistré !'
            });
        }
    )
    .catch(error => res.status(400).json({ error }));
}

//route pour modifier un article
exports.modifyArticle = (req, res, next) => {
    const article = new Article({
        _id: req.params.id,
        title: req.body.title,
        content: req.body.content,
        imageUrl: `${req.protocol}://${req.get('host')}/image/${req.file.filename}`
    });
    Article.updateOne({_id: req.params.id}, article).then(
        () => {
            res.status(201).json({
                message: 'Article modifié !'
            });
        }
    )
    .catch(error => res.status(400).json({ error }));
}

//route pour supprimer un article
exports.deleteArticle = (req, res, next) => {
    Article.deleteOne({_id: req.params.id}).then(
        () => {
            res.status(200).json({
                message: 'Article supprimé !'
            });
        }
    )
    .catch(error => res.status(400).json({ error }));
}

