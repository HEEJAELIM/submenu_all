$(function () {
  var $firstMenu = $("nav > ul > li"),
    $header = $("header");

  $firstMenu
    .mouseenter(function () {
      $header.animate({ height: "250px" }, 300);
    })
    .mouseleave(function () {
      $header.animate({ height: "50px" }, 300);
    });
});
