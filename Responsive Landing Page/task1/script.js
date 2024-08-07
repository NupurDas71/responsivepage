// script.js

document.addEventListener('DOMContentLoaded', function() {
  var navbarLinks = document.querySelectorAll('.navbar a');
  var sections = document.querySelectorAll('section');

  navbarLinks.forEach(function(link) {
      link.addEventListener('mouseover', function() {
          link.style.backgroundColor = 'green';
      });

      link.addEventListener('mouseout', function() {
          link.style.backgroundColor = '';
      });
  });

  sections.forEach(function(section) {
      var welcomeMessage = section.querySelector('#welcome-message');
      var sectionId = section.getAttribute('id');

      switch (sectionId) {
          case 'home':
              welcomeMessage.textContent = "Hello, welcome to homepage!";
              break;
          case 'search':
              welcomeMessage.textContent = "Welcome to the Search page!";
              break;
          case 'contact':
              welcomeMessage.textContent = "Welcome to the Contact page!";
              break;
          case 'login':
              welcomeMessage.textContent = "Welcome to the Login page!";
              break;
          default:
              welcomeMessage.textContent = "";
              break;
      }
  });
});
