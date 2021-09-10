(function($) {
  "use strict";
 



 // menu 
  $('.siteBar-btn').click( function (){ 
    $('.mobile-menu').toggleClass('siteBar');   
  }); 

  
  $(document).ready(function() {
    $('select').niceSelect();
  });
 
})(jQuery);
