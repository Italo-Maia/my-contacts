const { response } = require('express');
const express = require('express');

const cors = require('../middleware/cors')
const errorHandler = require('../middleware/errorHandler')
const routes = require('./routes');

const app = express();

app.use(express.json());
app.use(cors);
app.use(routes);
app.use(errorHandler)

app.listen(3001);
