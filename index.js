const express = require('express')
const app = express()
const PORT = 8080

app.get('/',  (req, res) => {
  res.send(`Hello world!${process.env.MESSAGE || ''}`)
})

app.listen(process.env.PORT || PORT, () => {
  console.info(`Example app listening on port ${PORT}!`)
})

module.exports = app
