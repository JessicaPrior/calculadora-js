var n1 = '';
var n2 = '';
var res = '';
var operacao = '';
var txtInput = document.getElementById('resultado');
txtInput.value = '0';

function definirOperacao(valor) {
    calcular();
    operacao = valor;
}

function adicionarNumero(numero) {        
    if (operacao === '') {
        n1 = obterNumero(numero, n1);
    } else {
        n2 = obterNumero(numero, n2);
    }
}

function obterNumero(novoNumero, numeroAtual) {
    if (numeroAtual.length == 10 || (novoNumero === '.' && numeroAtual.indexOf('.') >= 0)) {
        return;
    }
    if (novoNumero === '.' && (txtInput.value === '0' || numeroAtual === '')) {
        numeroAtual = '0';
    }
    txtInput.value = numeroAtual + novoNumero;
    return txtInput.value;
}

function limpar() {
    n1 = '';
    n2 = '';
    operacao = '';
    txtInput.value = '0';
}

function calcular() {
    if (n1 === '' || n2 === '' || operacao === '') {
        return;
    }
    var res = '';
    n1 = parseFloat(n1);
    n2 = parseFloat(n2);
    switch (operacao) {
        case '+':
            res = Calculadora.somar(n1, n2);
            break;
        case '-':
            res = Calculadora.subtrair(n1, n2);
            break;
        case '/':
            res = Calculadora.dividir(n1, n2);
            break;
        case '*':
            res = Calculadora.multiplicar(n1, n2);
            break;
    }
    res = res.toString();
    txtInput.value = res.length <= 10 ? res : res.substr(0, 10);
    n1 = txtInput.value;
    n2 = '';
    operacao = '';
}