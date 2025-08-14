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