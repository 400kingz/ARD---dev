// Mobile Nav Open and Close Settings
const toggler = document.querySelector('.toggler');
const mobileMenu = document.querySelector('.mobile-menu');

function showMobileMenu() {
  mobileMenu.style.marginRight = '0';
  mobileMenu.style.opacity = '1';
}

function hideMobileMenu() {
  mobileMenu.style.marginRight = '-250px';
  toggler.checked = false;
}

// Desktop Nav Shrink on Scroll
const logo = document.querySelector('.logo-img') || document.querySelector('.logo-img-dark');
const nav = document.querySelector('nav');

function scrollFunction() {
  if (document.body.scrollTop > 125 || document.documentElement.scrollTop > 125) {
    logo.classList.add('logo-scrolled');
    nav.classList.add('desktop-nav-scrolled');
  } else {
    logo.classList.remove('logo-scrolled');
    nav.classList.remove('desktop-nav-scrolled');
  }
}

window.onscroll = function () {
  scrollFunction();
};

// Fade In and Slide In Elements upon Scrolling into View
const faders = document.querySelectorAll('.fade-in');
const sliders = document.querySelectorAll('.slide-in');
const zoomers = document.querySelectorAll('.zoom-in');

const appearOptions = {
  threshold: 0,
  rootMargin: '0px 0px -150px 0px',
};

const appearOnScroll = new IntersectionObserver(function (entries, appearOnScroll) {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) {
      return;
    } else {
      entry.target.classList.add('appear');
      appearOnScroll.unobserve(entry.target);
    }
  });
}, appearOptions);

faders.forEach((fader) => {
  appearOnScroll.observe(fader);
});

sliders.forEach((slider) => {
  appearOnScroll.observe(slider);
});

zoomers.forEach((zoomer) => {
  appearOnScroll.observe(zoomer);
});
