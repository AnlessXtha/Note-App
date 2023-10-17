const express = require('express');
const app = express();


//Route
app.get('/', (req, res)=> {
    res.send('Notes App')
})

const port = 3000

app.listen(port, console.log(`server is listening on port ${port}...`))