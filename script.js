// Game State
const gameState = {
    currentMode: null, // 'quiz', 'logo', 'syntax'
    language: 'random', // 'html', 'css', 'js', 'python', 'java', 'random'
    difficulty: 'normal',
    score: 0,
    currentIndex: 0,
    isActive: false,
    wrongAnswers: 0,
    maxWrong: 5,
    questions: [] // Will hold the 10 random questions
};

// DOM Elements
const sections = {
    hero: document.getElementById('hero'),
    selection: document.getElementById('game-selection'),
    gameplay: document.getElementById('gameplay'),
    gameOver: document.getElementById('game-over'),
    reward: document.getElementById('reward-modal')
};

const ui = {
    score: document.getElementById('score'),
    lives: document.getElementById('lives'),
    level: document.getElementById('difficulty-display'),
    content: document.getElementById('game-content-area'),
    feedback: document.getElementById('feedback'),
    finalScore: document.getElementById('final-score'),
    diffModal: document.getElementById('difficulty-modal'),
    langModal: document.getElementById('language-modal'),
    rewardScore: document.getElementById('reward-score'),
    rewardRank: document.getElementById('reward-rank')
};

// Utilities
function shuffleArray(array) {
    const newArr = [...array];
    for (let i = newArr.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [newArr[i], newArr[j]] = [newArr[j], newArr[i]];
    }
    return newArr;
}

// Voice Helper - Modified for "Firm Female" option
function speak(text, pitch = 1.0, rate = 1.0) {
    if ('speechSynthesis' in window) {
        window.speechSynthesis.cancel();

        const utterance = new SpeechSynthesisUtterance(text);
        utterance.lang = 'id-ID';
        utterance.pitch = pitch;
        utterance.rate = rate;

        const voices = window.speechSynthesis.getVoices();
        const indoVoice = voices.find(v => v.lang === 'id-ID' && (v.name.includes('Google') || v.name.includes('Female')));
        if (indoVoice) utterance.voice = indoVoice;

        window.speechSynthesis.speak(utterance);
    }
}

// Welcome Message removed as requested
// document.body.addEventListener('click', function initWelcome() { ... });

// Navigation
function showSection(id) {
    // Hide all sections/modals
    Object.values(sections).forEach(sec => {
        if (sec) sec.classList.add('hidden');
    });
    ui.diffModal.classList.add('hidden');
    ui.langModal.classList.add('hidden');

    if (id === 'hero') sections.hero.classList.remove('hidden');
    else if (id === 'game-selection') sections.selection.classList.remove('hidden');
    else if (id === 'gameplay') sections.gameplay.classList.remove('hidden');

    // Close mobile menu if open
    document.querySelector('.nav-links').classList.remove('active');
}

// Mobile Menu Toggle
document.getElementById('mobile-menu').addEventListener('click', () => {
    document.querySelector('.nav-links').classList.toggle('active');
});

// Game Logic
function selectGame(mode) {
    gameState.currentMode = mode;

    // For Logo mode, skip language selection and go straight to difficulty
    // behaving "like before" (mixed/random)
    if (mode === 'logo') {
        gameState.language = 'random';
        ui.diffModal.classList.remove('hidden');
    } else {
        // Show Language Selection first for other modes
        ui.langModal.classList.remove('hidden');
    }
}

function selectLanguage(lang) {
    gameState.language = lang;
    ui.langModal.classList.add('hidden');
    // Then show Difficulty Selection
    ui.diffModal.classList.remove('hidden');
}

function closeModal() {
    ui.diffModal.classList.add('hidden');
    ui.langModal.classList.add('hidden');
}

function startGameWithDifficulty(diff) {
    gameState.difficulty = diff;
    gameState.score = 0;
    gameState.wrongAnswers = 0;
    gameState.currentIndex = 0;
    gameState.isActive = true;

    // Load and shuffle questions based on Language
    const sourceData = questionBank[gameState.currentMode];
    let filteredData = [];

    if (gameState.language === 'random') {
        filteredData = sourceData;
    } else {
        filteredData = sourceData.filter(item => item.lang === gameState.language);
    }

    // Fallback if not enough questions for specific language (shouldn't happen with full data)
    if (filteredData.length < 5 && gameState.language !== 'random') {
        // Just in case, add some randoms or warn? For now, we assume data is sufficient.
        // Or we could fallback to mixed if empty.
        if (filteredData.length === 0) filteredData = sourceData;
    }

    // Pick 10 random questions (or fewer if not enough)
    gameState.questions = shuffleArray(filteredData).slice(0, 10);

    closeModal();
    showSection('gameplay');
    updateHUD();
    loadContent();
}

function updateHUD() {
    ui.score.textContent = gameState.score;
    if (ui.lives) ui.lives.textContent = gameState.maxWrong - gameState.wrongAnswers;
    ui.level.textContent = gameState.difficulty.toUpperCase();
}

function loadContent() {
    if (gameState.currentIndex >= gameState.questions.length) {
        showReward();
        return;
    }

    const item = gameState.questions[gameState.currentIndex];
    ui.feedback.classList.add('hidden');
    ui.content.innerHTML = ''; // Clear previous

    if (gameState.currentMode === 'quiz') {
        renderQuiz(item);
    } else if (gameState.currentMode === 'logo') {
        renderLogo(item);
    } else if (gameState.currentMode === 'syntax') {
        renderSyntax(item);
    }
}

