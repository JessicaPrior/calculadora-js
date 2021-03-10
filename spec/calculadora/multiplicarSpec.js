describe("Suite de testes de multiplicação", function () {
    var calculadora = require('../../src/js/calculadora.js')

    it("Deve retornar 6 para 2 e 3",function () {
        expect(calculadora.multiplicar(2, 3)).toEqual(6)
    })

    it("Deve retornar 6 para 2 e 3 em formato texto",function () {
        expect(calculadora.multiplicar('2', '3')).toEqual(6)
    })

    it("Deve retornar 4.5 para 1.5 e 3", function () {
        expect(calculadora.multiplicar(1.5, 3)).toEqual(4.5)
    })

    it("Deve retornar 0 para valor 1 invalido", function () {
        expect(calculadora.multiplicar(undefined, 4)).toEqual(0)
    })

    it("Deve retornar 0 para valor 2 invalido", function () {
        expect(calculadora.multiplicar(4, undefined)).toEqual(0)
    })
})