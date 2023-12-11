const base = [
{ "id": 70, "question": "следующий, затем", "answer": "next" }, 
{ "id": 71, "question": "существительное", "answer": "noun" }, 
    { "id": 72, "question": "uestio", "answer": "number" },
{ "id": 73, "question": "одно лишнее", "answer": "odd-one-out" },
{ "id": 74, "question": "порядок/поставь по порядку", "answer": "next" }]

const array1 = base.map(item => item.question);
const array2 = [...new Set(array1)];

function checkDiff(arr) {
    const arrNew = [];
    arr.forEach((item, index) => {
        if (item.includes('/^[а-яё]+$/i')) {
            arr.push(item);
        }
    });
    return arrNew;
}

checkDiff(base)

// взять первый элемент из arr и заменить его на последний элемент из массива array2

function replaceDup(arr, base) {
    return base.map((item, index) => {
        if (item.answer === arr[index]) {
            debugger
            if (base[base.length - 1].answer === arr[index]) {
                base = base.slice(0, base.length - 1, 1)
            } else {
                item.answer = base[base.length - 1].answer;
                item.question = base[base.length - 1].question;
                base = base.slice(0, base.length - 1, 1)
            }
        }
        return base;
    });
}

function refactorArr(arr1, arr2) {
    debugger
    const arr = checkDiff(arr1, arr2);
    console.log(replaceDup(arr, base));
}

console.log(refactorArr(array1, array2));