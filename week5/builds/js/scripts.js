/**
 * Created by endof on 2/10/2016.
 */


$(document).ready(function() {

    $('.menuOpen').on('click', function() {
        $('nav').css({
            left: '0'
        });
    });
    $('.menuClose').on('click', function() {
        $('nav').css({
            left: '-100%'
        });
    });
}); // End ready