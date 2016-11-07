$(document).ready(function(){
  $("body").fadeIn(5000);

  $("p").mouseenter( function() {
    $(this).css("background-color", "yellow");
  });
  $("p").mouseleave( function() {
    $(this).css("background-color", "white");
  });
  $("h2").on("click", function() {
    $(this).animate({
      "opacity": ".25",
      "margin-left": "20px"
      }, 4000, function (){
      $("p").css("opacity", ".5");
    });
  });
  $("#switcher-large").on("click", function(){
    $("body").css("font-size", "+=2px");
  });
  $("#switcher-small").on("click", function(){
    $("body").css("font-size", "-=2px");
  });
  $("#switcher-default").on("click", function(){
    $("body").css("font-size", "62.5%");
  });
  //$(document).on("keydown", function(){
//event.type for future work
    //$("#switcher").css("margin-left", "+=20px");
  //});
  $(document).keydown(function(e){
    switch (e.which){
    case 37:    //left arrow key
        $("#switcher").finish().animate({
            left: "-=20"
        });
        break;
    case 38:    //up arrow key
        $("#switcher").finish().animate({
            top: "-=20"
        });
        break;
    case 39:    //right arrow key
        $("#switcher").finish().animate({
            left: "+=20"
        });
        break;
    case 40:    //bottom arrow key
        $("#switcher").finish().animate({
            top: "+=20"
        });
        break;
    }
  });
});
