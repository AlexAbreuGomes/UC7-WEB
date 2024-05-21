// //console.log('teste');

// const resultado = 8 < 10;

// function resultado_dois() {
//     return !resultado;
// }

// if (resultado_dois = resultado) {
//     console.log("a resposta é inversamente diferente");
// }
// else{
//     console.log(resultado)
// }


// //console.log(resultado_dois()); 


// Crie uma nova instância da função Date() para capturar a data e a hora atuais
const dataAtual = new Date();

// Use o método getFullYear() para capturar o ano atual
const anoAtual = dataAtual.getFullYear();
const ano_nasc = 2023
// Imprime o ano atual no console
let idade = anoAtual - ano_nasc

if (idade>=18) {
    console.log('maior');    
} else{
    console.log('menor');
}
