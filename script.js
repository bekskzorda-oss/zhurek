const phrases = [
    "Жоқ",
    "Сенімдісің бе?",
    "Дәл қазір ме?",
    "Қайтадан ойланшы...",
    "Өтінемін!",
    "Мені мұңайтпашы :(",
    "Қатты мұңаямын...",
    "Бәрібір ИӘ деп басшы!"
];

let phraseIndex = 0;
let yesSize = 18; // Бастапқы шрифт өлшемі

const yesButton = document.getElementById('yesButton');
const noButton = document.getElementById('noButton');
const mainGif = document.getElementById('main-gif');
const question = document.getElementById('question');

noButton.addEventListener('click', () => {
    // "Иә" түймесін үлкейту
    yesSize += 20;
    yesButton.style.fontSize = ${yesSize}px;
    yesButton.style.padding = ${yesSize/2}px ${yesSize}px;

    // "Жоқ" түймесінің мәтінін өзгерту
    noButton.innerText = phrases[phraseIndex];
    phraseIndex = (phraseIndex + 1) % phrases.length;
});

yesButton.addEventListener('click', () => {
    // Жеңіс сәті!
    question.innerText = "Урааа! Мен де сені ұнатамын ! ❤️";
    mainGif.src = "https://media.tenor.com/gU_Pb_7pVmYAAAAi/cute-omg.gif"; // Қуанышты гифка
    document.querySelector('.buttons').style.display = 'none'; // Түймелерді жасыру
});