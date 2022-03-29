import $ from 'jquery';

function scrollAnimation() {
  const home = $('.grid-home');
  const about = $('.about-container');
  const skills = $('.skills-container');
  const projects = $('.projects-container');
  const contact = $('.contact-container');

  $(window).on('scroll', function () {
    const vh = window.innerHeight;
    const midViewport = window.innerHeight / 2;
    const vh2 = vh * 2;
    const vh3 = vh * 3;
    const vh4 = vh * 4;
    const totalHeight = 4 * vh;
    const st = $(this).scrollTop();

    home.css({
      'opacity': (1 - st / midViewport),
      'top': window.scrollY < totalHeight ? `${window.scrollY}px ` : `${totalHeight}px`
    });

    const fadeEffect = (div, initalTop) => {
      // fade in
      if (window.scrollY + (midViewport) >= initalTop) {  // div at half viewport
        div.css({
          'opacity': ((st + midViewport - initalTop) / (midViewport))
        });
      }
      else {
        div.css({
          'opacity': 0
        });
      }
      // fade out
      if (window.scrollY >= initalTop) {  // div at top 0
        div.css({
          'opacity': (1 - (st - initalTop) / midViewport),
          'top': (window.scrollY) < totalHeight ? `${window.scrollY}px ` : `${totalHeight}px`
        });
      }
    };
    fadeEffect(about, vh);
    fadeEffect(skills, vh2);
    fadeEffect(projects, vh3);
    fadeEffect(contact, vh4);
  });
};

function reset() {
  const home = $('.grid-home');
  const about = $('.about-container');
  const skills = $('.skills-container');
  const projects = $('.projects-container');
  const contact = $('.contact-container');

  const vh = window.innerHeight;
  const vh2 = vh * 2;
  const vh3 = vh * 3;
  const vh4 = vh * 4;
  const reseter = (div, topValue) => {
    div.css({
      'opacity': 1,
      'top': topValue
    });
  }
  reseter(home, 0);
  reseter(about, vh);
  reseter(skills, vh2);
  reseter(projects, vh3);
  reseter(contact, vh4);
};

export { scrollAnimation, reset };