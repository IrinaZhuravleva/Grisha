const { isCyrillic, isLatin } = require('./utilityFunctions'); 
const { base } = require('./js/base.js'); 

test('Check language for each element in the array', () => {
    base.forEach((item) => {
        expect(isCyrillic(item.question)).toBe(true);
        expect(isLatin(item.answer)).toBe(true);
    });
});

test('Check for duplicates in questions', () => {
    const array1 = base.map(item => item.question);
    const array2 = [...new Set(array1)];
    expect(array1.every((value, index) => value === array2[index])).toBe(true);
});

test('Check for duplicates in answers', () => {
    const array1 = base.map(item => item.answer);
    const array2 = [...new Set(array1)];
    expect(array1.every((value, index) => value === array2[index])).toBe(true);
});
