/**
 * @file /js/custom.js
 *
 * Copyright (c) Lara Marziali
 * Distributed under the GNU GPL v3. For full terms see the file LICENSE.
 *
 * @brief Handle JavaScript functionality unique to this theme.
 */

 (function($) {

	// Conditional logic for the sidebar wheter issue not exists and the additional content exists

    if($(".issue-full-data").length < 0  && $('.homepage-additional-content').length ) //Try to check the length of the selector, if it returns you something then the element must exists else not.
        {
            $( ".homepage-additional-content" ).append( $( ".site-footer-sidebar" ) );
        }

})(jQuery);


$(document).ready(function(){
    $('.responsive-slicker').slick({
        dots: true,
  infinite: false,
  speed: 300,
  slidesToShow: 3,
  slidesToScroll: 3,
  arrow: true,
  responsive: [
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
    });
  });