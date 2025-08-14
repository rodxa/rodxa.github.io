function loadPage(page) {
  fetch(page)
    .then(response => response.text())
    .then(html => {
      document.getElementById('content').innerHTML = html;
  });
}

function setActive(element) {
  const links = document.querySelectorAll('nav ul li a');
  links.forEach(link => link.classList.remove('active'));
  element.classList.add('active');
}

// default page
loadPage('home.html');

document.addEventListener('DOMContentLoaded', function() {
  const menuToggle = document.querySelector('.menu-toggle');
  const navUl = document.querySelector('nav ul');
  const overlay = document.querySelector('.menu-overlay');
  const body = document.body;

  function closeMenu() {
    navUl.classList.remove('open');
    overlay.classList.remove('active');
    body.classList.remove('menu-open');
  }

  menuToggle.addEventListener('click', () => {
    const isOpen = navUl.classList.toggle('open');
    overlay.classList.toggle('active', isOpen);
    body.classList.toggle('menu-open', isOpen);
  });

  overlay.addEventListener('click', closeMenu);

  navUl.addEventListener('click', function(e) {
    if (e.target.tagName === 'A') {
      closeMenu();
    }
  });
});