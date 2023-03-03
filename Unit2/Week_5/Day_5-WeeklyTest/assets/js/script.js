const header = document.querySelector('header');
const hero = document.getElementById('hero');
const btnHeader = document.querySelector('header button')

window.addEventListener('scroll', function() {
    if (window.scrollY > hero.offsetTop + hero.offsetHeight) {
      header.classList.add('white');
      btnHeader.classList.add('green');
    } else {
      header.classList.remove('white');
      btnHeader.classList.remove('green');
    }
  });