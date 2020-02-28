const { getPath } = require('../get-path');

jest.mock('path', () => ({
    basename: () => 'seagulls!',
}));

describe('getPath', () => {
    it('returns the basename still!', () => {
        expect(getPath()).toEqual('seagulls!');
    });
});
