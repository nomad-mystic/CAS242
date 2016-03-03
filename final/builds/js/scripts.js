/**
 * Created by Nomad_Mystic on 2/29/2016.
 */
$(function() {
    // Methods for displaying the dataDiv in the main section of the site
    var dataDisplay = {
        choseBlock: function(chosenSet) {
            if (chosenSet == 'All Sets') {
                dataDisplay.populateAllSets();
            }
        },
        populateAllSets: function () {
            $.getJSON('data/magicData.json', function (data) {
                console.log(data);
                var i;
                var j;
                var sellers;
                var dataString = '';
                var dataDiv = document.getElementById('dataDiv');
                for (i = 0; i < data.children.length; i++) {
                    dataString += '<div class="row">';
                    dataString += ' <div class="col-xs-3 col-sm-3 col-md-3 col-lg-3">';
                    dataString += '     <img src="images/alpha.jpg" class="img-responsive" alt="Image">';
                    dataString += ' </div>'; // End image col
                    dataString += ' <div class="col-xs-9 col-sm-9 col-md-9 col-lg-9">';
                    dataString += '     <h2 class="setTitle">' + data.children[i].name + '</h2>';
                    dataString += '     <div class="panel panel-default">';
                    dataString += '         <div class="panel-heading">';
                    dataString += '             <h3>Spotlight</h3>';
                    dataString += '         </div>'; // End panel-heading
                    dataString += '         <div class="panel-body">';
                    dataString += '             <div class="row">';
                    dataString += '                 <div class="col-xs-4 col-sm-4 col-md-4 col-lg-4 panel-seller">';
                    dataString += '                     <h3 class="seller">Seller</h3>';
                    dataString += '                     <h6 class="rating">Rating' +
                                                            '<span class="ratingNumber">100%</span>' +
                                                            '<span class="numberOfSales">(10000+ Sales)</span></h6>';
                    dataString += '                 </div>'; // End col
                    dataString += '                 <div class="col-xs-4 col-sm-4 col-md-4 col-lg-4">';
                    dataString += '                     <h3 class="quality">Near Mint</h3>';
                    dataString += '                     <h3 class="cost">$100.00</h3>';
                    dataString += '                     <h3 class="freeShipping">Free Shipping on Orders Over $25</h3>';
                    dataString += '                 </div>'; // End col
                    dataString += '                 <div class="col-xs-4 col-sm-4 col-md-4 col-lg-4">';
                    dataString += '                     <input class="quantityToBuy" name="quantityToBuy" ' +
                                                            'type="number" value="1" min="0"> of ' + Math.floor((Math.random() * 10) + 1).toString() + '</p>';
                    dataString += '                 </div><!--end col-->';
                    dataString += '             </div><!--end row-->';
                    dataString += '             <hr>';
                    // Item Two
                    dataString += '             <div class="row">';
                    dataString += '                 <div class="col-xs-4 col-sm-4 col-md-4 col-lg-4 panel-seller">';
                    dataString += '                     <h3 class="seller">Seller</h3>';
                    dataString += '                     <h6 class="rating">Rating' +
                                                            '<span class="ratingNumber">100%</span>' +
                                                            '<span class="numberOfSales">(10000+ Sales)</span></h6>';
                    dataString += '                 </div>'; // End col
                    dataString += '                 <div class="col-xs-4 col-sm-4 col-md-4 col-lg-4">';
                    dataString += '                     <h3 class="quality">Near Mint</h3>';
                    dataString += '                     <h3 class="cost">$100.00</h3>';
                    dataString += '                     <h3 class="freeShipping">Free Shipping on Orders Over $25</h3>';
                    dataString += '                 </div>'; // End col
                    dataString += '                 <div class="col-xs-4 col-sm-4 col-md-4 col-lg-4">';
                    dataString += '                     <p><input class="quantityToBuy" name="quantityToBuy" ' +
                                                            'type="number" value="1" min="0"> of ' + Math.floor((Math.random() * 10) + 1).toString() + '</p>';
                    dataString += '                 </div><!--end col-->';
                    dataString += '             </div><!--end row-->';


                    dataString += '          </div><!--end panel-body-->';
                    dataString += '     </div><!--end panel-->';
                    dataString += ' </div>'; // End col
                    //dataString += '     <p class="col-sm-4 col-md-4 col-lg-4">' + data.children[i].name + '</p>';
                    dataString += '</div>'; // End Row
                }
                dataDiv.innerHTML = dataString;
            });
        }
    };
    // All of the click events to populate the dataDiv in the main section of the site
    var events = {
        allBlocks: function () {
            dataDisplay.populateAllBlocks();
        },
        createRadiosEvents: function (DOMElements) {
            for (var i=0; i < DOMElements.radioButtons.length; i++) {
                DOMElements.radioButtons[i].addEventListener('click', function(event) {
                    console.log(this.value);
                    dataDisplay.choseBlock(this.value);
                }, false);
            }
        }
    };
    // namespacing all of the used DOM elements
    var DOMElements = {
        testingData: document.getElementById('testingData'),
        radioButtons: document.forms['filterSetsForm'].elements['sets']
    };

    var loopFunctions =  {
        randomSeller: function() {
            var randomSellers = $.getJSON('data/magicData.json', function (data) {
                //console.log(data.meta.sellers);
                var array = [];
                array.push(data.meta.sellers);
                return array;
            });
            return randomSellers;
        }
    };
    // Event listeners

    // Creates event listeners for radio buttons
    events.createRadiosEvents(DOMElements);
    var randomSellers = loopFunctions.randomSeller();
});// End ready

/*
 File Name: week8.js
 Date: 02/28/16
 Programmer: Pavel Svintsitskiy
 */
