/*
 * @Desc:
 * @Author: ykst
 * @Date: 2019-07-07 20:29:12
 * @LastEditors: ykst
 * @LastEditTime: 2019-07-07 20:42:06
 */
const express = require('express')
const bodyParse = require('body-parser')
const cookieParse = require('cookie-parser')

const app = express()

app.use(bodyParse.json())
app.use(bodyParse.urlencoded({ extended: true }))
app.use(cookieParse())

const router = express.Router()

const cors = {
  'Access-Control-Allow-Origin': 'http://localhost:8080',
  'Access-Control-ALlow-Credentials': true,
  'Access-Control-Allow-Methods': 'POST, GET, PUT, DELETE, OPTIONS',
  'Access-Control-Allow-Headers': 'Content-Type',
}

router.post('/more/server2', function(req, res) {
  res.set(cors)
  res.json(req.cookies)
})

router.options('/more/server2', function(req, res) {
  res.set(cors)
  res.end()
})

app.use(router)

const port = 8088

module.exports - app.listen(port)
