require('dotenv').config();
const express = require('express');
const app = express();
const connectDB = require('./db/connect')
const cors = require('cors');
const note = require('./routes/Notes')

app.use(cors());

// Convert body to json
app.use(express.json())

// app.get('/', (req, res)=> {
//     res.send('Notes App')
// })

app.use('/api',note)

const port = process.env.PORT || 3000

const start = async () => {
    try {
        await connectDB(process.env.MONGO_URI)
        app.listen(port, console.log(`server is listening on port ${port}...`))
    } catch (error) {
        console.log(error)
    }
}

start()