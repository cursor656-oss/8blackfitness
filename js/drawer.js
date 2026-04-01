// Mobile Drawer
(function () {
  var menuBtn = document.getElementById('menuBtn');
  var drawer  = document.getElementById('drawer');
  var drawerClose = document.getElementById('drawerClose');

  if (menuBtn && drawer) {
    menuBtn.addEventListener('click', function () {
      drawer.classList.add('open');
    });
  }

  if (drawerClose && drawer) {
    drawerClose.addEventListener('click', function () {
      drawer.classList.remove('open');
    });
  }

  // Schließen beim Klick auf Links im Drawer
  if (drawer) {
    drawer.querySelectorAll('.drawer-link').forEach(function (link) {
      link.addEventListener('click', function () {
        drawer.classList.remove('open');
      });
    });
  }
})();
