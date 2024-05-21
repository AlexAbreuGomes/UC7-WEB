/*# Exercício _move_pedra
//## Pedra, papel ou tesoura
Duas pessoas estão jogando pedra, papel ou tesoura. Você deve imprimir o nome da jogada vencedora, ou "empate", em caso de empate.
javascript=
const jogada1 = "pedra"
const jogada2 = "tesoura"
//seu código aqui
Neste caso seu código deveria imprimir `pedra`.
Lembre-se de testar seu código para outras variações de entrada.*/

const move_pedra = "pedra" 
const move_papel = "papel"
const move_tesoura = "tesoura"

function gerar_escolha_aleatoria(){
    const escolha = Math.floor (Math.random() * 3) + 1
    return escolha; 
}

const jogadas = {
    1: move_pedra,
    2: move_papel,
    3: move_tesoura
  };

const jogador1 = gerar_escolha_aleatoria();
const jogador2 = gerar_escolha_aleatoria();

// Alteração: Mapeamento das escolhas numéricas para strings correspondentes
// Assim, as escolhas numéricas (1, 2, 3) dos jogadores são mapeadas para strings (pedra, papel, tesoura)
const escolha_jogador1 = jogadas[jogador1];
const escolha_jogador2 = jogadas[jogador2];

// Verifica as condições de empate ou vitória
if (escolha_jogador1 === escolha_jogador2) {
    console.log('empate');
} else if (
    // Alteração: Usando o operador lógico `&&` em vez do operador bit a bit `&`
    (escolha_jogador1 === move_papel && escolha_jogador2 === move_pedra) ||
    (escolha_jogador1 === move_pedra && escolha_jogador2 === move_tesoura) ||
    (escolha_jogador1 === move_tesoura && escolha_jogador2 === move_papel)
) {
    console.log(`jogador 1 venceu com: ${jogadas[jogador1]}`);
} else {
  console.log(`jogador 2 venceu com: ${jogadas[jogador2]}`);
}
