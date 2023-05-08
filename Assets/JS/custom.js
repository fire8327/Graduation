/*jshint esnext: true */
$(".navigation li").hover(function() {
  var isHovered = $(this).is(":hover");
  if (isHovered) {
    $(this).children("div").stop().slideDown(300);
  } else {
    $(this).children("div").stop().slideUp(300);
  }
});