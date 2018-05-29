$(document).ready(function() {

  $("button#green").click(function() {
      $("body").removeClass();
      $("body").addClass("green-background");
    });

    $("button#yellow").click(function() {
      $("body").removeClass();
      $("body").addClass("yellow-background");
    });

    $("button#red").click(function() {
      $("body").removeClass();
      $("body").addClass("red-background");
    });

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
