(function($) {
  "use strict";

  var rootCss = document.querySelector(':root');
  localStorage.setItem('theme', "dark")

  if (document.querySelector('.switch input[type="checkbox"]')) {
      let sbtn = document.querySelector('.switch input[type="checkbox"]')
      let logo = document.querySelector('.logo-area img')
      sbtn.addEventListener('change', (e) => {
        if (e.target.checked) {
          localStorage.setItem('theme', "dark")
        }else{
          localStorage.setItem('theme', "light")
        }

        if (localStorage.getItem('theme') == "light") {
          rootCss.style.setProperty('--thm', '#C4C4C4');
          rootCss.style.setProperty('--bodyBackg', '#fff');
          rootCss.style.setProperty('--whiteColor', '#333');
          rootCss.style.setProperty("--pr_soft_back", "rgb(0 0 0 / 10%)");
          rootCss.style.setProperty("--grayColor", "rgb(107 101 101)");
          rootCss.style.setProperty("--grayShap", "rgb(56 56 56 / 7%)");
          logo.style.filter = "invert(1)";
        }else{ 
          rootCss.style.setProperty('--thm', '#C4C4C4');
          rootCss.style.setProperty('--bodyBackg', '#1F1D2C');
          rootCss.style.setProperty('--whiteColor', '#fff');
          rootCss.style.setProperty("--pr_soft_back", "rgb(255 255 255 / 10%)");
          rootCss.style.setProperty("--grayColor", "rgb(255 255 255 / 40%)");
          rootCss.style.setProperty("--grayShap", "rgba(255, 255, 255, 0.07)");
          logo.style.filter = "invert(0)";
        }



      })
      if (localStorage.getItem('theme') == "light") {
          console.log('ready')
      }
  }

 // menu 
  $('.siteBar-btn').click( function (){ 
    $('.mobile-menu').toggleClass('siteBar');   
  }); 

  
  $(document).ready(function() {
    $('select').niceSelect();
  });
 
})(jQuery);
