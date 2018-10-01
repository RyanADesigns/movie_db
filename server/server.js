const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const ctrl = require('./controller.js')
const path = require('path'); // Usually moved to the start of file

const app = express();

app.use(bodyParser.json())

app.use(cors());

app.use( express.static( `${__dirname}/../build` ) );

app.get('*', (req, res)=>{
    res.sendFile(path.join(__dirname, '../build/index.html'));
});

const port = 3005;


// app.get('/api/test', ctrl.test); 

app.post('/api/movies', ctrl.create)
app.get('/api/movies', ctrl.read)
app.get('/api/movies/search', ctrl.readFavoriteQuery)

app.listen(port, () => console.log('weare listening ' + port));
