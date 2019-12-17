$(document).ready(function() {
  $(".flex-container div").click(function() {
    $(".flex-container div").removeClass("focus");
    $(".flex-container div img.close").removeClass("show");
    $(this).addClass("focus");

    $(this)
      .children()
      .addClass("show");

    console.log(this);
  });

  $(".flex-container div img.close").click(function(e) {
    e.stopPropagation();

    $(this).removeClass("show");
    $(".flex-container div").addClass("no-pointer-events");
    $(".flex-container div.bg-size").removeClass("focus");

    setTimeout(function() {
      $(".flex-container div").removeClass("no-pointer-events");
    }, 700);
  });
});
