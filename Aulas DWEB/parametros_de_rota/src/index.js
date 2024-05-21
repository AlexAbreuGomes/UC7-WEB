
const express = require('express')
const { listarUsuario, filtrarUsuarios, listarUsuarios} = require('./controladores/usuarios')
const app = express()

app.get('/' ,listarUsuarios )

app.get('/usuarios/:id', listarUsuario)

//parametros de consulta 

app.get('/usuarios-parametros', filtrarUsuarios)

app.listen(3000, () => {
console.log('servidor: http://localhost:3000');
})
