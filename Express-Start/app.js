const express = require('express')
const app = express()
// const  {products,people}  = require('./data')
const logger = require('./logger')
const authorise = require('./authorise')

app.use([logger,authorise])
app.get('/',(req,res)=>{
  res.send('Home')
})

app.get('/about',(req,res)=>{
  res.send('About')
})
app.get('/api/products',(req,res)=>{
  res.send('Products')
})

app.get('/api/items',(req,res)=>{
  res.send('Items')
})

app.listen(80, () => {
  console.log('Server is listening on port 5000....')
})
