/**
 * Created by Nomad_Mystic on 2/29/2016.
 */
$(function() {
    // Methods for displaying the dataDiv in the main section of the site
    var dataDisplay = {
        populateAllBlocks: function() {
            $.getJSON('data/magicData.json', function(data) {
                //console.log(data);
                var i;
                var j;
                var dataString = '';
                var dataDiv = document.getElementById('dataDiv');
                for (i=0; i < data.children.length; i++) {
                    dataString += '<p class="col-sm-4 col-md-4 col-lg-4">' + data.children[i].name + '</p>';
                }
                dataDiv.innerHTML = dataString;
            });
        }
    };
    // All of the click events to populate the dataDiv in the main section of the site
    var clickEvents = {
        allBlocks: function() {
            dataDisplay.populateAllBlocks();
        }
    };

    // namespacing all of the used DOM elements
    var DOMElements = {
        testingData: document.getElementById('testingData')
    };

    // Event listeners
    DOMElements.testingData.addEventListener('click', function(event) {
        clickEvents.allBlocks();
    });
}); // End Ready