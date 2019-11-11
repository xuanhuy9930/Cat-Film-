jQuery(document).ready(function($) {
$('.ds-film').slick({
  dots: true,
  infinite: true,
  speed: 1000,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
        autoplaySpeed: 2500,
        arrows: true,
        responsive: [{
          breakpoint: 600,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        },
        {
           breakpoint: 400,
           settings: {
              arrows: false,
              slidesToShow: 1,
              slidesToScroll: 1
           }
        }]
    });
});
// menu-rsp
// When the user scrolls down 20px from the top of the document, slide down the navbar
// window.onscroll = function() {scrollFunction()};

// function scrollFunction() {
//   if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
//     document.getElementById("navbar").style.top = "0";
//   } else {
//     document.getElementById("navbar").style.top = "-50px";
//   }
// }

// hover video
var figure = $(".video").hover( hoverVideo, hideVideo );

function hoverVideo(e) {  
    $('video', this).get(0).play(); 
   
}

function hideVideo(e) {
    $('video', this).get(0).pause(); 
}