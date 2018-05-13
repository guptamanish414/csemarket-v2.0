const express = require('express')
const app = express()

//app.get('/', res.sendFile(_dirname + '/index.html'))
app.get('/', (req, res) => res.sendFile('./frontend/view/index.html', 
{root:__dirname}))

/* app.use('/static', express.static('public'))
var staticPath = path.join(frontend/view/index.html, '/public');
app.use(express.static(staticPath)); */

/* app.get('/',function(req,res){
    res.sendFile(_frontend/view/ + '/index.html');
}); */

app.listen(3000, () => console.log('Example app listening on port 3000!'))