const express = require('express')
const app = express()
const port = 3000


app.get('/', (req, res) => {
  res.send('Hello World!!!!!!!')
})
app.get('/About', (req, res) => {
  res.send('Hello World!')
})
app.get('/Fee', (req, res) => {
  res.send('Hello World!')
})

app.get('/Terms&conditions', (req, res) => {
  res.send('Hello World!1234')
})
app.get('/Website/:slug /:first', (req, res) => {
  res.send(`Hlo ${req.params.slug} AND ${req.params.first}`)
})
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})


