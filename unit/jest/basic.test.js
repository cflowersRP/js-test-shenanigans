const { add, subtract } = require('../math');

describe('add', () => {
    it('should add two numbers', () => {
        expect(add(2, 3)).toEqual(5);
    });
});

describe('subtract', function() {
    it.each([
        [3, 2, 1],
        [6, 2, 4],
        [1, 0, 1],
    ])( 'subtracts %p and %p',
        (first, second, expected) => {
        expect(subtract(first, second)).toEqual(expected);
    });
});
