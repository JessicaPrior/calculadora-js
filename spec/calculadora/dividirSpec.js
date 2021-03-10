describe("Suite de testes de divisão", function () {
    var calculadora = require('../../src/js/calculadora.js')

    it("Deve retornar 2 para 6 e 3", function () {
        expect(calculadora.dividir(6, 3)).toEqual(2)
    })

    it("Deve retornar 2 para 6 e 3 no formato de texto", function () {
        expect(calculadora.dividir('6', '3')).toEqual(2)
    })

    it("Deve retornar 1.5 para 4.5 e 3", function () {
        expect(calculadora.dividir(4.5, 3)).toEqual(1.5)
    })

    it("Deve retornar 'erro' para divisão por 0", function () {
        expect(calculadora.dividir(5, 0)).toEqual('erro')
    })

    it("Deve retornar 0 para valor 1 invalido", function () {
        expect(calculadora.dividir(undefined, 5)).toEqual(0)
    })

    it("Deve retornar 0 para valor 2 invalido", function () {
        expect(calculadora.dividir(5, undefined)).toEqual(0)
    })
})