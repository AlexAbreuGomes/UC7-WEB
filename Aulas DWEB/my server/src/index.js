// importa o express para o projeto
const express = require ('express');

// cria uma instancia do express
const app = express();
const names = [
    {nome: 'joao', idade: 38},
    {nome: 'maria', idade: 25},
    {nome: 'jose', idade: 30} 
];

// '/' é o endereço base do servidor
// req = requisiçao, res = resposta
// req - recebe a requisiçao
// res - envia uma resposta 
// send é uma propriedade que envia alguma coisa
app.get('/',(req, res ) => { 
    res.send(names)
})

app.listen(3000, () => {
    console.log('servidor: http://localhost:3000/');
});