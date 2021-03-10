describe("Suite de testes de adição", function (){
    var calculadora = require('../../src/js/calculadora.js')

    it("Deve retornar 5 para 2 e 3", function (){
        expect(calculadora.somar(2, 3)).toEqual(5)
    })

    it("Deve retornar 6 para 9 e -3 no formato texto", function (){
        expect(calculadora.somar('9', '-3')).toEqual(6)
    })

    it("Deve retornar 4.5 para 1.5 e 3", function (){
        expect(calculadora.somar(1.5, 3)).toEqual(4.5)
    })

    it("Deve retornar 0 quando valor 1 não for numerico", function (){
        expect(calculadora.somar(undefined, 10)).toEqual(0)
    })

    it("Deve retornar 0 quando valor 2 não for numerico", function (){
        expect(calculadora.somar(10, undefined)).toEqual(0)
    })
})