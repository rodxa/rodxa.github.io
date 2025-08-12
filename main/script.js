function loadPage(page) {
  fetch(page)
    .then(response => response.text())
    .then(html => {
      document.getElementById('content').innerHTML = html;
    });
}
// Load default page on start
loadPage('home.html');