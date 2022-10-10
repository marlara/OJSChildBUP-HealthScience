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