$(document).ready(function() {
  $("a.red-button").click(function() {
    var elementClick = $(this).attr("href")
    var destination = $(elementClick).offset().top;
    jQuery("html:not(:animated),body:not(:animated)").animate({
      scrollTop: destination
    }, 2800);
    return false;
  });
});