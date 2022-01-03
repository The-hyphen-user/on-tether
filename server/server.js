const express = require('express')
const dotenv = require('dotenv')
const cors = require('cors')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')

const articles = require('./routes/api/articles')
const ccp = require('./routes/api/ccp')





const app = express();
app.use(cors())
app.use(bodyParser.json())
app.use(express.json())
app.use('/api/articles', articles)
app.use('/api/ccp', ccp)
dotenv.config()
const PORT = process.env.Port || 5000;




app.get('/', (req, res) => {
    res.send('hello world');
})
/*
app.get('/ccp', (req, res) => {
    res.send("you got mail...ccp");
})
*/



mongoose.connect(
    process.env.DB_CONNECT,
    {useNewUrlParser: true, useUnifiedTopology: true },
    () => console.log('mogooseDB connected')
)




app.listen(PORT, ()=> console.log(`server running on ${PORT}`))