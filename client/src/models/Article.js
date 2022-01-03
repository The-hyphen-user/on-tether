const mongoose = require('mongoose')


const Schema = mongoose.Schema

const articleSchema = new Schema({
    category:{
        type: String,
        required: true,
        unique: false,
        trim: true,
    },
    title:{
        type: String,
        required: true,
        unique: false,
        trim: true,
    },
    references:{
        type: Array,
        required: true,
        unique: false,
        trim: true,
    },
    text:{
        type: String,
        required: true,
        unique: false,
        trim: true,
    },
    author:{
        type: String,
        required: true,
        unique: false,
        trim: true,
    },
    date:{
        type:Date,
        default: Date.now
    }
})

const Article = mongoose.model('Article', articleSchema);

module.exports = Article;