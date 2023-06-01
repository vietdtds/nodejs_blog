const express = require('express')
const morgan = require('morgan')
// const handelbars = require('express-handlebars');
const app = express()
const port = 3000

app.use(morgan('combined'))

app.get('/', (req, res) => {
  return res.send('123')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})  
