const express = require('express');
const routes = require('./routes');

const app = express();
// app.use((request, response) => {

// });
app.use(express.json());
app.use(routes);

app.listen(3000);
