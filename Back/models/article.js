const mongoose = require('mongoose');

const articleSchema = mongoose.Schema({
    title: { type: String, required: true },
    content: { type: String, required: true },
    image: { type: String, required: true},
    intro: { type: String, required: true},
    date: { type: Date, required: true},
});

module.exports = mongoose.model('Article', articleSchema);
