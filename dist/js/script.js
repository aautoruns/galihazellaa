// Greetings
var myDate = new Date();
var hrs = myDate.getHours();
var greet;

if (hrs < 11) greet = 'Selamat pagi 🌄';
else if (hrs >= 11 && hrs <= 14) greet = 'Selamat siang ☀️';
else if (hrs >= 15 && hrs <= 17) greet = 'Selamat sore 🌅';
else if (hrs >= 18 && hrs <= 24) greet = 'Selamat malam 🌒';
document.getElementById('greetings').innerHTML = '<b>' + greet + '</b>';

// Typed
new Typed('#typed', {
  strings: ['Mahasiswa🎓', 'Art Freelancer🪙', 'Junior Frontend Developer💻', 'Junior Web Designer🤹', 'Junior UI Designer🎨'],
  typeSpeed: 70,
  delaySpeed: 50,
  loop: true,
});

// Date and Time Now
function getDateTime() {
  var now = new Date();
  var year = now.getFullYear();
  var month = now.getMonth() + 1;
  var day = now.getDate();
  var hour = now.getHours();
  var minute = now.getMinutes();
  var second = now.getSeconds();
  if (month.toString().length == 1) {
    month = '0' + month;
  }
  if (day.toString().length == 1) {
    day = '0' + day;
  }
  if (hour.toString().length == 1) {
    hour = '0' + hour;
  }
  if (minute.toString().length == 1) {
    minute = '0' + minute;
  }
  if (second.toString().length == 1) {
    second = '0' + second;
  }
  var dateTime = day + ' ' + month + ' ' + year + ' ' + hour + ':' + minute + ':' + second;
  return dateTime;
}
setInterval(function () {
  currentTime = getDateTime();
  document.getElementById('digital-clock').innerHTML = currentTime;
}, 1000);

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

  if (window.pageYOffset > fixedNav) {
    header.classList.add('navbar-fixed');
  } else {
    header.classList.remove('navbar-fixed');
  }
};

// Data Filter
window.addEventListener('load', () => {
  let i = e('.portfolio-container');
  if (i) {
    let l = new Isotope(i, { itemSelector: '.portfolio-item' }),
      o = e('#portfolio-flters li', !0);
    t(
      'click',
      '#portfolio-flters li',
      function (e) {
        e.preventDefault(),
          o.forEach(function (e) {
            e.classList.remove('filter-active');
          }),
          this.classList.add('filter-active'),
          l.arrange({ filter: this.getAttribute('data-filter') }),
          l.on('arrangeComplete', function () {
            AOS.refresh();
          });
      },
      !0
    );
  }
});
