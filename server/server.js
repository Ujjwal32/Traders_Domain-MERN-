require('dotenv').config()

const express = require('express')
const router = require('./routes/admin.auth')
const articleRouter = require('./routes/article')
const single = require('./routes/single')
const cors = require('cors')
const app = express();
const bodyParser = require('body-parser')
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(cors())
app.use('/admin',router)
app.use('/article',articleRouter)
app.use('/single',single)


app.get('/',(req,res) => {
    res.send({name: "Ujjwal"})
})
const PORT = process.env.PORT || 8000


if(process.env.NODE_ENV == 'production'){
    app.use(express.static('client/build'))
    const path = require('path')
    // app.get('*',(res,res) => {
    //     res.sendFile(path.resolve(__dirname,'client','build','index.html'))
    // })
}

app.listen(PORT,(err) => {
    if(err) {
        console.log(err)
    }
    console.log('server started')
})