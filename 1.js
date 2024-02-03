const { base } = require('./js/base.js');
const array1 = base.map(item => item.question);

const newArr = array1.filter(item => {
    const arr = [];
    if (/[а-яёA-Z.,!?/()\d]/i.test(item) === false){
        arr.push(item);
    };

    return arr
});

console.log(newArr);
