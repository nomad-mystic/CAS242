/**
 * Created by endof on 2/10/2016.
 */
$(document).ready(function() {

    // For the navigation opening and closing animations
    var navDiv = $('nav.nav');
    $('.menuOpen').on('click', function() {
        navDiv.css('display', 'block')
            .animate({
                right: '0'
            }, 1000)
            .removeClass('closedMenu')
            .addClass('openedMenu');
    });
    $('.menuClose').on('click', function() {
        navDiv.animate({
            right: '-50%'
        }, 1000)
            .css('display', 'none')
            .removeClass('openedMenu')
            .addClass('closedMenu');
    });
    // This closes the menu when a user clicks on a link in it
    $('nav a').on('click', function() {
        navDiv.animate({
            right: '-50%'
        }, 500);
        if (navDiv.hasClass('openedMenu')) {
            navDiv.css('display', 'none');
        }
    });

    // Google map API for #map area
    var mapInitialize = function() {
        // Latitude and longitude for the cart
        var latLng = new google.maps.LatLng(45.518919, -122.675169);
        // Base Properties for the map
        var mapProperties = {
            center: latLng,
            zoom: 8,
            mapTypeId: google.maps.MapTypeId.ROADMAP
        };
        // Creating the map with mapProperties
        var map = new google.maps.Map(document.getElementById('mapCanvas'), mapProperties);

        // content in the infoWindow as String
        var contentString = '<div class="mapInfoWindow">';
            contentString +='<h2>Burrito Masala</h2>';
            contentString += '<p>Specializing in Delicious Southern Indian and Mexican foods</p>';
            contentString += '<h4><strong>Hours of Operation:</strong> Open 7 days a week, <time>11:00 AM to 7:00 PM</time></h4>';
            contentString += '<h4><strong>Location:</strong> Corner of <address>SW 3rd and Alder, Portland OR</address></h4>';
            contentString += '<h4><strong>Number for phone orders (texts accepted):</strong> <a href="tel:5035555555">503­555­5555</a></h4>';
            contentString += '</div>';

        // Adding contentString as property of the infoWindow object
        var infowindow = new google.maps.InfoWindow({
            content: contentString
        });

        //Creating marker for the map
        var marker = new google.maps.Marker({
            position: latLng,
            title: "Burrito Masala"
        });
        // Setting the marker on the map
        marker.setMap(map);

        // Adding click function for infoWindow();
        marker.addListener('click', function() {
            infowindow.open(map, marker);
        });
    }; // end mapInitialize

    // Calling mapInitialize()
    google.maps.event.addDomListener(window, 'load', mapInitialize());
}); // End ready