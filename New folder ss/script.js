// Donation form handler
const donateForm = document.getElementById('donateForm');
if (donateForm) {
  donateForm.addEventListener('submit', e => {
    e.preventDefault();
    alert('🎉 Thank you for your generous donation!');
    donateForm.reset();
  });
}

// Contact form handler
const contactForm = document.getElementById('contactForm');
if (contactForm) {
  contactForm.addEventListener('submit', e => {
    e.preventDefault();
    alert('✅ Message sent! We’ll get back to you soon.');
    contactForm.reset();
  });
}
