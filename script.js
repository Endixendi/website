(function() {
  // ===========================
  // 1️⃣ REDIRECT HASH
  // Przekierowanie użytkownika, jeśli w URL pojawia się #social, #media lub /social
  // ===========================
  function maybeRedirect() {
    if (
      location.hash === '#social' ||
      location.hash === '#media' ||
      location.pathname.endsWith('/social')
    ) {
      window.location.replace('https://linktr.ee/endixendi');
    }
  }
  maybeRedirect();
  window.addEventListener('hashchange', maybeRedirect);

  // ===========================
  // 2️⃣ PRZYCISK DONATE
  // Otwiera link do StreamElements w nowej karcie
  // ===========================
  const donateBtn = document.getElementById('donate-btn');
  if (donateBtn) {
    donateBtn.addEventListener('click', () => {
      window.open('https://streamelements.com/endixendi/tip', '_blank');
    });
  }

  // ===========================
  // 3️⃣ SMOOTH SCROLL
  // Płynne przewijanie dla linków wewnętrznych
  // ===========================
  document.querySelectorAll('[data-scroll], a[href^="#"]').forEach(el => {
    el.addEventListener('click', e => {
      const targetId = el.getAttribute('data-scroll') || el.getAttribute('href');
      if (targetId && targetId.length > 1) {
        const target = document.querySelector(targetId);
        if (target) {
          e.preventDefault();
          target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }
    });
  });

  // ===========================
  // 4️⃣ TOGGLE MENU (MOBILE)
  // Pokazuje lub ukrywa menu na urządzeniach mobilnych
  // ===========================
  const menuToggle = document.getElementById('menu-toggle');
  const mainNav = document.getElementById('main-nav');

  if (menuToggle && mainNav) {
    menuToggle.addEventListener('click', () => {
      mainNav.style.display = mainNav.style.display === 'flex' ? 'none' : 'flex';
    });
  }

  // ===========================
  // 5️⃣ ZAMYKANIE MENU PO KLIKU NA LINK (MOBILE)
  // ===========================
  document.querySelectorAll('#main-nav a').forEach(link => {
    link.addEventListener('click', () => {
      if (window.innerWidth <= 900) {
        mainNav.style.display = 'none';
      }
    });
  });
})();