function renderQuiz(item) {
    // Shuffle options for quiz
    const shuffledOpt = shuffleArray(item.opt);

    ui.content.innerHTML = `
        <div class="question-box">
            <h2 id="question-text">${item.q}</h2>
        </div>
        <div class="options-grid">
            ${shuffledOpt.map(opt =>
        `<button class="option-btn" onclick="checkAnswer('${opt.replace(/'/g, "\\'")}', this)">${opt}</button>`
    ).join('')}
        </div>
    `;
}

function renderLogo(item) {
    const shuffledOpt = shuffleArray(item.opt);

    ui.content.innerHTML = `
        <div class="logo-display">
            <i class="fab ${item.icon}"></i>
        </div>
        <h2 class="text-center mb-2">Logo Teknologi Apa Ini?</h2>
        <div class="options-grid">
            ${shuffledOpt.map(opt =>
        `<button class="option-btn" onclick="checkAnswer('${opt}', this)">${opt}</button>`
    ).join('')}
        </div>
    `;
}

function renderSyntax(item) {
    ui.content.innerHTML = `
        <div class="question-box">
            <h2>${item.q}</h2>
            <p class="text-dim">Hint: ${item.hint || 'No hint'}</p>
        </div>
        <div class="code-input-area">
            <input type="text" id="syntax-input" class="code-input" placeholder="Ketik kodemu di sini..." autocomplete="off">
            <button class="cyber-btn mt-2" onclick="checkSyntax()">JALANKAN_KODE()</button>
        </div>
    `;

    setTimeout(() => {
        const input = document.getElementById('syntax-input');
        if (input) input.focus();
    }, 100);
}

function checkAnswer(selected, btn) {
    if (!gameState.isActive) return;

    const item = gameState.questions[gameState.currentIndex];

    // Determine correct answer based on mode
    let isCorrect = false;
    let correctText = "";

    if (gameState.currentMode === 'quiz') {
        isCorrect = (selected === item.a);
        correctText = item.a;
    }
    if (gameState.currentMode === 'logo') {
        isCorrect = (selected === item.name);
        correctText = item.name;
    }

    if (isCorrect) {
        btn.classList.add('correct');
        handleSuccess();
    } else {
        btn.classList.add('wrong');
        handleFail(correctText);

        // Show correct in UI if needed
        const buttons = ui.content.querySelectorAll('.option-btn');
        buttons.forEach(b => {
            if (b.textContent === correctText) {
                b.classList.add('correct');
            }
        });
    }

    nextTurn();
}

function checkSyntax() {
    if (!gameState.isActive) return;

    const item = gameState.questions[gameState.currentIndex];
    const correctAnswer = item.a;

    const input = document.getElementById('syntax-input');
    const userVal = input.value.trim().replace(/\s+/g, ' ').replace(/"/g, "'");
    const target = correctAnswer.trim().replace(/\s+/g, ' ').replace(/"/g, "'");

    const userValNoSemi = userVal.replace(/;$/, '');
    const targetNoSemi = target.replace(/;$/, '');

    if (userVal === target || userValNoSemi === targetNoSemi) {
        input.style.borderColor = '#2ecc71';
        handleSuccess();
    } else {
        input.style.borderColor = '#e74c3c';
        handleFail(correctAnswer);
    }

    nextTurn();
}

function handleSuccess() {
    // Scoring based on difficulty
    const multiplier = gameState.difficulty === 'hard' ? 3 : gameState.difficulty === 'medium' ? 2 : 1;
    gameState.score += (100 * multiplier);

    updateHUD();

    if (gameState.currentMode === 'syntax') {
        ui.feedback.textContent = "Kamu benar menulis kodenya";
    } else {
        ui.feedback.textContent = "BENAR!";
    }

    // Play "Benar" sound using helper
    speak("Benar");

    ui.feedback.className = "feedback correct";
    ui.feedback.classList.remove('hidden');
}

function handleFail(correctAnswer) {
    ui.feedback.innerHTML = `SALAH!<br><span style="font-size: 0.9em; opacity: 0.9;">Jawaban: ${correctAnswer}</span>`;

    // Play "Salah" sound
    speak("Salah");

    gameState.wrongAnswers++;
    updateHUD();

    ui.feedback.className = "feedback wrong";
    ui.feedback.classList.remove('hidden');

    // Check if max wrong answers reached
    if (gameState.wrongAnswers >= gameState.maxWrong) {
        speak("Kesempatan habis. Permainan berakhir.", 0.9, 1.0);
        setTimeout(() => {
            showReward();
        }, 1500);
        gameState.isActive = false; // Prevent further clicks
        return; // Stop nextTurn
    }
}

function nextTurn() {
    gameState.isActive = false;
    setTimeout(() => {
        gameState.currentIndex++;
        gameState.isActive = true;
        loadContent();
    }, 2000); // 2 seconds to read feedback
}

function showReward() {
    gameState.isActive = false;
    sections.gameplay.classList.add('hidden');
    sections.reward.classList.remove('hidden');

    // Confetti effect (simulated via animation in CSS) or could add JS library
    ui.rewardScore.textContent = gameState.score;

    // Calculate Rank
    let rank = "Novice Coder";
    if (gameState.score > 2500) rank = "Legendary Hacker";
    else if (gameState.score > 1500) rank = "Senior Developer";
    else if (gameState.score > 500) rank = "Junior Developer";

    ui.rewardRank.textContent = rank;

    // Reward / Punishment Logic
    const msgElement = document.getElementById('reward-message');
    if (gameState.score < 500) {
        msgElement.innerText = "Hukuman: Belajar lagi dasar-dasar coding!";
        msgElement.style.color = "#ff4757"; // Red for punishment
        speak("Nilai kamu kecil. Hukuman: Belajar lagi dasar-dasar coding!", 0.9, 1.0);
    } else {
        msgElement.innerText = "Hadiah: Selamat! Kamu layak dapat bintang!";
        msgElement.style.color = "#2ecc71"; // Green for reward
        speak("Selamat! Kamu menang dan layak dapat bintang!", 1.1, 1.0);
    }
}
