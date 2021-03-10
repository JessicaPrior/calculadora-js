var Calculadora = {
    somar: function (n1, n2) {
        if (isNaN(n1) || isNaN(n2)) {
            return 0
        }

        n1 = parseFloat(n1)
        n2 = parseFloat(n2)

        return n1 + n2
    },
    subtrair: function (n1, n2) {
        return 0
    },
    dividir: function (n1, n2) {
        return 0
    },
    multiplicar: function (n1, n2) {
        return 0
    }
}

if (typeof module !== 'undefined' && typeof module.exports !== 'undefined') {
    module.exports = Calculadora
}