$(document).ready(function() {

  $(".clickable").click(function() {
    $(".walrus-showing").toggle();
    $(".walrus-hidden").toggle();
});

$("p").click(function() {
    $("img").show();
  });
});
