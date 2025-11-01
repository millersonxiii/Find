(() => {
  const MUSIC_COUNT = 9;
  const AVATAR_COUNT = 9;
  const TG_LINK = 'https://t.me/Politiki_World';
  const MUSIC_PATH = 'music';
  const SOUNDS_PATH = 'sound';

  const $ = id => document.getElementById(id);

  const bgAudio = $('bg-music');
  const wheelSound = $('wheelSound');
  const slotSound = $('slotSound');
  const clickSound = $('clickSound');
  const invPanel = $('inventory');
  const invBtn = $('inventoryBtn');
  const closeInvBtn = $('closeInv');
  const settingsBtn = $('settingsBtn');
  const gameModal = $('game-modal');
  const cardModal = $('card-modal');
  const closeGameBtn = $('closeGame');
  const closeCardBtn = $('closeCard');
  const gameContent = $('gameContent');
  const cardsGrid = $('cardsGrid');
  const invCount = $('invCount');
  const filterBtn = $('filterBtn');
  const filterPanel = $('filterPanel');
  const sortBy = $('sortBy');
  const showAllCards = $('showAllCards');

  let isWheelSpinning = false;
  let isSlotSpinning = false;
  let flagsGameActive = false;
  let flagsStreak = 0;
  let flagsRecord = parseInt(localStorage.getItem('flagsRecord')) || 0;
  let currentFlag = null;
  let availableMusic = [];

  if (!localStorage.getItem('playerCards')) {
    window.CARDS = [];
    localStorage.setItem('playerCards', JSON.stringify(window.CARDS));
  } else {
    window.CARDS = JSON.parse(localStorage.getItem('playerCards'));
  }

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

  function initAvailableMusic() {
    availableMusic = [];
    for (let i = 1; i <= MUSIC_COUNT; i++) {
      availableMusic.push(i);
    }
  }

  function initSounds() {
    try {
      wheelSound.src = `${SOUNDS_PATH}/wheel_spin.mp3`;
      slotSound.src = `${SOUNDS_PATH}/slotmachine.mp3`;
      clickSound.src = `${SOUNDS_PATH}/clicking.mp3`;

      const sv = localStorage.getItem('sfxVol');
      if (sv !== null) {
        const v = Number(sv);
        wheelSound.volume = v;
        slotSound.volume = v;
        clickSound.volume = v;
      }
    } catch (error) {
      console.log('Ошибка загрузки звуков:', error);
    }
  }

  function playSound(sound) {
    if (!sound) return;
    try {
      sound.currentTime = 0;
      sound.play().catch(()=>{});
    } catch (error) {
      console.log('Ошибка воспроизведения звука');
    }
  }

  function startGameMusic() {
    if (availableMusic.length === 0) initAvailableMusic();

    const randomIndex = Math.floor(Math.random() * availableMusic.length);
    const musicNum = availableMusic[randomIndex];

    bgAudio.src = `${MUSIC_PATH}/fon${musicNum}.mp3`;
    const mv = localStorage.getItem('musicVol');
    bgAudio.volume = mv !== null ? Number(mv) : 0.12;

    bgAudio.play().catch((error) => {
      console.log('Ошибка загрузки музыки:', error);
      availableMusic.splice(randomIndex, 1);
      if (availableMusic.length > 0) {
        startGameMusic();
      }
    });

    bgAudio.onended = () => {
      startGameMusic();
    };
  }

  function stopGameMusic() {
    bgAudio.pause();
    bgAudio.onended = null;
  }

  function getRandomRarity() {
    const rand = Math.random() * 100;
    let cumulative = 0;

    for (const [rarity, chance] of Object.entries(RARITY_CHANCES)) {
      cumulative += chance;
      if (rand <= cumulative) {
        return rarity;
      }
    }
    return 'Обычные';
  }

  function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }

  function showGameModal(html) {
    const modal = document.createElement('div');
    modal.className = 'modal-overlay';
    modal.style.cssText = `
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: var(--bg-modal);
      z-index: 2000;
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 20px;
    `;

    modal.innerHTML = `
      <div style="background: var(--bg-card); border-radius: var(--radius-lg); padding: 24px; max-width: 500px; width: 100%; position: relative;">
        <button class="close-btn" onclick="this.parentElement.parentElement.remove()">✕</button>
        ${html}
      </div>
    `;

    document.body.appendChild(modal);
  }

  window.MUSIC_COUNT = MUSIC_COUNT;
  window.AVATAR_COUNT = AVATAR_COUNT;
  window.TG_LINK = TG_LINK;
  window.MUSIC_PATH = MUSIC_PATH;
  window.SOUNDS_PATH = SOUNDS_PATH;
  window.$ = $;
  window.bgAudio = bgAudio;
  window.wheelSound = wheelSound;
  window.slotSound = slotSound;
  window.clickSound = clickSound;
  window.invPanel = invPanel;
  window.invBtn = invBtn;
  window.closeInvBtn = closeInvBtn;
  window.settingsBtn = settingsBtn;
  window.gameModal = gameModal;
  window.cardModal = cardModal;
  window.closeGameBtn = closeGameBtn;
  window.closeCardBtn = closeCardBtn;
  window.gameContent = gameContent;
  window.cardsGrid = cardsGrid;
  window.invCount = invCount;
  window.filterBtn = filterBtn;
  window.filterPanel = filterPanel;
  window.sortBy = sortBy;
  window.showAllCards = showAllCards;

  window.isWheelSpinning = isWheelSpinning;
  window.isSlotSpinning = isSlotSpinning;
  window.flagsGameActive = flagsGameActive;
  window.flagsStreak = flagsStreak;
  window.flagsRecord = flagsRecord;
  window.currentFlag = currentFlag;
  window.availableMusic = availableMusic;

  window.initAvailableMusic = initAvailableMusic;
  window.initSounds = initSounds;
  window.playSound = playSound;
  window.startGameMusic = startGameMusic;
  window.stopGameMusic = stopGameMusic;
  window.getRandomRarity = getRandomRarity;
  window.shuffleArray = shuffleArray;
  window.showGameModal = showGameModal;
})();
