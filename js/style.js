
// slide
jQuery(document).ready(function($) {
$('.danh-gia').slick({
  dots: false,
  infinite: true,
  speed: 2000,
  slidesToShow: 2,
  slidesToScroll: 1,
  autoplay: true,
        autoplaySpeed: 2000,
        arrows: true,
        responsive: [{
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1
          }
        },
        {
           breakpoint: 400,
           settings: {
              arrows: false,
              slidesToShow: 2,
              slidesToScroll: 1
           }
        }]
    });
});
// When the user scrolls down 20px from the top of the document, slide down the navbar
window.onscroll = function() {scrollFunction()};
function scrollFunction() {
  if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
    document.getElementById("navbar").style.top = "0";
  } else {
    document.getElementById("navbar").style.top = "-150px";
  }
}
// menu- responsive
function openNav() {
  document.getElementById("myNav").style.height = "100%";
}

function closeNav() {
  document.getElementById("myNav").style.height = "0%";
}
