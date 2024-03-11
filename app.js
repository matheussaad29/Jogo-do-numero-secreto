

let listaDeNumerosSorteados=[];
let numeroLimite=10;
let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1;

function exibirTextoNatela(tag, texto){
    let campo = document.querySelector(tag);  
    campo.innerHTML = texto;
    responsiveVoice.speak(texto, 'Brazilian Portuguese Female', {rate:1.2})
}
function exibirMensagemInicial(){
    exibirTextoNatela('h1', 'Jogo do numero Secreto');
    exibirTextoNatela('p', 'Escolha um numero entre 1 e 10');
}
exibirMensagemInicial();

function verificarChute(){
    let chute=document.querySelector('input').value;
    if(chute==numeroSecreto){
        exibirTextoNatela('h1','ACERTOU');
        let palavraTentativa = tentativas>1? 'tentativas': 'tentativa'
        let mensagemTentativas = `Voce descobriu o numero secreto com ${tentativas} ${palavraTentativa}`;
        exibirTextoNatela('p',mensagemTentativas);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else if(chute>numeroSecreto){
        exibirTextoNatela('p','O numero secreto e menor');
    } else{
        exibirTextoNatela('p','O numero secreto e maior');
    }
    tentativas++;
    limparFuncao();
    }


function gerarNumeroAleatorio() {
    let numeroEscolhido=parseInt(Math.random()*numeroLimite +1);
    let quantidadeElementosLista = listaDeNumerosSorteados.length;
    if(quantidadeElementosLista == numeroLimite){
        listaDeNumerosSorteados=[];
    }
    if(listaDeNumerosSorteados.includes(numeroEscolhido)){
        return gerarNumeroAleatorio();
    } else{
        listaDeNumerosSorteados.push(numeroEscolhido);
        return numeroEscolhido;
    }

}
function limparFuncao(){
    chute= document.querySelector('input');
    chute.value = '';
}
function reiniciarJogo(){
    numeroSecreto=gerarNumeroAleatorio;
    limparFuncao();
    tentativas=1;
    exibirMensagemInicial();
    document.getElementById('reiniciar').setAttribute('disabled', true);
}
