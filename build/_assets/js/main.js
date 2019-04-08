"use strict";

var babelInUse = "babel + ES6";
$(document).ready(function () {
  setTimeout(function () {
    $('#initial-load').addClass('push-up'); // $('.initial-header').addClass('reduce');

    $('#nav').removeClass('hide');
    $('#about').removeClass('hide'); // }, 2000);
  }, 0);
  setTimeout(function () {
    $('#initial-load').addClass('hide'); // }, 2500);
  }, 50);
});
//# sourceMappingURL=main.js.map
