const yesButton = document.getElementById('yesButton');
const noButton = document.getElementById('noButton');
const question = document.getElementById('question');
const mainGif = document.getElementById('main-gif');

// Кезекпен шығатын сөздер тізімі
const phrases = [
    "Жоқ",
    "Сенімдісің бе? 🤨",
    "Өтінемін... 🥺",
    "Қайта ойланшы!",
    "Жүрегім ауырып тұр... 💔",
    "Мұңайтпашы мені...",
    "Бәрібір ИӘ деп басшы! ✨"
];

let phraseIndex = 0;
let yesSize = 18;
let noSize = 18;

// "Жоқ" батырмасы
noButton.addEventListener('click', () => {
    // ИӘ батырмасын үлкейту
    yesSize += 15;
    yesButton.style.fontSize = `${yesSize}px`;
    yesButton.style.padding = `${yesSize / 2}px ${yesSize}px`;

    // ЖОҚ батырмасын кішірейту
    if (noSize > 5) {
        noSize -= 2;
        noButton.style.fontSize = `${noSize}px`;
        noButton.style.padding = `${noSize / 2}px ${noSize}px`;
    }

    // Мәтінді ауыстыру
    noButton.innerText = phrases[phraseIndex];
    phraseIndex = (phraseIndex + 1) % phrases.length;
});

// "Иә" батырмасы
yesButton.addEventListener('click', () => {
    question.innerText = "Урааа! Мен де сені жақсы көремін! ❤️✨";

    if (mainGif) {
        mainGif.src = "https://media.tenor.com/gU_Pb_7pVmYAAAAi/cute-omg.gif";
    }

    document.querySelector('.buttons').style.display = 'none';
});
