$(document).ready(function() {



  $(".clickable").click(function() {
    $("#walrus-showing").slideToggle();
    $("#walrus-hidden").slideToggle();
});

$(".titlefade").click(function() {
    $("h1").fadeToggle();
  });

  $(".imgToggle").click(function() {
    $("#showstuff").slideToggle();
    $("#hidestuff").slideToggle();
  });

  $(".finalToggle").click(function() {
    $(".finalfade").fadeToggle();
  });


});
