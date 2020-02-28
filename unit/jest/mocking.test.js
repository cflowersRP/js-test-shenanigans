const { addWithCallback } = require('../math');

describe('addWithCallback', () => {
    it('should add two numbers and invoke callback with result', () => {
        const fakeFn = jest.fn();
        addWithCallback(1, 3, fakeFn);
        expect(fakeFn).toHaveBeenCalledTimes(1);
        expect(fakeFn).toHaveBeenCalledWith(4);
    });
});
