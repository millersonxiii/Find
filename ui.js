(() => {
  function closeCardModal() {
    if (!window.cardModal) return;
    window.cardModal.classList.add('hidden');
  }

  function openSettings() {
    const existing = document.getElementById('settings-panel');
    if (existing) {
      existing.classList.toggle('hidden');
      return;
    }

    const panel = document.createElement('div');
    panel.id = 'settings-panel';
    panel.style.cssText = `
      position: fixed;
      right: 20px;
      top: 80px;
      width: 320px;
      z-index: 9999;
      border-radius: 12px;
      background: var(--bg-card);
      padding: 20px;
      box-shadow: var(--shadow-dark);
      border: 1px solid var(--border-color);
      color: var(--text-primary);
    `;

    panel.innerHTML = `
      <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 16px;">
        <strong>Настройки</strong>
        <button id="closeSettings" class="close-btn">✕</button>
      </div>
      <div style="display: flex; flex-direction: column; gap: 16px;">
        <div>
          <label style="display: block; margin-bottom: 8px; font-weight: 600;">Громкость музыки</label>
          <input id="musicRange" type="range" min="0" max="1" step="0.01" value="${window.bgAudio ? window.bgAudio.volume : 0.12}"
                 style="width: 100%;">
        </div>
        <div>
          <label style="display: block; margin-bottom: 8px; font-weight: 600;">Громкость эффектов</label>
          <input id="sfxRange" type="range" min="0" max="1" step="0.01" value="${window.wheelSound ? window.wheelSound.volume : 1}"
                 style="width: 100%;">
        </div>
        <button id="installPWA" class="install-btn">
          Установить приложение
        </button>
        <button id="resetProgress" class="game-action-btn" style="background: var(--bg-secondary); color: var(--text-primary);">
          Сбросить прогресс
        </button>
      </div>
    `;

    document.body.appendChild(panel);

    document.getElementById('closeSettings').addEventListener('click', () => {
      window.playSound(window.clickSound);
      panel.remove();
    });

    document.getElementById('installPWA').addEventListener('click', () => {
      window.playSound(window.clickSound);
      if (/chrome|chromium/i.test(navigator.userAgent)) {
        if (window.deferredPrompt) {
          window.deferredPrompt.prompt();
          window.deferredPrompt.userChoice.then((choiceResult) => {
            if (choiceResult.outcome === 'accepted') {
              console.log('PWA установлено');
            }
            window.deferredPrompt = null;
          });
        } else {
          alert('Приложение можно установить только в Google Chrome. Нажмите на меню браузера и выберите "Установить приложение".');
        }
      } else {
        alert('Эта функция работает только в Google Chrome.');
      }
    });

    document.getElementById('resetProgress').addEventListener('click', () => {
      if (confirm('Вы уверены? Весь прогресс будет удален!')) {
        window.CARDS = [];
        window.savePlayerCards();
        window.flagsRecord = 0;
        localStorage.setItem('flagsRecord', '0');
        window.renderCards();
        panel.remove();

        window.showGameModal(`
          <div style="text-align: center; padding: 20px;">
            <h3 style="color: var(--text-primary); margin-bottom: 16px;">ПРОГРЕСС СБРОШЕН</h3>
            <p style="color: var(--text-secondary);">Начните собирать коллекцию заново!</p>
          </div>
        `);
      }
    });

    const musicRange = document.getElementById('musicRange');
    const sfxRange = document.getElementById('sfxRange');

    musicRange.addEventListener('input', (e) => {
      if (window.bgAudio) {
        window.bgAudio.volume = Number(e.target.value);
        localStorage.setItem('musicVol', String(window.bgAudio.volume));
      }
    });

    sfxRange.addEventListener('input', (e) => {
      const v = Number(e.target.value);
      if (window.wheelSound) window.wheelSound.volume = v;
      if (window.slotSound) window.slotSound.volume = v;
      if (window.clickSound) window.clickSound.volume = v;
      localStorage.setItem('sfxVol', String(v));
    });
  }

  function showInventory() {
    if (!window.invPanel) return;
    window.invPanel.classList.remove('hidden');
    window.renderCards();
  }

  function hideInventory() {
    if (!window.invPanel) return;
    window.invPanel.classList.add('hidden');
    if (window.filterPanel) window.filterPanel.classList.add('hidden');
  }

  function openGame(gameType) {
    window.playSound(window.clickSound);
    if (!window.gameContent) return;
    window.gameContent.innerHTML = '';

    switch (gameType) {
      case 'slots':
        window.loadSlotGame();
        break;
      case 'wheel':
        window.loadWheelGame();
        break;
      case 'flags':
        window.loadFlagsGame();
        break;
    }

    window.startGameMusic();
    if (window.gameModal) window.gameModal.classList.remove('hidden');
  }

  function closeGame() {
    window.playSound(window.clickSound);
    window.stopGameMusic();
    if (window.gameModal) window.gameModal.classList.add('hidden');
  }

  function attachUI() {
    document.querySelectorAll('.game-card').forEach(card => {
      card.addEventListener('click', () => {
        const game = card.dataset.game;
        openGame(game);
      });
    });

    if (window.invBtn) {
      window.invBtn.addEventListener('click', () => {
        window.playSound(window.clickSound);
        showInventory();
      });
    }

    if (window.closeInvBtn) {
      window.closeInvBtn.addEventListener('click', () => {
        window.playSound(window.clickSound);
        hideInventory();
      });
    }

    if (window.settingsBtn) {
      window.settingsBtn.addEventListener('click', () => {
        window.playSound(window.clickSound);
        openSettings();
      });
    }

    if (window.closeGameBtn) {
      window.closeGameBtn.addEventListener('click', () => {
        closeGame();
      });
    }

    if (window.closeCardBtn) {
      window.closeCardBtn.addEventListener('click', () => {
        window.playSound(window.clickSound);
        closeCardModal();
      });
    }

    if (window.filterBtn) {
      window.filterBtn.addEventListener('click', () => {
        window.playSound(window.clickSound);
        if (window.filterPanel) window.filterPanel.classList.toggle('hidden');
      });
    }

    if (window.sortBy) {
      window.sortBy.addEventListener('change', () => {
        window.playSound(window.clickSound);
        window.renderCards();
      });
    }

    if (window.showAllCards) {
      window.showAllCards.addEventListener('change', () => {
        window.playSound(window.clickSound);
        window.renderCards();
      });
    }

    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') {
        closeGame();
        closeCardModal();
        hideInventory();

        document.querySelectorAll('.modal-overlay').forEach(modal => modal.remove());
      }
    });

    document.addEventListener('click', (e) => {
      if (e.target === window.gameModal) closeGame();
      if (e.target === window.cardModal) closeCardModal();
      if (e.target === window.invPanel) hideInventory();
    });
  }

  window.addEventListener('beforeinstallprompt', (e) => {
    e.preventDefault();
    window.deferredPrompt = e;
  });

  function init() {
    window.initSounds && window.initSounds();
    window.initAvailableMusic && window.initAvailableMusic();
    window.renderCards && window.renderCards();
    attachUI();

    const mv = localStorage.getItem('musicVol');
    if (mv !== null && window.bgAudio) window.bgAudio.volume = Number(mv);

    const sv = localStorage.getItem('sfxVol');
    if (sv !== null) {
      const v = Number(sv);
      if (window.wheelSound) window.wheelSound.volume = v;
      if (window.slotSound) window.slotSound.volume = v;
      if (window.clickSound) window.clickSound.volume = v;
    }

    document.addEventListener('click', () => {
      if (window.bgAudio && !window.bgAudio.dataset.started) {
        window.startGameMusic();
        window.bgAudio.dataset.started = '1';
      }
    }, { once: true });
  }

  init();
  window.openGame = openGame;
  window.closeGame = closeGame;
  window.showInventory = showInventory;
  window.hideInventory = hideInventory;
  window.openSettings = openSettings;
  window.closeCardModal = closeCardModal;
})();