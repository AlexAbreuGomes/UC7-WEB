// const numeros = [2, 3, 4, 6];
// let soma = 0;
//  for(let i = 0; i < numeros.length; i++) {
//     soma += numeros[i];
//  }
//  console.log(soma);


//  02 questao

// const numero = 500

// for(let i = 0; i<numero; i++){
//    if(i % 3 == 0){ 
//     console.log(i)
// }
// }

// const numeros = [3, 4, 7, 8, 1, 6, 5, 10];
//  let soma = 0;
//   for(let i = 0; i < numeros.length; i++) {
//      if(numeros[i] % 2 === 0){
//         soma += numeros[i]
       
//     }
    
// }
// console.log(soma)

const nomes = ['alex', 'rodrigo', 'pedro', 'jaciel']
for (const nome of nomes) {
    console.log(nome); 
}

let nomes = ['alex', 'rodrigo', 'pedro', 'jaciel'];

    nomes.push('rafael'); //Insere um novo elemento no fim do array
        console.log(nomes);

    nomes.shift(); // remove o primeiro elemento do array
        console.log(nomes);

    nomes.pop(); // remove o ultimo elemento do array
        console.log(nomes);

    nomes.unshift('rafael','alex'); // adciona elementos no inicio do array
        console.log(nomes);


    const resultado = nomes.find((nome) => {
        return nome === 'rafael'
    })
    console.log(resultado)
        




