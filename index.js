$(document).ready(function() {
  $(".flex-container div").click(function() {
    $(".flex-container div").removeClass("focus");
    $(".flex-container div img").removeClass("show");
    $(this).addClass("focus");
    $(this)
      .children()
      .addClass("show");
  });

  $(".close").click(function(e) {
    e.stopPropagation();
    $(".flex-container div img").removeClass("show");
    $(".flex-container div").addClass("no-pointer-events");
    $(".flex-container div").removeClass("focus");

    setTimeout(function() {
      $(".flex-container div").removeClass("no-pointer-events");
    }, 700);
  });
});
