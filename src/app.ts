// Desafio1

// let employee = {
//     code: 20,
//     name: "John"
// };
// let employee2: {code: number, name: string} = {
//     code: 10,
//     name: "John"
//     }

// Desafio2 

// enum Trabalho {
//     Atriz,
//     Padeiro
// }

// type indivíduo = {
//     nome: string,
//     idade: number,
//     profissao: Trabalho
// }

// let pessoa1: indivíduo = {
//     nome: 'maria',
//     idade: 29,
//     profissao: Trabalho.Atriz
// };

// let pessoa2: indivíduo = {
//     nome: 'roberto',
//     idade: 19,
//     profissao: Trabalho.Padeiro
// };

// let pessoa3: indivíduo = {
//     nome: 'laura',
//     idade: 32,
//     profissao: Trabalho.Atriz
// };

// let pessoa4: indivíduo = {
//     nome: "carlos",
//     idade: 19,
//     profissao: Trabalho.Padeiro
// }

// Desafio3

export {} 
let botaoAtualizar = document.getElementById('atualizar-saldo');
let botaoLimpar = document.getElementById('limpar-saldo')!;
let soma = document.getElementById('soma')! as HTMLInputElement;
let campoSaldo = document.getElementById('campo-saldo');

let saldoTotal = 0

limparSaldo()

function somarAoSaldo(soma: number) {
    if (campoSaldo) {
        saldoTotal += soma
        campoSaldo.innerHTML = saldoTotal.toString();
        limparCampoSoma();
    }
}

function limparCampoSoma() {
    soma.value = "";
}

function limparSaldo() {
    if (campoSaldo) {
        saldoTotal = 0;
        campoSaldo.innerHTML = saldoTotal.toString();
    }
}

if (botaoAtualizar) {
    botaoAtualizar.addEventListener('click', () => {
        somarAoSaldo(Number(soma.value)); 
    });
}
botaoLimpar.addEventListener('click', () => { 
    limparSaldo();
});

/**
    <h4>Valor a ser adicionado: <input id="soma"> </h4>
    <button id="atualizar-saldo">Atualizar saldo</button>
    <button id="limpar-saldo">Limpar seu saldo</button>
    <h1>"Seu saldo é: " <span id="campo-saldo"></span></h1>
 */