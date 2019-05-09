const express = require('express')
const handler = require('./shared/handler')
const routerCart = require('./router/cart')
const fs = require('fs')

const app = express()
app.listen(3000, () => console.log('Listen on port 3000...'))

app.use(express.json())

app.use('/', express.static('../frontend/dist'))
app.use('/api/cart', routerCart)

app.get('/api/catalog', (req, res) => {
  handler.readFile('./db/catalog.json', req, res, (data) => {
    let patternStr = (req && req.query && req.query.filter) || ''
    if (!patternStr) { patternStr = '' }

    let amount = (req && req.query && req.query.amount) || 100000

    let genderStr = (req && req.query && req.query.gender) || ''

    let products = JSON.parse(data)
    const pattern = new RegExp(patternStr, 'i')
    const gender = new RegExp(genderStr, 'i')
    res.send(
      JSON.stringify(
        products
          .filter(p => pattern.test(p.product_name) && gender.test(p.gender))
          .slice(0, amount)
          .map(item => {
            if (item.image && item.image !== '') {
              item.image_base64 = fs.readFileSync(`./assets/${item.image}`, 'base64')
            }
            return item;
        })
      )
    )
  })
})
