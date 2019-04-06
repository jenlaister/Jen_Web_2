
const babelInUse = "babel + ES6"

$(document).ready(function(){

  setTimeout(function() {
    $('#initial-load').addClass('push-up');
    $('.initial-header').addClass('reduce');
    $('header, #initial-homepage').removeClass('hide');
    $('#about').removeClass('hide');
  }, 2000);
     // }, 0);

});
