document.addEventListener('DOMContentLoaded', () => {
  const faqContainer = document.querySelector('.faq-content');

  faqContainer.addEventListener('click', (e) => {
    const groupHeader = e.target.closest('.faq-group-header');

    if (!groupHeader) return;

    const group = groupHeader.parentElement;
    const groupBody = group.querySelector('.faq-group-body');
    const icon = groupHeader.querySelector('i');

    // Toggle icon
    icon.classList.toggle('fa-plus');
    icon.classList.toggle('fa-minus');

    // Toggle visibility of body with height transition
    if (groupBody.style.height && groupBody.style.height !== '0px') {
      groupBody.style.height = '0px';
      groupBody.addEventListener('transitionend', () => {
        if (groupBody.style.height === '0px') {
          groupBody.style.display = 'none';
        }
      }, { once: true });
    } else {
      groupBody.style.display = 'block';
      const height = groupBody.scrollHeight + 'px';
      groupBody.style.height = height;
    }

    // Close other open FAQ bodies
    const otherGroups = faqContainer.querySelectorAll('.faq-group');

    otherGroups.forEach((otherGroup) => {
      if (otherGroup !== group) {
        const otherGroupBody = otherGroup.querySelector('.faq-group-body');
        const otherIcon = otherGroup.querySelector('.faq-group-header i');

        otherGroupBody.style.height = '0px';
        otherGroupBody.addEventListener('transitionend', () => {
          if (otherGroupBody.style.height === '0px') {
            otherGroupBody.style.display = 'none';
          }
        }, { once: true });
        otherIcon.classList.remove('fa-minus');
        otherIcon.classList.add('fa-plus');
      }
    });
  });
});

  
  // Mobile Menu
  document.addEventListener('DOMContentLoaded', () => {
    const hamburgerButton = document.querySelector('.hamburger-button');
    const mobileMenu = document.querySelector('.mobile-menu');
  
    hamburgerButton.addEventListener('click', () =>
      mobileMenu.classList.toggle('active')
    );
  });

  
  const getStartedBtn = document.getElementById('get-started-btn');
  const pricingSection = document.querySelector('section.pricing');
  
  getStartedBtn.addEventListener('click', () => {
    scrollTo(pricingSection.offsetTop, 500);
  });
  
  function scrollTo(y, duration) {
    var start = performance.now();
    var from = window.scrollY;
    var dy = y - from;
  
    function animate() {
      var p = Math.min(1, (performance.now() - start) / duration);
      window.scroll(0, from + dy * p);
      if (p < 1) {
        requestAnimationFrame(animate);
      }
    }
    animate(); 
  }
  



$(document).ready(function() {
  // Handle tab switching
  $('.faq-menu li').click(function() {
    var filter = $(this).data('filter');
    $('.faq-menu li').removeClass('active');
    $(this).addClass('active');
    $('.faq-group').removeClass('active');
    if (filter === 'all') {
      $('.faq-group').addClass('active');
    } else {
      $('.faq-group[data-category*="' + filter + '"]').addClass('active');
    }
  });

  // Handle FAQ group toggle
  $('.faq-group-header').click(function() {
    var icon = $(this).find('i');
    var body = $(this).next('.faq-group-body');
    icon.toggleClass('fa-plus fa-minus');
    body.slideToggle(300);
  });
});






