const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const ctrl = require('./controller.js')

const app = express();

app.use(bodyParser.json())

app.use(cors());

const port = 3005;


// app.get('/api/test', ctrl.test); 

app.post('/api/movies', ctrl.create)
app.get('/api/movies', ctrl.read)

app.listen(port, () => console.log('weare listening ' + port));
