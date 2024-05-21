

const carros = require('../data_base')

function listarCarros (req, res) {
    res.send(carros)
  }

function listarCarro (req, res) {
    console.log(`a id é: ${req.params.id}`);
    const resultado = carros.find((carro) => {
        return carro.id === Number(req.params.id)

    })
    res.send(resultado) 
}

function filtrarCarros(req, res) {
    const { nome, marca, ano, cor } = req.query;  // Captura os parâmetros específicos da consulta
    let resultado = carros;

    if (!nome && !marca && !ano && !cor) {
        res.status(400).send('A consulta deve incluir pelo menos um parâmetro.');
        return;
    }

    resultado = carros.filter((carro) => {
        if (nome && carro.nome !== nome) {
            return false;
        }
        if (marca && carro.marca !== marca) {
            return false;
        }
        if (ano && carro.ano !== ano) {
            return false;
        }
        if (cor && carro.cor !== cor) {
            return false;
        }
        return true;
    });

    if (resultado.length > 0) {
        res.send(resultado);
    } else {
        res.status(404).send('Nenhum carro encontrado para os parâmetros fornecidos.');
    }
}

module.exports = {
    listarCarro,
    listarCarros,
    filtrarCarros
}