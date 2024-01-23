// Greetings
var myDate = new Date();
var hrs = myDate.getHours();
var greet;

if (hrs < 11) greet = 'Selamat pagi 🌄';
else if (hrs >= 11 && hrs <= 14) greet = 'Selamat siang 🌞';
else if (hrs >= 15 && hrs <= 17) greet = 'Selamat sore 🌇';
else if (hrs >= 18 && hrs <= 24) greet = 'Selamat malam 🌙';
document.getElementById('greetings').innerHTML = '<b>' + greet + '</b>';

// Typed
new Typed('#typed', {
  strings: ['Mahasiswa 🎓', 'Freelancer 🪙', 'Graphic Designer 💥', 'Junior Web Designer 🎨'],
  typeSpeed: 100,
  delaySpeed: 100,
  loop: true,
});
new Typed('#bachelor', {
  strings: ['Mahasiswa Teknik Informatika 💻', 'Informatics Engineering Student 💻'],
  typeSpeed: 90,
  delaySpeed: 50,
  loop: true,
});

// Hamburger Menu
const hamburger = document.querySelector('#hamburger');
const navMenu = document.querySelector('#nav-menu');

hamburger.addEventListener('click', function () {
  hamburger.classList.toggle('hamburger-active');
  navMenu.classList.toggle('hidden');
});

// Navbar Fixed
window.onscroll = function () {
  const header = document.querySelector('header');
  const fixedNav = header.offsetTop;
  const toTop = document.querySelector('#to-top');

  if (window.pageYOffset > fixedNav) {
    header.classList.add('navbar-fixed');
    toTop.classList.remove('hidden');
    toTop.classList.add('flex');
  } else {
    header.classList.remove('navbar-fixed');
    toTop.classList.remove('flex');
    toTop.classList.add('hidden');
  }
};

// Automatically Change Year
const year = document.getElementById('year');
year.textContent = new Date().getFullYear();

// Dark Mode Toggle
if (localStorage.getItem('color-theme') === 'dark' || (!('color-theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
  document.documentElement.classList.add('dark');
} else {
  document.documentElement.classList.remove('dark');
}

var themeToggleDarkIcon = document.getElementById('theme-toggle-dark-icon');
var themeToggleLightIcon = document.getElementById('theme-toggle-light-icon');

if (localStorage.getItem('color-theme') === 'dark' || (!('color-theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
  themeToggleLightIcon.classList.remove('hidden');
} else {
  themeToggleDarkIcon.classList.remove('hidden');
}

var themeToggleBtn = document.getElementById('theme-toggle');

themeToggleBtn.addEventListener('click', function () {
  themeToggleDarkIcon.classList.toggle('hidden');
  themeToggleLightIcon.classList.toggle('hidden');

  if (localStorage.getItem('color-theme')) {
    if (localStorage.getItem('color-theme') === 'light') {
      document.documentElement.classList.add('dark');
      localStorage.setItem('color-theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('color-theme', 'light');
    }
  } else {
    if (document.documentElement.classList.contains('dark')) {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('color-theme', 'light');
    } else {
      document.documentElement.classList.add('dark');
      localStorage.setItem('color-theme', 'dark');
    }
  }
});

// FAQ
const accordionHeader = document.querySelectorAll('.accordion-header');
accordionHeader.forEach((header) => {
  header.addEventListener('click', function () {
    const accordionContent = header.parentElement.querySelector('.accordion-content');
    let accordionMaxHeight = accordionContent.style.maxHeight;

    if (accordionMaxHeight == '0px' || accordionMaxHeight.length == 0) {
      accordionContent.style.maxHeight = `${accordionContent.scrollHeight + 32}px`;
      header.querySelector('.fas').classList.remove('fa-plus');
      header.querySelector('.fas').classList.add('fa-minus');
    } else {
      accordionContent.style.maxHeight = `0px`;
      header.querySelector('.fas').classList.add('fa-plus');
      header.querySelector('.fas').classList.remove('fa-minus');
    }
  });
});

// Portfolio Filter
window.addEventListener('DOMContentLoaded', function () {
  const filtered = document.querySelectorAll('.group a');
  const buttons = document.querySelectorAll('.filter-button');
  const toggleContent = () => {
    let filterSelector = [...buttons] // the buttons
      .filter((btn) => btn.matches('.inactive')) // that are grey
      .map((btn) => btn.dataset.filter); // get their data-filter
    console.log(filterSelector);

    filtered.forEach((anc) => {
      // Hide the links whose classes are are in the filterSelector
      const hide = filterSelector.length > 0 && filterSelector.some((filter) => [...anc.classList].includes(filter));
      anc.style.display = hide ? 'none' : 'inline-block';
    });
  };
  const filter = (e) => {
    const tgt = e.target; // what was clicked?
    if (tgt.matches('.filter-button')) {
      // a button?
      tgt.classList.toggle('inactive'); // toggle it
      toggleContent(); // toggle the links
    } else if (tgt.closest('.toggleall')) {
      // or if (!tgt.matches("toggleButton")) return if you give the buttons a class
      const show = tgt.matches('.toggleall-show'); // show all?
      const hide = tgt.matches('.toggleall-hide'); // hide all?
      if (!show && !hide) return; // something else was clicked
      buttons.forEach((btn) => btn.classList[show ? 'remove' : 'add']('inactive')); // if show, remove all inactive if not, addd all inacctive
      toggleContent(); // toggle the links
    }
  };

  document.addEventListener('click', filter);
});
