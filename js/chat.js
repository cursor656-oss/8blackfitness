// Chat Toggle Panel
(function () {
  var toggle = document.getElementById('chatToggle');
  var panel  = document.getElementById('chatPanel');
  var close  = document.getElementById('chatClose');
  var sendBtn = document.getElementById('sendBtn');
  var input   = document.getElementById('chatInput');
  var body    = document.getElementById('chatBody');

  if (toggle && panel) {
    toggle.addEventListener('click', function () {
      panel.classList.toggle('active');
      toggle.classList.toggle('shifted');
    });
  }

  if (close && panel) {
    close.addEventListener('click', function () {
      panel.classList.remove('active');
      if (toggle) toggle.classList.remove('shifted');
    });
  }

  document.addEventListener('click', function (e) {
    if (panel && toggle && !panel.contains(e.target) && !toggle.contains(e.target)) {
      panel.classList.remove('active');
      toggle.classList.remove('shifted');
    }
  });

  if (sendBtn && input) {
    sendBtn.addEventListener('click', sendMessage);
    input.addEventListener('keypress', function (e) {
      if (e.key === 'Enter') sendMessage();
    });
  }

  function sendMessage() {
    if (!input) return;
    var text = input.value.trim();
    if (!text) return;
    var msg = document.createElement('div');
    msg.className = 'message user';
    msg.textContent = text;
    if (body) {
      body.appendChild(msg);
      body.scrollTop = body.scrollHeight;
    }
    input.value = '';
  }
})();

