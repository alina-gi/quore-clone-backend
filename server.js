const express = require('express')
const app = express()
app.use(express.json())
const connectToMongoDB = require('./db/conn');
connectToMongoDB();
const dotenv = require('dotenv');
dotenv.config({path: 'config.env'})

// ROUTES
app.use('/api/questions', require('./router/questions'))
app.use('/api/answers', require('./router/answers'))



app.listen(process.env.PORT, () => {
  console.log(`Server started pn PORT : ${process.env.PORT} in ${process.env.NODE_ENV} mode`)
})