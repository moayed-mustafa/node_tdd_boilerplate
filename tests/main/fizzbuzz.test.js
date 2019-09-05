const { expect } = require('../test_helpers');
const fizzBuzzMethod = require('../../main/example')

describe('fizbuzz kata', () => {
    // it('true is true', () => {
    //     expect(true).equal(true);
    // })

    it('should return fizz when a multiple of 3 is passed ', () => {
        expect(fizzBuzzMethod(3)).equal("fizz");
    })

    it('should return 4 when 4 is passed', () => {
        expect(fizzBuzzMethod(4)).equal(4);
    })
    it('should return buzz if a multiple of 5 is passed', () =>{
        expect(fizzBuzzMethod(5)).equal('buzz')
    })
    it('should return fizzbuzz if a multiple of 3 and 5 is passed', () =>{
        expect(fizzBuzzMethod(15)).equal('fizzbuzz')
    })
})
