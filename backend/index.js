const connectToMongo = require('./db');
connectToMongo();

const express = require('express')
const app = express()
const port = 5000
var cors = require('cors')
app.use(cors())

// We have to use below middleware to use req.body and now we can deal with json
app.use(express.json())

//Available Routes
app.use('/api/auth', require('./routes/auth'))
app.use('/api/notes', require('./routes/notes'))

app.listen(port, () => {
  console.log(`iNotebook backend listening on port ${port}`)
})