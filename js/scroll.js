// Dringende Verarbeitung - ausführen VOR dem Laden des Inhalts
if ('scrollRestoration' in window.history) {
  window.history.scrollRestoration = 'manual';
}

// Scroll-Position beim Laden löschen
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', function() {
    window.scrollTo(0, 0);
  });
} else {
  window.scrollTo(0, 0);
}

// Verhindern der Wiederherstellung des Scrolls durch den Browser
window.addEventListener('beforeunload', function() {
  sessionStorage.setItem('pageScrollPosition', 0);
});