// Chat Bot Logic
(function() {
  var responses = [
    { keywords: ['hallo', 'hi', 'hey', 'guten tag', 'moin', 'servus'],
      response: 'Hallo! 👋 Willkommen bei 8BLACKFITNESS! Ich bin dein virtueller Berater. Wie kann ich dir helfen? Frag mich nach Mitgliedschaften, Kursen, Preisen oder Probetraining!' },
    { keywords: ['mitgliedschaft', 'abo', 'tarif', 'beitrag'],
      response: '🏷️ Unsere Mitgliedschaften:\n\n• **Basic** — 29,90 €/Monat\n  Gerätetraining, Mo–Fr 9–17 Uhr\n\n• **Premium** — 49,90 €/Monat\n  Alle Geräte + Kurse, 24/7 Zugang\n\n• **VIP** — 79,90 €/Monat\n  Alles inkl. + Personal Training 2x/Monat + Sauna\n\nAlle Tarife ohne Mindestlaufzeit!' },
    { keywords: ['kurs', 'kurse', 'yoga', 'spinning', 'hiit', 'pilates', 'zumba'],
      response: '🧘 Unser Kursangebot:\n\n• **Yoga** — Mo, Mi, Fr 7:00 & 18:00\n• **HIIT** — Di, Do 17:30 & 19:00\n• **Spinning** — Mo–Sa 8:00 & 18:30\n• **Pilates** — Mi, Fr 10:00\n• **Zumba** — Sa 11:00\n• **CrossFit** — Di, Do, Sa 7:00\n\nAlle Kurse inklusive ab Premium-Tarif!' },
    { keywords: ['preis', 'kosten', 'günstig', 'teuer', 'geld', 'euro', 'zahlen'],
      response: '💰 Unsere Preise im Überblick:\n\n• **Basic** — 29,90 €/Monat\n• **Premium** — 49,90 €/Monat\n• **VIP** — 79,90 €/Monat\n• **10er-Karte** — 99 €\n• **Tagespass** — 15 €\n\nStudentenrabatt: 20% auf alle Tarife! 🎓' },
    { keywords: ['adresse', 'wo', 'standort', 'anfahrt', 'finden'],
      response: '📍 Unser Standort:\n\n**Torstraße 123, 10119  -Mitte**\n(direkt am U-Bhf. Rosenthaler Platz)\n\n⏰ Öffnungszeiten:\n• Mo–Fr: 6:00 — 23:00\n• Sa–So: 8:00 — 21:00\n• Feiertage: 9:00 — 18:00\n\n🅿️ Kostenlose Parkplätze vorhanden!' },
    { keywords: ['telefon', 'anrufen', 'kontakt', 'email', 'mail', 'erreichen'],
      response: '📞 So erreichst du uns:\n\n• **Telefon:** +49 30 1234 5678\n• **WhatsApp:** 015205924556\n• **E-Mail:** info@8BLACKFITNESS - .de\n• **Instagram:** @8BLACKFITNESS . \n\nWir sind 7 Tage die Woche erreichbar!' },
    { keywords: ['probe', 'probetraining', 'testen', 'ausprobieren', 'schnuppern'],
      response: '🎯 Probetraining:\n\n• **Kostenloses Probetraining** jederzeit möglich!\n• Inkl. Geräteeinweisung (30 Min)\n• Zugang zu allen Geräten & einem Kurs\n• Keine Verpflichtung\n\nEinfach vorbeikommen oder online buchen!\n📞 +49 30 1234 5678' },
    { keywords: ['gerät', 'geräte', 'ausstattung', 'equipment', 'hantel'],
      response: '🏋️ Unsere Ausstattung:\n\n• **Kraftbereich** — Technogym & Life Fitness\n• **Freie Gewichte** — bis 60 kg Kurzhanteln\n• **Cardio** — 40+ Geräte (Laufband, Crosstrainer, Rudern)\n• **Funktional** — TRX, Kettlebells, Battle Ropes\n• **Stretching-Zone** — Foam Roller, Yoga-Matten\n\nAlles auf 1.500 m² Trainingsfläche!' },
    { keywords: ['personal', 'trainer', 'training', 'coach', 'coaching'],
      response: '🏆 Personal Training:\n\n• **Einzeltraining** — 59 €/Stunde\n• **5er-Paket** — 249 € (49,80 €/Std.)\n• **10er-Paket** — 449 € (44,90 €/Std.)\n\nAlle Trainer sind zertifiziert (DVGS/BSA). Erstgespräch & Trainingsplan kostenlos!' },
    { keywords: ['sauna', 'wellness', 'spa', 'entspannung', 'dampfbad'],
      response: '🧖 Wellness-Bereich:\n\n• **Finnische Sauna** — 80–90°C\n• **Dampfbad** — 45°C\n• **Ruheraum** mit Liegen\n• **Kneipp-Becken**\n\nInklusive im VIP-Tarif, sonst 10 €/Besuch.' },
    { keywords: ['abnehmen', 'gewicht', 'diät', 'ernährung', 'essen'],
      response: '🥗 Ernährungsberatung:\n\n• **Erstberatung** — kostenlos für Mitglieder\n• **Ernährungsplan** — 89 € (4 Wochen)\n• **InBody-Analyse** — 19 €\n• **Kombi-Paket** (Plan + 4x PT) — 299 €\n\nUnsere Ernährungsberater helfen dir, dein Ziel zu erreichen!' },
    { keywords: ['danke', 'tschüss', 'bye', 'auf wiedersehen', 'ciao'],
      response: 'Vielen Dank für dein Interesse! 🙏\n\nWir freuen uns auf deinen Besuch bei 8BLACKFITNESS   !\n\n📍 DONAU STRAßE 13,  -Mitte\n📞 +49 30 1234 5678\n\nBleib fit! 💪' }
  ];
  var defaultResponse = '🤔 Das habe ich leider nicht ganz verstanden.\n\nIch kann dir helfen mit:\n• 🏷️ Mitgliedschaften & Preise\n• 🧘 Kurse & Trainingszeiten\n• 🏋️ Geräte & Ausstattung\n• 🏆 Personal Training\n• 📍 Adresse & Öffnungszeiten\n\nVersuch es gerne nochmal!';
  var welcomeMsg = '💪 Willkommen bei 8BLACKFITNESS!\n\nIch bin dein virtueller Berater. Ich helfe dir bei Fragen zu Mitgliedschaften, Kursen, Preisen oder Probetraining.\n\nWie kann ich dir helfen?';

  function getResponse(input) {
    var lower = input.toLowerCase();
    for (var i = 0; i < responses.length; i++) {
      if (responses[i].keywords.some(function(k) { return lower.includes(k); })) return responses[i].response;
    }
    return defaultResponse;
  }
  function formatText(text) {
    return text.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
  }
  function timeStr() {
    return new Date().toLocaleTimeString('de-DE', { hour: '2-digit', minute: '2-digit' });
  }

  var messagesEl = document.getElementById('chatMessages');
  var inputEl    = document.getElementById('chatInput');
  var sendBtnEl  = document.getElementById('sendBtn');
  var isTyping   = false;

  if (!messagesEl || !inputEl || !sendBtnEl) return;

  function addMessage(content, isBot) {
    var el = document.createElement('div');
    el.className = 'msg ' + (isBot ? 'bot' : 'user');
    var lines = content.split('\n').map(function(l) { return '<p style="margin-bottom:4px">' + formatText(l) + '</p>'; }).join('');
    el.innerHTML =
      '<div class="msg-icon">' + (isBot ? '🏋️' : '👤') + '</div>' +
      '<div class="msg-body">' +
        '<div class="name">' + (isBot ? '8BLACKFITNESS  Berater' : 'Du') + '</div>' +
        '<div class="text">' + lines + '</div>' +
        '<div class="time">' + timeStr() + '</div>' +
      '</div>';
    messagesEl.appendChild(el);
    messagesEl.scrollTop = messagesEl.scrollHeight;
  }
  function showTyping() {
    var el = document.createElement('div');
    el.className = 'msg bot';
    el.id = 'typing';
    el.innerHTML =
      '<div class="msg-icon"><div class="typing"><span></span><span></span><span></span></div></div>' +
      '<div class="msg-body"><div class="text" style="color:var(--fg-muted);font-size:13px;">Tippt...</div></div>';
    messagesEl.appendChild(el);
    messagesEl.scrollTop = messagesEl.scrollHeight;
  }
  function removeTyping() {
    var t = document.getElementById('typing');
    if (t) t.remove();
  }

  // Welcome
  addMessage(welcomeMsg, true);

  // Quick actions
  document.querySelectorAll('.quick-btn').forEach(function(btn) {
    btn.addEventListener('click', function() {
      if (!isTyping) sendMessage(btn.dataset.msg);
    });
  });

  inputEl.addEventListener('input', function() {
    sendBtnEl.disabled = !inputEl.value.trim() || isTyping;
    inputEl.style.height = 'auto';
    inputEl.style.height = Math.min(inputEl.scrollHeight, 120) + 'px';
  });
  inputEl.addEventListener('keydown', function(e) {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      if (inputEl.value.trim() && !isTyping) sendMessage(inputEl.value.trim());
    }
  });
  sendBtnEl.addEventListener('click', function() {
    if (inputEl.value.trim() && !isTyping) sendMessage(inputEl.value.trim());
  });

  function sendMessage(text) {
    addMessage(text, false);
    inputEl.value = '';
    inputEl.style.height = 'auto';
    sendBtnEl.disabled = true;
    isTyping = true;
    showTyping();
    setTimeout(function() {
      removeTyping();
      addMessage(getResponse(text), true);
      isTyping = false;
      sendBtnEl.disabled = !inputEl.value.trim();
    }, 800 + Math.random() * 700);
  }
})();
