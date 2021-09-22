const { request } = require('express')
const express = require('express')
const app = express()
const port = 5000
const bodyParser = require('body-parser')

const { User } = require("./models/User")

const config = require("./config/key")

// bodyParser : client에서 가져온 정보를 server로 보냄
// application/x-ww-form-urlencoded
app.use(bodyParser.urlencoded({extended: true}))
// application/json
app.use(bodyParser.json())

const mongoose = require('mongoose')

mongoose.connect(config.mongoURI, {
  //useNeUrlParse: true, useUnifiedTopology: true, useCreateIndex: true, useFindAndModify: false
}).then(() => console.log('MongoDB Connected ...'))
  .catch(err => console.log(err))


app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.post('/register', (req, res) => {
  // 회원가입 할때 필요한 정보들을 client에서 가져와서 db에 저장
  const user = new User(req.body)

  user.save((err, userInfo) => {
    if(err) 
      return res.json({success: false, err})

    return res.status(200).json({
      success: true
    })

  })

})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})