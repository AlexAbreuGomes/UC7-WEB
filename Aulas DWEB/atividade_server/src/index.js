const express = require('express');
const { listarCarro, listarCarros, filtrarCarros } = require('./controladores/carros');
const app = express()

app.get('/', listarCarros);
app.get('/carros/:id', listarCarro);
app.get('/carros-parametros', filtrarCarros)

//parametros de consulta 

app.listen(3000, () => {
console.log('servidor: http://localhost:3000');
})