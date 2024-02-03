const { base } = require('./js/base.js');
const array1 = base.map(item => item.question);

const arr = [];
const newArr = array1.filter(item => (/^[а-яёА-ЯЁDVC1-9., --!?/()\d]+$/.test(item) === false));

console.log(newArr);
