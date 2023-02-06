const Article = require('../models/article');

exports.getAllArticles = async (req, res) => {
    try {
      const articles = await Article.find();
      res.status(200).json(articles);
    } catch (error) {
      res.status(400).json({ error });
    }
};

exports.getOneArticle = async (req, res) => {
    try {
        const article = await Article.findOne({ _id: req.params.id });
        res.status(200).json(article);
    } catch (error) {
        res.status(404).json({ error });
    }
};

exports.createArticle = async (req, res) => {
    try {
        const { title, content, intro, date} = req.body;
        const image = `../../Back/images/${req.file.filename}`;
        const newArticle = new Article({ title, content, image, intro, date });
        await newArticle.save();

        res.status(201).json({ message: 'Article enregistré !' });
    } catch (error) {
        res.status(400).json({ error });
    }
};

exports.modifyArticle = async (req, res) => {
    try {
        const parsedArticle = JSON.parse(req.body.article);
        const { title, content, intro, date } = {...parsedArticle};
        const imageUrl = `${req.protocol}://${req.get('host')}/image/${req.file.filename}`;
        const updatedArticle = { title, content, imageUrl, intro, date};

        await Article.updateOne({_id: req.params.id}, updatedArticle);

        res.status(201).json({message: 'Article modifié !'});
    } catch (error) {
        res.status(400).json({ error });
    }
};

exports.deleteArticle = async (req, res) => {
    try {
        await Article.deleteOne({_id: req.params.id});
        res.status(200).json({ message: 'Article supprimé !' });
    } catch (error) {
        res.status(400).json({ error });
    }
};
