/*
 *= require lib/jquery
 *= require semantic/transition
 *= require semantic/dropdown
 *= require semantic/sidebar
 */

$(function() {
    // Stick the #nav to the top of the window
    var nav = $("#mainmenu");
    var navHomeY = nav.offset().top;

    var isFixed = false;
    var $w = $(window);

    $w.scroll(function() {
        var scrollTop = $w.scrollTop();
        var shouldBeFixed = scrollTop > navHomeY;
        if (shouldBeFixed && !isFixed) {
            nav.css({
                position: 'fixed',
                top: 0,
                left: 0, //nav.offset().left,
                width: '100%'//nav.width()
            });
            isFixed = true;
            $("#toparrow").fadeIn();
        }
        else if (!shouldBeFixed && isFixed)
        {
            nav.css({
                position: 'static'
            });
            isFixed = false;
            $("#toparrow").fadeOut();
        }

    });

     $(".ui.dropdown").dropdown();
     $(".ui.sidebar").sidebar({overlay: true}).sidebar('attach events', '.toggle.btn');


});
