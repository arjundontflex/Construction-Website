const filterButtons = document.querySelectorAll('.filter-btn');

const galleryItems = document.querySelectorAll('.gallery-item');

filterButtons.forEach(button => {

  button.addEventListener('click', () => {

    // REMOVE ACTIVE CLASS

    document.querySelector('.filter-btn.active')
      .classList.remove('active');

    // ADD ACTIVE CLASS

    button.classList.add('active');

    // GET FILTER VALUE

    const filterValue = button.getAttribute('data-filter');

    // FILTER PROJECTS

    galleryItems.forEach(item => {

      if(filterValue === 'all') {

        item.style.display = 'block';

      }

      else if(item.classList.contains(filterValue)) {

        item.style.display = 'block';

      }

      else {

        item.style.display = 'none';
      }

    });

  });

});