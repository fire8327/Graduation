/*jshint esnext: true */
/* dropdowns */
$(".dropdown-menu").each((i,el) => { 
  let list =  $(el).find('.list');
  let img = $(el).find("img");
  let dropdown = $(el).find('.toggler');
  dropdown.click(() => {
    list.slideToggle(500);
    img.toggleClass("rotate-180");
  });
});


/* navigation */
$("#toggler, a.menu").click(() => {
  $("#img1").toggle();
  $("#img2").toggle();
  $(".navigation").toggleClass("-translate-y-96");
})