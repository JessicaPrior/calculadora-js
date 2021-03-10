var Calculadora = {
    ADICAO: '+',
    SUBTRACAO: '-',
    DIVISAO: '/',
    MULTIPLICACAO: '*',

    somar: function (n1, n2) {
        
        return Calculadora.calcular(n1, n2,
            Calculadora.ADICAO)
    },
    subtrair: function (n1, n2) {

        return Calculadora.calcular(n1, n2, 
            Calculadora.SUBTRACAO)
    },
    dividir: function (n1, n2) {
        if (n2 == 0) {
            return 'erro'
        }

        return Calculadora.calcular(n1, n2,
            Calculadora.DIVISAO)
    },
    multiplicar: function (n1, n2) {

        return Calculadora.calcular(n1, n2, 
            Calculadora.MULTIPLICACAO)
    },

    calcular: function (n1, n2, operacao) {
        var result = 0

        n1 = parseFloat(n1)
        n2 = parseFloat(n2)

        if (isNaN(n1) || isNaN(n2)) {
            return 0
        }

        switch (operacao) {
            case Calculadora.ADICAO:
                result = n1 + n2
                break;
            case Calculadora.SUBTRACAO:
                result = n1 - n2
                break;
            case Calculadora.DIVISAO:
                result = n1 / n2
                break;
            case Calculadora.MULTIPLICACAO:
                result = n1 * n2
                break;
            default:
                result = 0
                break;
        }
        return result
    }
}

if (typeof module !== 'undefined' && typeof module.exports !== 'undefined') {
    module.exports = Calculadora
}