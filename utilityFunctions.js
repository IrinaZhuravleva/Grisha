const isCyrillic = (str) => /[а-яёA-Z.,!?/()\d]/.test(str);
const isLatin = (str) => /[a-zA-Z.,!?/()\d]/.test(str);

module.exports = { isCyrillic, isLatin };