const router = require('express').Router()
let Article = require('../models/Article')


router.route('/').get((req, res) =>{
    Article.find()
    .then(articles => res.json(articles))
    .catch(err => res.status(400).json('error: ' + err))
})


/*
router.route('/add').post((req, res) =>{
    const userName = req.body.userName;

    const newUser = new User({userName})

    newUser.save()
    .then(() => res.json('User added!'))
    .catch(err => res.status(400).json('error' + err))
})
*/



module.exports = router