document.addEventListener('DOMContentLoaded', () => {
  // FAQ Accordion
  const faqContainer = document.querySelector('.faq-content');

  faqContainer.addEventListener('click', (e) => {
    const groupHeader = e.target.closest('.faq-group-header');

    if (!groupHeader) return;

    const group = groupHeader.parentElement;
    const groupBody = group.querySelector('.faq-group-body');
    const icon = groupHeader.querySelector('i');

    // Toggle icon
    icon.classList.toggle('fa-plus');
    icon.classList.toggle('fa-minus');

    // Toggle visibility of body
    groupBody.classList.toggle('open');

    // Close other open FAQ bodies
    const otherGroups = faqContainer.querySelectorAll('.faq-group');

    otherGroups.forEach((otherGroup) => {
      if (otherGroup !== group) {
        const otherGroupBody = otherGroup.querySelector('.faq-group-body');
        const otherIcon = otherGroup.querySelector('.faq-group-header i');

        otherGroupBody.classList.remove('open');
        otherIcon.classList.remove('fa-minus');
        otherIcon.classList.add('fa-plus');
      }
    });
  });

  // FAQ Menu
  const faqMenu = document.querySelector('.faq-menu');
  const faqGroups = document.querySelectorAll('.faq-group');
  const faqMenuItems = faqMenu.querySelectorAll('li');

  faqMenuItems.forEach((menuItem) => {
    menuItem.addEventListener('click', () => {
      // Remove active class from all menu items
      faqMenuItems.forEach(item => item.classList.remove('active'));
      // Add active class to the clicked menu item
      menuItem.classList.add('active');

      // Filter and show/hide FAQ groups based on menu item
      faqGroups.forEach((group) => {
        if (menuItem.dataset.category === 'all' || group.dataset.category === menuItem.dataset.category) {
          group.style.display = 'block';
        } else {
          group.style.display = 'none';
        }
      });
    });
  });

  // Mobile Menu
  const hamburgerButton = document.querySelector('.hamburger-button');
  const mobileMenu = document.querySelector('.mobile-menu');

  hamburgerButton.addEventListener('click', () =>
    mobileMenu.classList.toggle('active')
  );

  // Get Started Button
  const getStartedBtn = document.getElementById('get-started-btn');
  const pricingSection = document.querySelector('section.pricing');

  getStartedBtn.addEventListener('click', () => {
    scrollTo(pricingSection.offsetTop, 500);
  });

  function scrollTo(y, duration) {
    var start = performance.now();
    var from = window.scrollY;
    var dy = y - from;

    function animate() {
      var p = Math.min(1, (performance.now() - start) / duration);
      window.scroll(0, from + dy * p);
      if (p < 1) {
        requestAnimationFrame(animate);
      }
    }
    animate();
  }
});






/* document.addEventListener('DOMContentLoaded', () => {
  const faqContainer = document.querySelector('.faq-content');
  const filterButtons = document.querySelectorAll('.faq-menu li');

  filterButtons.forEach(button => {
    button.addEventListener('click', (e) => {
      filterButtons.forEach(btn => btn.classList.remove('active'));
      button.classList.add('active');

      const category = button.getAttribute('data-category');
      const faqGroups = faqContainer.querySelectorAll('.faq-group');
      faqGroups.forEach(group => {
        if (category === 'all' || group.classList.contains(category)) {
          group.style.display = '';
        } else {
          group.style.display = 'none';
        }
      });
    });
  });
});
 */


document.addEventListener('DOMContentLoaded', () => {
  const faqContainer = document.querySelector('.faq-content');
  const filterButtons = document.querySelectorAll('.faq-menu li');

  filterButtons.forEach(button => {
    button.addEventListener('click', () => {
      const category = button.getAttribute('data-category');
      const faqGroups = faqContainer.querySelectorAll('.faq-group');

      faqGroups.forEach(group => {
        if (category === 'all' || group.classList.contains(category)) {
          group.style.display = 'block';  // Display the FAQ group
        } else {
          group.style.display = 'none';   // Hide the FAQ group
        }
      });

      // Optional: Toggle active class for styling purposes
      filterButtons.forEach(btn => btn.classList.remove('active'));
      button.classList.add('active');
    });
  });
});

/* 
// JavaScript to trigger the OTP and form popups

// Event listener for the "Get Started" button on the landing page
document.querySelector('.btn.btn-primary.btn-block').addEventListener('click', function(event) {
  event.preventDefault(); // Prevent the default anchor behavior
  window.open('auth0login.html', 'OTPVerification', 'width=600,height=400'); // Open the OTP popup
});

// JavaScript for the OTP popup (auth0login.html)
document.getElementById('moveAhead').addEventListener('click', function() {
  window.close(); // Close the OTP popup
  window.open('Untitled-1.html', 'FormSubmission', 'width=600,height=400'); // Open the form submission popup
});

// JavaScript for the Form Submission popup (Untitled-1.html)
document.getElementById('submit').addEventListener('click', function() {
  // Assuming the form submission is successful
  window.opener = null;
  window.close(); // Close the current form submission popup
});
 */



// this is for the popup of image










/* this is for the dark mode  */
const popupContainer = document.querySelector('.popup-container');
 getStartedBtn = document.querySelector('.btn-primary');

getStartedBtn.addEventListener('click', () => {
  console.log('Button clicked!');
  popupContainer.style.display = 'block';
  console.log('Popup display property:', popupContainer.style.display);
});

document.addEventListener('click', (e) => {
  if (e.target.classList.contains('close-btn')) {
    console.log('Close button clicked!');
    popupContainer.style.display = 'none';
    console.log('Popup display property:', popupContainer.style.display);
  }
});