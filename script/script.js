/////////////////////////////////
// Unnecessary but fun buttons //
/////////////////////////////////


// Run animation agqin

$("#animTrigger, .ninja").click(function () {
  var el = $(".ninja"),
    newone = el.clone(true);
  el.before(newone);
  $("." + el.attr("class") + ":last").remove();
});


// Outline toggle for animation help

$(document).ready(function () {
  $("#outlineToggle").click(function () {
    $("body").toggleClass("outlineIt");
  });
});