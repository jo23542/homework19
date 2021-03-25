/*$(document).ready(function(){
    $(".press").click(function(){
      $(".contact").animate({
        height: 'toggle'
      });
    });
  });
*/

$(".press").on("click", function(){
  $(".contact").slideToggle();
});

function fade() {
    $(".preloader").fadeOut("slow");
    }
    setTimeout(fade, 3000);
