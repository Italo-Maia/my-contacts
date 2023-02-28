const { response } = require('express');
const express = require('express');
const routes = require('./routes');

const app = express();
// app.use((request, response) => {

// });
app.use(express.json());
app.use(routes);
app.use((error, requeste, response, next) => {
    response.sendStatus(500);
    console.log(error)
})

app.listen(3000);
