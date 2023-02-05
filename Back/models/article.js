//importation des bibliotheque nécessaire
const mongoose = require('../../node_modules/mongoose');

//création du schéma de données
const articleSchema = mongoose.Schema({
    title: { type: String, required: true },
    content: { type: String, required: true },
    imageUrl: { type: String, required: true }
});

//exportation du schéma de données
module.exports = mongoose.model('Article', articleSchema);