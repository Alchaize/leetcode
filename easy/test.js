

const removeDuplicates = require('./26removeDuplicates');
test('Gives [1, 2, 2]. Expects 2', () => {
    expect(removeDuplicates([1,2,2])).toBe(2);
  });