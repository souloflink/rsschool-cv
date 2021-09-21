const anchors = [].slice.call(document.querySelectorAll('a[href*="#"]')),
      animationTime = 900,
      framesCount = 60;

anchors.forEach(function(item) {
  item.addEventListener('click', function(e) {
    e.preventDefault();
    let coordY = document.querySelector(item.getAttribute('href')).getBoundingClientRect().top + window.pageYOffset;
    let scroller = setInterval(function() {
      let scrollBy = coordY / framesCount;
      if(scrollBy > window.pageYOffset - coordY && window.innerHeight + window.pageYOffset < document.body.offsetHeight) {
        window.scrollBy(0, scrollBy);
      } else {
        window.scrollTo(0, coordY);
        clearInterval(scroller);
      }
    }, animationTime / framesCount);
  });
})

console.log('+10 за валидность, +20 за семантику (nav, header, section, main, footer, figure, figcaption + h1...h3), +10 за стили, +10 за центрирование, адаптив +10, фото +10, данные +10, списки +10, подсветка кода +10, изображения-ссылки +10, английский +10, pr +10, дизайн +5-10, итог: 135-140/160');
