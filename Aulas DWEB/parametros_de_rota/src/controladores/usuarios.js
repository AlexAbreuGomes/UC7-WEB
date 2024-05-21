const usuarios = require('../data_base')

function listarUsuarios (req, res) {
    res.send(usuarios)
  }

function listarUsuario(req, res) {
    //console.log(`a id é: ${req.params.id}`);
    const resultado = usuarios.find((usuario) => {
        return usuario.id === Number(req.params.id)

    })
    res.send(resultado)
}

function filtrarUsuarios(req,res) {
    console.log("entrei na rota");
    console.log(req.query);
    const { nome, prof } = req.query;
    let resultado = usuarios;

    if(nome && prof){
       resultado = usuarios.filter((usuario) => {
            return usuario.nome && usuario.prof === nome && prof
        })
    }

    res.send(resultado)
}

module.exports = {
    listarUsuario,
    filtrarUsuarios,
    listarUsuarios
}