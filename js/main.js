const button = document.querySelector('button');
const nextButton = document.querySelector('button.nextButton');
const expressionNumber = document.querySelector('.expression-number');
const cats = document.querySelector('.cats');
const proverb = document.querySelector('.proverb');
const resetDataBtn = document.querySelectorAll('.reset-data');
const reloadBtn = document.querySelector('.reload-btn');
const proverbExpression = document.querySelector('.proverb-expression');
const proverbPhrase = document.querySelector('.proverb-expression div.image')
const answersBlock = document.querySelector('.answers');
const fifty = document.querySelectorAll('.fifty');
const cent = document.querySelectorAll('.cent');
const centfifty = document.querySelectorAll('.centfifty');
const lastfifty = document.querySelectorAll('.lastfifty');
const downloadCSVBtn = document.querySelector('.download-csv');
const a = document.querySelector('.nav .nav__btn');
const linkPopup = document.querySelector('.nav');
const linksPopup = document.querySelector('.nav__content');
const allLinksPopup = document.querySelectorAll('.nav__content .nav__item');

let questionCounter = 0;
let currentQuestionIndex = 0;
let length = base.length;
nextButton.disabled = true;
let catNumber = 0;
expressionNumber.innerText = `Слово: ${currentQuestionIndex + 1} из ${data.length}`;

cats.innerText = `Я собрал ${catNumber} котят`;

function showQuestion() {
    let questionToShow = selectQuestion();
    nextButton.disabled = true;
    addQuestionToSite(questionToShow);
}

let tralivaliShuffled = shuffle(data);

let questions = tralivaliShuffled.map(function (item, i) {
    return tralivaliShuffled[i].question;
});

let answers = tralivaliShuffled.map(function (item, i) {
    return tralivaliShuffled[i].answer;
});

function selectQuestion() {
    return tralivaliShuffled[currentQuestionIndex];
}

function addQuestionToSite(item) {
    document.querySelector('.question').innerHTML = item.question;
    correct = item.answer;
    let shuffledAnswers = shuffle(answers);

    let readyAnswers = shuffledAnswers.length > 5 ? shuffledAnswers.slice(1, 5) : shuffledAnswers;
  
    if (!readyAnswers.includes(item.answer)) {
        readyAnswers.push(item.answer);
        readyAnswers.splice(0, 1);
        readyAnswers = shuffle(readyAnswers);
    }
    
    readyAnswers.forEach(function (answer, index) {
        answersBlock.insertAdjacentHTML("beforeend", "<button>" + answer + "</button> &nbsp;")
    })
}

let elements = [...allLinksPopup].forEach(item => {
    item.addEventListener('click', () => {
        if (linkPopup.classList.contains('active')) {
            linkPopup.classList.remove('active');
        } else {
            linkPopup.classList.add('active');
        }
    });
});

a.addEventListener('click', () => {
    if (!linkPopup.classList.contains('active')) {
        linkPopup.classList.add('active');
    } else {
        linkPopup.classList.remove('active');
    }
})

answersBlock.addEventListener('click', (e) => {
    let target = e.target;
    if (correct == target.innerText) {
        document.querySelector('.checking-correct').style.display = 'block';
        if (nextButton.disabled) {
            nextButton.disabled = false;
        }

    } else {
        document.querySelector('.checking-incorrect').style.display = 'block';
        if (!nextButton.disabled) {
            nextButton.disabled = true;
        }
    }
})

function nextQuestion() {
    checkVisibility();
    document.querySelector('.question').innerHTML = tralivaliShuffled[currentQuestionIndex].question;
}

function nextButtonClickHandler() {
    if (questionCounter % 5 === 0) {
        
        proverb.style.display = "flex";
        let j = (randomInteger(1, 27));
        proverbPhrase.insertAdjacentHTML("beforeend", `<img src=img/cat${j}.jpeg>`)
        catNumber++;
        
        if (catNumber == 1 || catNumber == 21){
            cats.innerText = `Я собрал ${catNumber} котенка`;
        } else {
            cats.innerText = `Я собрал ${catNumber} котят`;
        }

        document.querySelector('.click-me').addEventListener("click", function () {
            proverb.style.display = "none";
            proverbPhrase.innerHTML = "";
        });
        setTimeout(() => {
            proverb.style.display = "none";
            proverbPhrase.innerHTML = "";
          }, "3000")
    }


    if (currentQuestionIndex === tralivaliShuffled.length - 1) {
        clearAnswersHTML();
        if (document.querySelector('.checking-correct').style.display == 'block') {
            document.querySelector('.checking-correct').style.display = 'none';
        }
        document.querySelector('.nextButton').style.display = 'none';

        document.querySelector('.question').innerHTML = `Поздравляем!!! Вы справились))). Хотите продолжить?<button style="color: black; background-color: #ffffff;  " onClick="location.reload()">Повторить</button>`;
        
    } else {
        clearAnswersHTML();
        currentQuestionIndex++;
     
        document.querySelector('.expression-number').innerText = `Номер слова: ${currentQuestionIndex + 1} из ${tralivaliShuffled.length}`;
        checkVisibility()
        showQuestion();
    }
}

function clearAnswersHTML() {
    answersBlock.innerHTML = "";
}

nextButton.addEventListener('click', function () {
    questionCounter++;
    nextButtonClickHandler();
})

showQuestion();

function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1)); // случайный индекс от 0 до i
        [array[i], array[j]] = [array[j], array[i]];
    };
    return array;
}

let wordsAmount = new wordsAmountChoice(base);

function checkVisibility() {
    document.querySelectorAll('.checking').forEach(function (item) {
        if (item.style.display == 'block') {
            item.style.display = 'none';
        }
    });
}

[...fifty].forEach(function (item) {
    item.addEventListener('click', () => {
        wordsAmount.chooseArray50();
    });
});

[...cent].forEach(function (item) {
    item.addEventListener('click', () => {
        wordsAmount.chooseArray100();
    });
});

[...centfifty].forEach(function (item) {
    item.addEventListener('click', () => {
        wordsAmount.chooseArrayAfter100();
    });
});

[...lastfifty].forEach(function (item) {
    item.addEventListener('click', () => {
        wordsAmount.chooseArrayLast();
    });
});

function resetData() {
    window.localStorage.removeItem('data');
    location.reload();
}

[...resetDataBtn].forEach(function (item) {
    item.addEventListener('click', () => {
        resetData();
    });
});

reloadBtn.addEventListener('click', () => {
    location.reload();
});

function randomInteger(min, max) {
    let rand = min - 0.5 + Math.random() * (max - min + 1);
    return Math.round(rand);
}

