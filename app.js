const express = require('express')
const app = express()

app.get('/', (req, res) => res.sendFile('./frontend/index.html', 
{root:__dirname}))

app.listen(3000, () => console.log('Example app listening on port 3000!'))