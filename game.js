(() => {
    const CONFIG = {
        MUSIC_COUNT: 9,
        AVATAR_COUNT: 9,
        MUSIC_PATH: 'music',
        SOUNDS_PATH: 'sounds'
    };

    let isWheelSpinning = false;
    let isSlotSpinning = false;
    let flagsGameActive = false;
    let flagsStreak = 0;
    let flagsRecord = parseInt(localStorage.getItem('flagsRecord')) || 0;
    let currentFlag = null;
    let usedFlagsThisRound = new Set();
    let currentMusicIndex = 0;
    let musicQueue = [];

    const RARITY_CHANCES = {
        'Ничего': 15,
        'Обычные': 50,
        'Редкие': 20,
        'Эпические': 10,
        'Легендарные': 3,
        'Мифические': 1.5,
        'Секретные': 0.5
    };

    const AVATAR_RARITY = {
        1: 'Обычные', 2: 'Обычные',
        3: 'Редкие', 4: 'Редкие',
        5: 'Эпические', 6: 'Эпические',
        7: 'Легендарные',
        8: 'Мифические',
        9: 'Секретные'
    };

    // РАСШИРЕННЫЙ СПИСОК СТРАН (100+ стран)
    const COUNTRIES = [
        {name: "Россия", code: "ru"}, {name: "США", code: "us"}, {name: "Германия", code: "de"},
        {name: "Франция", code: "fr"}, {name: "Великобритания", code: "gb"}, {name: "Китай", code: "cn"},
        {name: "Япония", code: "jp"}, {name: "Италия", code: "it"}, {name: "Испания", code: "es"},
        {name: "Канада", code: "ca"}, {name: "Австралия", code: "au"}, {name: "Бразилия", code: "br"},
        {name: "Индия", code: "in"}, {name: "Мексика", code: "mx"}, {name: "Южная Корея", code: "kr"},
        {name: "Нидерланды", code: "nl"}, {name: "Швеция", code: "se"}, {name: "Норвегия", code: "no"},
        {name: "Финляндия", code: "fi"}, {name: "Польша", code: "pl"}, {name: "Украина", code: "ua"},
        {name: "Турция", code: "tr"}, {name: "Египет", code: "eg"}, {name: "ЮАР", code: "za"},
        {name: "Аргентина", code: "ar"}, {name: "Чили", code: "cl"}, {name: "Колумбия", code: "co"},
        {name: "Перу", code: "pe"}, {name: "Венесуэла", code: "ve"}, {name: "Пакистан", code: "pk"},
        {name: "Бангладеш", code: "bd"}, {name: "Нигерия", code: "ng"}, {name: "Эфиопия", code: "et"},
        {name: "Кения", code: "ke"}, {name: "Марокко", code: "ma"}, {name: "Алжир", code: "dz"},
        {name: "Тунис", code: "tn"}, {name: "Гана", code: "gh"}, {name: "Ангола", code: "ao"},
        {name: "Саудовская Аравия", code: "sa"}, {name: "ОАЭ", code: "ae"}, {name: "Катар", code: "qa"},
        {name: "Иран", code: "ir"}, {name: "Ирак", code: "iq"}, {name: "Израиль", code: "il"},
        {name: "Иордания", code: "jo"}, {name: "Ливан", code: "lb"}, {name: "Сирия", code: "sy"},
        {name: "Вьетнам", code: "vn"}, {name: "Таиланд", code: "th"}, {name: "Индонезия", code: "id"},
        {name: "Малайзия", code: "my"}, {name: "Филиппины", code: "ph"}, {name: "Сингапур", code: "sg"},
        {name: "Новая Зеландия", code: "nz"}, {name: "Куба", code: "cu"}, {name: "Ямайка", code: "jm"},
        {name: "Доминиканская Республика", code: "do"}, {name: "Пуэрто-Рико", code: "pr"},
        {name: "Греция", code: "gr"}, {name: "Португалия", code: "pt"}, {name: "Чехия", code: "cz"},
        {name: "Венгрия", code: "hu"}, {name: "Румыния", code: "ro"}, {name: "Болгария", code: "bg"},
        {name: "Сербия", code: "rs"}, {name: "Хорватия", code: "hr"}, {name: "Словения", code: "si"},
        {name: "Словакия", code: "sk"}, {name: "Беларусь", code: "by"}, {name: "Казахстан", code: "kz"},
        {name: "Узбекистан", code: "uz"}, {name: "Азербайджан", code: "az"}, {name: "Армения", code: "am"},
        {name: "Грузия", code: "ge"}, {name: "Молдова", code: "md"}, {name: "Латвия", code: "lv"},
        {name: "Литва", code: "lt"}, {name: "Эстония", code: "ee"}, {name: "Албания", code: "al"},
        {name: "Македония", code: "mk"}, {name: "Черногория", code: "me"}, {name: "Босния", code: "ba"},
        {name: "Косово", code: "xk"}, {name: "Мальта", code: "mt"}, {name: "Кипр", code: "cy"},
        {name: "Исландия", code: "is"}, {name: "Ирландия", code: "ie"}, {name: "Люксембург", code: "lu"},
        {name: "Монако", code: "mc"}, {name: "Андорра", code: "ad"}, {name: "Сан-Марино", code: "sm"},
        {name: "Лихтенштейн", code: "li"}, {name: "Ватикан", code: "va"}, {name: "Швейцария", code: "ch"},
        {name: "Австрия", code: "at"}, {name: "Бельгия", code: "be"}, {name: "Дания", code: "dk"},
        {name: "Фарерские острова", code: "fo"}, {name: "Гренландия", code: "gl"},
        {name: "Шри-Ланка", code: "lk"}, {name: "Непал", code: "np"}, {name: "Бутан", code: "bt"},
        {name: "Мьянма", code: "mm"}, {name: "Камбоджа", code: "kh"}, {name: "Лаос", code: "la"},
        {name: "Монголия", code: "mn"}, {name: "Тайвань", code: "tw"}, {name: "Гонконг", code: "hk"},
        {name: "Макао", code: "mo"}, {name: "Восточный Тимор", code: "tl"}, {name: "Бруней", code: "bn"}
    ];

    const $ = id => document.getElementById(id);

    // ВОССТАНАВЛИВАЕМ СИСТЕМУ ЗВУКОВ
    function initSounds() {
        try {
            // Используем существующие audio элементы
            if (window.bgAudio) {
                const mv = localStorage.getItem('musicVol');
                window.bgAudio.volume = mv !== null ? Number(mv) : 0.12;
            }
            
            if (window.wheelSound) {
                const sv = localStorage.getItem('sfxVol');
                const v = sv !== null ? Number(sv) : 1;
                window.wheelSound.volume = v;
                window.slotSound.volume = v;
                window.clickSound.volume = v;
                
                // Предзагрузка звуков
                window.wheelSound.load();
                window.slotSound.load();
                window.clickSound.load();
            }
        } catch (error) {
            console.log('Ошибка инициализации звуков:', error);
        }
    }

    // ВОССТАНАВЛИВАЕМ СИСТЕМУ МУЗЫКИ
    function initMusic() {
        if (!window.bgAudio) return;
        
        // Инициализация очереди музыки
        musicQueue = [];
        for (let i = 1; i <= CONFIG.MUSIC_COUNT; i++) {
            musicQueue.push(i);
        }
        musicQueue = shuffle(musicQueue);
    }

    function startGameMusic() {
        if (!window.bgAudio || musicQueue.length === 0) return;
        
        currentMusicIndex = (currentMusicIndex + 1) % musicQueue.length;
        const musicNum = musicQueue[currentMusicIndex];
        
        window.bgAudio.src = `${CONFIG.MUSIC_PATH}/fon${musicNum}.mp3`;
        window.bgAudio.loop = false;
        
        window.bgAudio.play().catch((error) => {
            console.log('Ошибка воспроизведения музыки:', error);
            setTimeout(startGameMusic, 1000);
        });

        window.bgAudio.onended = () => {
            setTimeout(startGameMusic, 500);
        };
    }

    function stopGameMusic() {
        if (window.bgAudio) {
            window.bgAudio.pause();
            window.bgAudio.onended = null;
        }
    }

    function playSound(sound) {
        if (!sound || !sound.play) return;
        try {
            sound.currentTime = 0;
            sound.play().catch(() => {});
        } catch (error) {
            console.log('Ошибка воспроизведения звука');
        }
    }

    function shuffle(array) {
        const arr = [...array];
        for (let i = arr.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [arr[i], arr[j]] = [arr[j], arr[i]];
        }
        return arr;
    }

    function getRandomByWeights(weights) {
        const total = Object.values(weights).reduce((sum, weight) => sum + weight, 0);
        let random = Math.random() * total;
        for (const [item, weight] of Object.entries(weights)) {
            random -= weight;
            if (random <= 0) return item;
        }
        return Object.keys(weights)[0];
    }

    function getRandomCardByRarity(rarity) {
        if (rarity === 'Ничего' || !window.ALL_CARDS || !Array.isArray(window.ALL_CARDS)) return null;
        const pool = window.ALL_CARDS.filter(card => card.rarity === rarity);
        return pool.length > 0 ? {...pool[Math.floor(Math.random() * pool.length)]} : null;
    }

    function addCardToCollection(card) {
        if (!card) return false;
        if (!window.CARDS) window.CARDS = [];
        const existing = window.CARDS.find(c => c.name === card.name && c.country === card.country);
        if (!existing) {
            window.CARDS.push(card);
            localStorage.setItem('playerCards', JSON.stringify(window.CARDS));
            if (window.renderCards) window.renderCards();
            return true;
        }
        return false;
    }

    function determineAvatarByProbability() {
        const rarity = getRandomByWeights(RARITY_CHANCES);
        const map = {
            'Обычные': [1, 2], 'Редкие': [3, 4], 'Эпические': [5, 6],
            'Легендарные': [7], 'Мифические': [8], 'Секретные': [9]
        };
        if (rarity === 'Ничего') return Math.floor(Math.random() * 9) + 1;
        const pool = map[rarity] || [1];
        return pool[Math.floor(Math.random() * pool.length)];
    }

    function showGameModal(html) {
        document.querySelectorAll('.game-modal-overlay').forEach(modal => modal.remove());
        const modal = document.createElement('div');
        modal.className = 'game-modal-overlay';
        modal.style.cssText = `
            position: fixed; top: 0; left: 0; right: 0; bottom: 0;
            background: var(--bg-modal); z-index: 2000;
            display: flex; align-items: center; justify-content: center;
            padding: 20px; overflow: hidden;
        `;
        modal.innerHTML = `
            <div class="game-modal-content" style="
                background: var(--bg-card); border-radius: var(--radius-lg);
                padding: 24px; max-width: 400px; width: 100%;
                max-height: 80vh; overflow-y: auto; position: relative;
                box-shadow: var(--shadow-dark); overflow-x: hidden;
            ">
                <button class="modal-close-btn" style="
                    position: absolute; top: 12px; right: 12px;
                    width: 32px; height: 32px; background: var(--bg-secondary);
                    border: 1px solid var(--border-color); border-radius: 50%;
                    color: var(--text-primary); cursor: pointer;
                    display: flex; align-items: center; justify-content: center;
                    font-size: 16px; z-index: 10;
                ">✕</button>
                ${html}
            </div>
        `;
        modal.querySelector('.modal-close-btn').addEventListener('click', () => {
            playSound(window.clickSound);
            modal.remove();
        });
        document.body.appendChild(modal);
        return modal;
    }

    function loadWheelGame() {
        const gameContent = $('gameContent');
        if (!gameContent) return;
        gameContent.innerHTML = `
            <div class="wheel-game-container">
                <h2>КОЛЕСО ФОРТУНЫ</h2>
                <div class="wheel-wrapper">
                    <div class="wheel" id="wheel">
                        <div class="wheel-center">SPIN</div>
                    </div>
                    <div class="wheel-pointer"></div>
                </div>
                <button class="wheel-spin-btn game-action-btn" id="wheelBtn">КРУТИТЬ</button>
            </div>
        `;
        initWheelGame();
    }

    function initWheelGame() {
        const wheel = $('wheel');
        const wheelBtn = $('wheelBtn');
        if (!wheel || !wheelBtn) return;

        wheelBtn.addEventListener('click', () => {
            if (isWheelSpinning) return;
            playSound(window.clickSound);
            isWheelSpinning = true;
            wheelBtn.disabled = true;
            playSound(window.wheelSound);

            const targetRarity = getRandomByWeights(RARITY_CHANCES);
            const segments = ['Ничего', 'Обычные', 'Редкие', 'Обычные', 'Ничего', 'Эпические', 'Редкие', 'Легендарные'];
            const targetIndex = segments.indexOf(targetRarity);
            const segmentAngle = 360 / segments.length;
            const targetAngle = targetIndex * segmentAngle + segmentAngle / 2;
            const spins = 3;
            const totalRotation = spins * 360 + (360 - targetAngle);
            
            wheel.style.transform = `rotate(${totalRotation}deg)`;

            setTimeout(() => {
                isWheelSpinning = false;
                wheelBtn.disabled = false;
                setTimeout(() => {
                    wheel.style.transition = 'none';
                    wheel.style.transform = 'rotate(0deg)';
                    setTimeout(() => wheel.style.transition = 'transform 4s cubic-bezier(0.2, 0.8, 0.3, 1)', 50);
                }, 100);

                if (targetRarity !== 'Ничего') {
                    const card = getRandomCardByRarity(targetRarity);
                    if (card) {
                        const added = addCardToCollection(card);
                        showGameModal(`
                            <div style="text-align: center;">
                                <h3 style="color: var(--text-primary); margin-bottom: 20px;">
                                    ${added ? 'НОВАЯ КАРТА!' : 'Упс.. Повторка. Повезёт в следующий раз'}
                                </h3>
                                <img src="${card.image || 'images/foto.png'}" 
                                     onerror="this.src='images/foto.png'" 
                                     style="width: 120px; height: 150px; object-fit: cover; border-radius: 8px; margin-bottom: 15px;">
                                <div style="color: var(--text-primary);">
                                    <h4 style="margin: 0 0 8px 0;">${card.name}</h4>
                                    <p style="margin: 0 0 4px 0; opacity: 0.9;">${card.title}</p>
                                    <p style="margin: 0 0 8px 0; opacity: 0.9;">${card.country}</p>
                                    <div style="
                                        display: inline-block; padding: 4px 12px; border-radius: 20px;
                                        font-size: 12px; font-weight: bold;
                                        background: var(--rarity-${card.rarity.toLowerCase()}); color: #000;
                                    ">${card.rarity}</div>
                                </div>
                            </div>
                        `);
                    }
                } else {
                    showGameModal(`
                        <div style="text-align: center; padding: 20px;">
                            <h3 style="color: var(--text-primary); margin-bottom: 16px;">
                                ПОВЕЗЁТ В СЛЕДУЮЩИЙ РАЗ!
                            </h3>
                            <div style="font-size: 48px; margin-bottom: 16px;">🎪</div>
                            <p style="color: var(--text-secondary);">
                                Колесо остановилось на пустом секторе
                            </p>
                        </div>
                    `);
                }
            }, 4000);
        });
    }

    function loadSlotGame() {
        const gameContent = $('gameContent');
        if (!gameContent) return;
        gameContent.innerHTML = `
            <div class="slot-game-container">
                <h2>ИГРОВОЙ АВТОМАТ</h2>
                <div class="slot-reels">
                    ${[1, 2, 3].map(i => `
                        <div class="reel-container">
                            <div class="reel" id="reel${i}">
                                <img src="images/avt1.png" alt="Слот ${i}">
                            </div>
                        </div>
                    `).join('')}
                </div>
                <button class="slot-spin-btn game-action-btn" id="slotBtn">КРУТИТЬ</button>
            </div>
        `;
        initSlotGame();
    }

    function initSlotGame() {
        const slotBtn = $('slotBtn');
        if (!slotBtn) return;

        slotBtn.addEventListener('click', async () => {
            if (isSlotSpinning) return;
            playSound(window.clickSound);
            isSlotSpinning = true;
            slotBtn.disabled = true;
            playSound(window.slotSound);

            const results = [];
            for (let i = 1; i <= 3; i++) {
                const result = await spinReel(i, 1500 + (i-1) * 300);
                results.push(result);
            }
            
            const rarity1 = AVATAR_RARITY[results[0]];
            const rarity2 = AVATAR_RARITY[results[1]];
            const rarity3 = AVATAR_RARITY[results[2]];
            
            if (rarity1 === rarity2 && rarity2 === rarity3 && rarity1 !== 'Ничего') {
                const card = getRandomCardByRarity(rarity1);
                if (card) {
                    const added = addCardToCollection(card);
                    showGameModal(`
                        <div style="text-align: center;">
                            <h3 style="color: var(--text-primary); margin-bottom: 20px;">
                                ${added ? 'НОВАЯ КАРТА!' : 'Упс.. Повторка. Повезёт в следующий раз'}
                            </h3>
                            <img src="${card.image || 'images/foto.png'}" 
                                 onerror="this.src='images/foto.png'" 
                                 style="width: 120px; height: 150px; object-fit: cover; border-radius: 8px; margin-bottom: 15px;">
                            <div style="color: var(--text-primary);">
                                <h4 style="margin: 0 0 8px 0;">${card.name}</h4>
                                <p style="margin: 0 0 4px 0; opacity: 0.9;">${card.title}</p>
                                <p style="margin: 0 0 8px 0; opacity: 0.9;">${card.country}</p>
                                <div style="
                                    display: inline-block; padding: 4px 12px; border-radius: 20px;
                                    font-size: 12px; font-weight: bold;
                                    background: var(--rarity-${card.rarity.toLowerCase()}); color: #000;
                                ">${card.rarity}</div>
                            </div>
                        </div>
                    `);
                }
            } else {
                showGameModal(`
                    <div style="text-align: center; padding: 20px;">
                        <h3 style="color: var(--text-primary); margin-bottom: 16px;">
                            ПОПРОБУЙТЕ ЕЩЁ РАЗ!
                        </h3>
                        <div style="font-size: 48px; margin-bottom: 16px;">🎰</div>
                        <p style="color: var(--text-secondary);">
                            Не удалось собрать комбинацию
                        </p>
                    </div>
                `);
            }
            
            isSlotSpinning = false;
            slotBtn.disabled = false;
        });

        function spinReel(reelIndex, duration) {
            return new Promise(resolve => {
                const reel = $(`reel${reelIndex}`);
                if (!reel) return resolve(1);
                
                let startTime = null;
                const spinInterval = 100;
                let lastUpdate = 0;
                
                function animate(currentTime) {
                    if (!startTime) startTime = currentTime;
                    const elapsed = currentTime - startTime;
                    
                    if (currentTime - lastUpdate > spinInterval) {
                        const randomAvatar = Math.floor(Math.random() * CONFIG.AVATAR_COUNT) + 1;
                        const img = reel.querySelector('img');
                        if (img) img.src = `images/avt${randomAvatar}.png`;
                        lastUpdate = currentTime;
                    }
                    
                    if (elapsed < duration) {
                        requestAnimationFrame(animate);
                    } else {
                        const finalAvatar = determineAvatarByProbability();
                        const img = reel.querySelector('img');
                        if (img) img.src = `images/avt${finalAvatar}.png`;
                        resolve(finalAvatar);
                    }
                }
                
                requestAnimationFrame(animate);
            });
        }
    }

    function loadFlagsGame() {
        const gameContent = $('gameContent');
        if (!gameContent) return;
        gameContent.innerHTML = `
            <div class="flags-game-container">
                <h2>УГАДАЙ ФЛАГ</h2>
                <div class="flags-stats">
                    <div class="record-info">Рекорд: ${flagsRecord} подряд</div>
                    <div class="streak-info">Серия: <span id="currentStreak">0</span></div>
                </div>
                <div class="flag-display">
                    <div class="flag-placeholder" id="flagPlaceholder">Загрузка флага...</div>
                    <img id="flagImg" alt="Флаг" class="flag-img" style="display: none;">
                </div>
                <div id="flagOptions" class="flag-options"></div>
                <button class="flags-action-btn game-action-btn" id="flagsBtn">НАЧАТЬ</button>
            </div>
        `;
        initFlagsGame();
    }

    function initFlagsGame() {
        const flagsBtn = $('flagsBtn');
        const flagImg = $('flagImg');
        const flagOptions = $('flagOptions');
        const currentStreak = $('currentStreak');
        const flagPlaceholder = $('flagPlaceholder');

        if (!flagsBtn || !flagOptions || !currentStreak) return;

        flagsBtn.addEventListener('click', () => {
            playSound(window.clickSound);
            if (!flagsGameActive) {
                startFlagsGame();
            } else {
                nextFlag();
            }
        });

        function startFlagsGame() {
            flagsGameActive = true;
            flagsStreak = 0;
            currentStreak.textContent = '0';
            flagsBtn.textContent = 'СЛЕДУЮЩИЙ';
            usedFlagsThisRound.clear();
            nextFlag();
        }

        function nextFlag() {
            const pool = COUNTRIES;
            if (pool.length === 0) {
                showGameModal('<div style="text-align: center;"><p>Ошибка: нет данных о флагах</p></div>');
                return;
            }

            let candidate;
            let attempts = 0;
            
            // УСЛОЖНЕНИЕ: с ростом серии выбираем более редкие страны
            const startIndex = Math.min(Math.floor(flagsStreak / 5), Math.floor(pool.length * 0.7));
            const availablePool = pool.slice(startIndex);
            
            do {
                candidate = availablePool[Math.floor(Math.random() * availablePool.length)];
                attempts++;
            } while (usedFlagsThisRound.has(candidate.code) && attempts < 50);
            
            if (attempts >= 50) {
                usedFlagsThisRound.clear();
                candidate = availablePool[Math.floor(Math.random() * availablePool.length)];
            }
            
            currentFlag = {
                country: candidate.name,
                img: `https://flagcdn.com/w320/${candidate.code.toLowerCase()}.png`
            };
            
            usedFlagsThisRound.add(candidate.code);

            if (flagImg) {
                flagImg.style.display = 'none';
                flagImg.onload = function() {
                    if (flagPlaceholder) flagPlaceholder.style.display = 'none';
                    flagImg.style.display = 'block';
                };
                flagImg.onerror = function() {
                    if (flagPlaceholder) {
                        flagPlaceholder.textContent = 'Ошибка загрузки флага';
                        flagPlaceholder.style.display = 'flex';
                    }
                    setTimeout(nextFlag, 1000);
                };
                flagImg.src = currentFlag.img;
            }

            generateOptions(pool, candidate.name);
        }

        function generateOptions(pool, correctAnswer) {
            flagOptions.innerHTML = '';
            
            // УСЛОЖНЕНИЕ: увеличиваем количество вариантов с ростом серии
            let numOptions = 4 + Math.floor(flagsStreak / 10);
            numOptions = Math.min(numOptions, 8); // максимум 8 вариантов
            
            const options = [correctAnswer];
            
            // УСЛОЖНЕНИЕ: добавляем похожие по сложности страны
            const startIndex = Math.min(Math.floor(flagsStreak / 5), Math.floor(pool.length * 0.7));
            const availablePool = pool.slice(startIndex);
            
            while (options.length < numOptions) {
                const randomFlag = availablePool[Math.floor(Math.random() * availablePool.length)];
                if (!options.includes(randomFlag.name)) {
                    options.push(randomFlag.name);
                }
            }
            
            shuffle(options).forEach(option => {
                const button = document.createElement('button');
                button.className = 'flag-option-btn';
                button.textContent = option;
                button.style.cssText = `
                    padding: 16px; background: var(--bg-secondary);
                    border: 2px solid var(--border-color); border-radius: var(--radius-md);
                    color: var(--text-primary); font-size: 16px; font-weight: 600;
                    cursor: pointer; transition: all 0.2s ease; width: 100%;
                `;
                button.addEventListener('click', () => checkAnswer(option));
                flagOptions.appendChild(button);
            });
        }

        function checkAnswer(selected) {
            playSound(window.clickSound);
            if (selected === currentFlag.country) {
                flagsStreak++;
                currentStreak.textContent = flagsStreak;
                if (flagsStreak > flagsRecord) {
                    flagsRecord = flagsStreak;
                    localStorage.setItem('flagsRecord', String(flagsRecord));
                    const recordElement = document.querySelector('.record-info');
                    if (recordElement) recordElement.textContent = `Рекорд: ${flagsRecord} подряд`;
                }
                checkStreakReward();
            } else {
                showGameModal(`
                    <div style="text-align: center; padding: 20px;">
                        <h3 style="color: var(--text-primary); margin-bottom: 16px;">НЕВЕРНО!</h3>
                        <p style="color: var(--text-secondary); margin-bottom: 16px;">
                            Это флаг ${currentFlag.country}
                        </p>
                        <p style="color: var(--text-secondary);">
                            Ваша серия: ${flagsStreak}
                        </p>
                    </div>
                `);
                flagsGameActive = false;
                flagsStreak = 0;
                flagsBtn.textContent = 'НАЧАТЬ';
            }
        }

        function checkStreakReward() {
            let rewardCard = null;
            let message = '';
            
            // УСЛОЖНЕНИЕ: награды становятся лучше с ростом сложности
            if (flagsStreak === 5) {
                rewardCard = getRandomCardByRarity('Обычные');
                message = 'Обычная карта за 5 флагов!';
            } else if (flagsStreak === 10) {
                rewardCard = getRandomCardByRarity('Редкие');
                message = 'Редкая карта за 10 флагов!';
            } else if (flagsStreak === 15) {
                rewardCard = getRandomCardByRarity('Эпические');
                message = 'Эпическая карта за 15 флагов!';
            } else if (flagsStreak === 20) {
                rewardCard = getRandomCardByRarity('Легендарные');
                message = 'Легендарная карта за 20 флагов!';
            } else if (flagsStreak % 10 === 0 && flagsStreak > 20) {
                const rarities = ['Легендарные', 'Мифические', 'Секретные'];
                const rarity = rarities[Math.min(Math.floor(flagsStreak / 30), 2)];
                rewardCard = getRandomCardByRarity(rarity);
                message = `${rarity} карта за ${flagsStreak} флагов!`;
            }
            
            if (rewardCard) {
                const added = addCardToCollection(rewardCard);
                showRewardMessage(message, rewardCard, added);
            } else {
                setTimeout(nextFlag, 800);
            }
        }

        function showRewardMessage(message, card, added) {
            showGameModal(`
                <div style="text-align: center;">
                    <h3 style="color: var(--text-primary); margin-bottom: 20px;">${message}</h3>
                    <img src="${card.image || 'images/foto.png'}" 
                         onerror="this.src='images/foto.png'" 
                         style="width: 120px; height: 150px; object-fit: cover; border-radius: 8px; margin-bottom: 15px;">
                    <div style="color: var(--text-primary);">
                        <h4 style="margin: 0 0 8px 0;">${card.name}</h4>
                        <p style="margin: 0 0 4px 0; opacity: 0.9;">${card.title}</p>
                        <p style="margin: 0 0 8px 0; opacity: 0.9;">${card.country}</p>
                        <div style="
                            display: inline-block; padding: 4px 12px; border-radius: 20px;
                            font-size: 12px; font-weight: bold;
                            background: var(--rarity-${card.rarity.toLowerCase()}); color: #000;
                        ">${card.rarity}</div>
                    </div>
                    ${!added ? '<p style="color: var(--text-secondary); margin-top: 10px;">Упс.. Повторка. Повезёт в следующий раз</p>' : ''}
                </div>
            `);
            setTimeout(() => {
                if (flagsGameActive) nextFlag();
            }, 2000);
        }
    }

    function initGameSystem() {
        // Инициализация звуков и музыки
        initSounds();
        initMusic();
        
        if (!localStorage.getItem('playerCards')) {
            window.CARDS = [];
            localStorage.setItem('playerCards', JSON.stringify(window.CARDS));
        } else {
            try {
                window.CARDS = JSON.parse(localStorage.getItem('playerCards')) || [];
            } catch (e) {
                window.CARDS = [];
            }
        }

        function openGame(gameType) {
            playSound(window.clickSound);
            const gameContent = $('gameContent');
            const gameModal = $('game-modal');
            if (!gameContent || !gameModal) return;
            gameContent.innerHTML = '<div style="display: flex; align-items: center; justify-content: center; height: 100%; color: var(--text-primary);">Загрузка...</div>';
            gameModal.classList.remove('hidden');
            
            // Запускаем фоновую музыку
            startGameMusic();
            
            setTimeout(() => {
                switch (gameType) {
                    case 'slots': loadSlotGame(); break;
                    case 'wheel': loadWheelGame(); break;
                    case 'flags': loadFlagsGame(); break;
                }
            }, 100);
        }

        function closeGame() {
            playSound(window.clickSound);
            stopGameMusic();
            const gameModal = $('game-modal');
            if (gameModal) gameModal.classList.add('hidden');
        }

        function attachGameEvents() {
            document.querySelectorAll('.game-card').forEach(card => {
                card.addEventListener('click', () => {
                    const gameType = card.dataset.game;
                    openGame(gameType);
                });
            });

            const closeGameBtn = $('closeGame');
            if (closeGameBtn) closeGameBtn.addEventListener('click', closeGame);

            const gameModal = $('game-modal');
            if (gameModal) {
                gameModal.addEventListener('click', (e) => {
                    if (e.target === gameModal) closeGame();
                });
            }

            document.addEventListener('keydown', (e) => {
                if (e.key === 'Escape') closeGame();
            });
        }

        return { openGame, closeGame, attachGameEvents };
    }

    document.addEventListener('DOMContentLoaded', () => {
        const gameSystem = initGameSystem();
        gameSystem.attachGameEvents();
        window.openGame = gameSystem.openGame;
        window.closeGame = gameSystem.closeGame;
        window.startGameMusic = startGameMusic;
        window.stopGameMusic = stopGameMusic;
        window.playSound = playSound;
    });
})();