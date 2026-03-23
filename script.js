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
let yesSize = 18;  // "Иә" батырмасының бастапқы өлшемі
let noSize = 18;   // "Жоқ" батырмасының бастапқы өлшемі

// "Жоқ" батырмасын басқанда болатын әрекет
noButton.addEventListener('click', () => {
    // 1. "ИӘ" батырмасын үлкейтеміз
    yesSize += 15;
    yesButton.style.fontSize = ${yesSize}px;
    yesButton.style.padding = ${yesSize / 2}px ${yesSize}px;

    // 2. "ЖОҚ" батырмасын кішірейтеміз (минимум 5px-ке дейін)
    if (noSize > 5) {
        noSize -= 2;
        noButton.style.fontSize = ${noSize}px;
        noButton.style.padding = ${noSize / 2}px ${noSize}px;
    }

    // 3. Мәтінді кезекпен өзгертеміз
    noButton.innerText = phrases[phraseIndex];
    phraseIndex = (phraseIndex + 1) % phrases.length;
});

// "Иә" батырмасын басқанда болатын әрекет
yesButton.addEventListener('click', () => {
    question.innerText = "Урааа! Мен де сені жақсы көремін! ❤️✨";
    
    // Жеңіс гифкасын қоямыз
    if (mainGif) {
        mainGif.src = "https://media.tenor.com/gU_Pb_7pVmYAAAAi/cute-omg.gif";
    }
    
    // Батырмаларды жасырып тастаймыз
    document.querySelector('.buttons').style.display = 'none';
});
