const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('Hola mundo');
});

app.listen(6500,() => {
    console.log('Servidor activo');
});
