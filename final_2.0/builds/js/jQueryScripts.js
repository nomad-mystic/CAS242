/**
 * Created by Nomad_Mystic on 3/5/2016.
 */
$(document).ready(function() {
    // Header Carousel
    // For the Owl Carousel Plugin
    $("#owlCarousel").owlCarousel({
        //navigation : true, // Show next and prev buttons
        slideSpeed : 300,
        paginationSpeed : 400,
        singleItem:true
    });

    // Working with tooltips

    // Cutting off length of text in the header area when the screen size is mobile
    var headerParaText = $('.headerCarouselPara');
    var headerParaTextHTML = headerParaText.html();

    var windowFunctions = {
        loaded: function(headerParaTextHTML, headerParaText) {
            var windowWidth = window.innerWidth;

            if (windowWidth <= 776) {
                var ParaTextString = headerParaTextHTML.toString();
                var slicedString = ParaTextString.slice(0, 150);
                headerParaText.html(slicedString + '...');
            } else {
                headerParaText.html(headerParaTextHTML);
            }
        },
        resize: function(headerParaTextHTML, headerParaText) {
            var windowWidth = window.innerWidth;

            if (windowWidth >= 767) {

                headerParaText.html(headerParaTextHTML);
            } else {
                console.log('this');
                this.loaded(headerParaTextHTML, headerParaText);
            }
        }
    };
    // Calling windowFunctions
    windowFunctions.loaded(headerParaTextHTML, headerParaText);

    var resizeTimer;
    $(window).on('resize', function() {
        clearTimeout(resizeTimer);
        resizeTimer = setTimeout(function() {
            windowFunctions.resize(headerParaTextHTML, headerParaText);
        }, 10);
    }); // End resize


    //var slicePopoverPara = function() {
        //var popoverParagraph = $('.popoverParagraph');
        ////var popoverParaHTML = popoverParagraph.html();
        //var popoverParagraphs = document.getElementsByClassName('popoverParagraph');
        //var popoverAnchors = document.getElementsByClassName('popoverAnchor');
        //
        //console.log(popoverAnchors[0].dataset.content);
        //for (var i=0; i < popoverParagraphs.length; i++) {
        //    console.log('this');
        //}
        //var slicedPara = popoverParaHTML.slice(0, 20);
        //console.log(popoverParaHTML);
    //};
}); // End ready

