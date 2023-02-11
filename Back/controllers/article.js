const Article = require('../models/article');
const path = require('path');

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
        const image = `${req.file.filename}`;
        const newArticle = new Article({ title, content, image, intro, date });
        await newArticle.save();

        res.status(201).json({ message: 'Article enregistré !' });
    } catch (error) {
        res.status(400).json({ error });
    }
};

exports.createImage = async (req, res) => {
    try {
        const image = `${req.file.filename}`;
        res.status(201).json({ image });
    } catch (error) {
        res.status(400).json({ error });
    }
};

exports.getImage = async (req, res) => {
    try {
        const imageName = req.params.imageName;
        res.sendFile(path.join(__dirname, '..', 'images', imageName));
    } catch (error) {
        res.status(400).json({ error });
    }
};

