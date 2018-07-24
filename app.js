var express = require('express');
var app = express();
app.use(express.static('frontend/public'));

app.get('/', (req, res) => res.sendFile('./frontend/index.html', {root:__dirname}));

app.listen(3000, () => console.log('Example app listening on port 3000!'));