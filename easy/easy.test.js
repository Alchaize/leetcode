


const seachInsert = require('./35searchInsertPosition');

test('nums = [1,3,5,6], target = 5, output 2', () => {
  expect(seachInsert([1,3,5,6], 5)).toBe(2);
})



const strStr = require('./28implement_strStr');
test('"hello", "ll" should return 2', () => {
  expect(strStr("hello", "ll")).toBe(2);
})

test('"aaaaa", "baa" should return -1', () => {
  expect(strStr("aaaa", "baa")).toBe(-1);
})

const removeElements = require('./27removeElements');
test('Gives ([1, 2, 2], 2). Expects 1', () => {
    expect(removeElements([1,2,2], 2)).toBe(1);
  });


const removeDuplicates = require('./26removeDuplicates');
test('Gives [1, 2, 2]. Expects 2', () => {
    expect(removeDuplicates([1,2,2])).toBe(2);
  });