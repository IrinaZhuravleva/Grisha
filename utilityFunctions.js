const isCyrillic = (str) => /[а-яё.,!?/]/i.test(str);
const isLatin = (str) => /[a-zA-Z.,!?/]/.test(str);
// Экспорт функций
module.exports = { isCyrillic, isLatin };