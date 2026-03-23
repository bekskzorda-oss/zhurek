const yesButton = document.getElementById('yesButton');
const noButton = document.getElementById('noButton');
const question = document.getElementById('question');
const mainGif = document.getElementById('main-gif');

let yesSize = 18;

// "Жоқ" батырмасын басқанда
noButton.addEventListener('click', () => {
    // "Иә" батырмасын үлкейтеміз
    yesSize += 20;
yesButton.style.fontSize = ${yesSize}px;
    yesButton.style.padding = ${yesSize/2}px ${yesSize}px;
    
    // Мәтінді өзгерту (ерікті түрде)
    noButton.innerText = "Сенімдісің бе?";
});

// "Иә" батырмасын басқанда
yesButton.addEventListener('click', () => {
    question.innerText = "Ура! Мен де сені жақсы көремін! ❤️";
    if(mainGif) {
        mainGif.src = "https://media.tenor.com/gU_Pb_7pVmYAAAAi/cute-omg.gif";
    }
    document.querySelector('.buttons').style.display = 'none';
});
