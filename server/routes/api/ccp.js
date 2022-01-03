/*
const express = require('express');
const router = express.Router();

const Article = require('../../models/Articles');


router.get('/', (req, res) => {
    Article.find({category: ccp})
    .sort({date: 1})
    .then(articles => res.json(articles.title))
})




router.get('/', (req, res) => {
    Article.find()
    .sort({date: -1})
    .then(articles => res.json(articles))
});



module.exports =  router;

*/




const express = require('express');
const router = express.Router();

const Article = require('../../models/Articles');

//already in /api/articles
router.get('/', (req, res) => {
    console.log("got here instead")
    Article.find({category: 'ccp'}, {category:0,references:0, text:0, author:0})//exclude cat/ref/text/auth so just title
    .sort({date: 1})
    .then(articles => res.json(articles).title)
});

router.get('/:title', (req, res) => {
    console.log("back end search for: ", req.params.title)
    Article.find({title: req.params.title})//send that full aticle 
    .sort({date: 1})
    .then(articles => res.json(articles))
})



router.post('/', (req, res) => {
    const newArticle = new Article({
        category: req.body.category,
        title: req.body.title,
        references: req.body.references,
        text: req.body.text,
        author: req.body.author
    })
    newArticle.save().then(article =>res.json(article))
});

router.delete('/:id',(req, res) =>{
    Article.findById(req.params.id)
    .then(article => article.remove().then(() => res.json({success:true})))
    .catch(err => res.status(404).json({sucess:false}))
})

module.exports =  router;