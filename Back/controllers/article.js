//importation des bibliotheque nécessaire
const Article = require('../models/article');

//route pour récupérer tout les articles
exports.getAllArticles = (req, res, next) => {
    Article.find().then(
        (Article) =>{
            res.status(200).json(Article)
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
    //récupération du FormData
    const article = req.body;
    //création d'un nouvel article
    const art = new Article({
        title: article.title,
        content: article.content,
        image: `../../Back/images/${req.file.filename}`
    });
    //sauvegarde de l'article dans la base de donnée
    art.save().then(
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
    console.log('test');
    const article = JSON.parse(req.body.article);
    const art = new Article({
        ...art,
        imageUrl: `${req.protocol}://${req.get('host')}/image/${req.file.filename}`
    });
    Article.updateOne({_id: req.params.id}, art).then(
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

