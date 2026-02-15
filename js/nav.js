/**
 * Inserts a top navigation bar with a home button into any tracker page.
 *
 * Usage: include this script in a tracker HTML file. It will inject the nav
 * bar at the top of <body> automatically on DOMContentLoaded.
 */
document.addEventListener('DOMContentLoaded', function () {
  var nav = document.createElement('nav');
  nav.className = 'tracker-nav';

  var homeLink = document.createElement('a');
  homeLink.href = '../index.html';
  homeLink.className = 'home-button';
  homeLink.setAttribute('aria-label', 'Back to Main Menu');
  homeLink.innerHTML = '&#8592; Main Menu';

  var title = document.querySelector('h1');
  var pageTitle = document.createElement('span');
  pageTitle.className = 'nav-title';
  pageTitle.textContent = title ? title.textContent : 'Tracker';

  nav.appendChild(homeLink);
  nav.appendChild(pageTitle);

  document.body.insertBefore(nav, document.body.firstChild);
});
