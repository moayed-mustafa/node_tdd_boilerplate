const { expect } = require('../test_helpers');
const exampleMethod = require('../../main/example')

describe('example', () => {
    it('true is true', () => {
        expect(true).equal(true);
    })

    it('exampleMethod returns 123', () => {
        expect(exampleMethod()).equal(123);
    })
})
