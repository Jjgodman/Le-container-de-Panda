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

//fonction à la quelle j'envoie une image, qui l'enregistre dans le dossier images et qui renvoie le nom de l'image
exports.createImage = async (req, res) => {
    try {
        const image = `${req.file.filename}`;
        console.log(image);
        res.status(201).json({ image });
    } catch (error) {
        res.status(400).json({ error });
    }
}