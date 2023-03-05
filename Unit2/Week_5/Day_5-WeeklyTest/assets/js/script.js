const header = document.querySelector('header');
const hero = document.getElementById('hero');
const btnHeader = document.querySelector('header button')
const groups = document.querySelectorAll('svg g g g');


window.addEventListener('scroll', function() {
    if (window.scrollY > hero.offsetTop + hero.offsetHeight-75) {
      header.classList.add('white');
      btnHeader.classList.add('green');
    } else {
      header.classList.remove('white');
      btnHeader.classList.remove('green');
    }
  });

  function randomGroup() {
    const remainingGroups = [...groups].filter(group => !group.used);
    const randomIndex = Math.floor(Math.random() * remainingGroups.length);
    const group = remainingGroups[randomIndex];
    group.used = true;
    return group;
  }
  
  function animateGroup(group) {
    let opacity = 1;
    const intervalId = setInterval(function() {
      opacity = opacity === 1 ? 0 : 1;
      group.setAttribute('opacity', opacity);
      if (opacity === 1) {
        group.used = false;
        clearInterval(intervalId);
      }
    }, 500);
  }
 
setInterval(function() {
  const group = randomGroup();
  animateGroup(group);
}, 100);
