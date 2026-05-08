const contactForm = document.getElementById('contactForm');

const successMessage = document.getElementById('successMessage');

contactForm.addEventListener('submit', function(event) {

  event.preventDefault();

  successMessage.style.display = 'block';

  contactForm.reset();

  setTimeout(() => {

    successMessage.style.display = 'none';

  }, 3000);

});