import $ from 'jquery';

export default function scrollAnimation () {
  
  
    console.log('vh', window.innerHeight);
    const divs = $('.scroll');
    const sec = $('.second');
    const two = $('.two');
    const three = $('.three');
  
    $(window).on('scroll', function () {
  
      const vh = window.innerHeight;
      const vh2 = window.innerHeight / 2;
      const st = $(this).scrollTop();
      // console.log('scroll y and scrollTop()',window.scrollY, st)
      const num = 100;
      const top = 100;    // inital top value
      
      divs.css({
        'opacity': (1 - st / num),
        'top': (100 + window.scrollY) <  3000 ? `${100 + window.scrollY}px ` : `3000px`
      });
  
      // fade in
      if (window.scrollY + (vh / 2) >= 600) {  // div at half viewport
        sec.css({
          'opacity': ((st + vh2 - 600) / (vh2 - 100))
        });
      }
      else {
        sec.css({
          'opacity': 0
        });
      }
  
      // fade out
      if (window.scrollY + 100 >= 600) {  // div at 100 from top
        sec.css({
          'opacity': (1 - (st - 600) / num),
          'top': (100 + window.scrollY) <  3000 ? `${100 + window.scrollY}px ` : `3000px`
        });
      }
  
  
      if (window.scrollY + 100 >= 1100) {
        two.css({
          'opacity': (1 - (st - 1100) / num),
          'top': (100 + window.scrollY) <  3000 ? `${100 + window.scrollY}px ` : `3000px`
        });
      }
      if (window.scrollY + 100 >= 1600) {
        three.css({
          'opacity': (1 - (st - 1600) / num),
          'top': (100 + window.scrollY) <  3000 ? `${100 + window.scrollY}px ` : `3000px`
        });
      }
  
  
    });
  
  
};