var THE_TATTOOIST = window.THE_TATTOOIST || {};

THE_TATTOOIST.magnificPopup = function(){

        // open image
        $('.zoom').magnificPopup({
            type: 'image'
        });

        // open the appointment form in a popup
        $('.btn-popup').magnificPopup({
            type: 'inline',
        });

    },

    THE_TATTOOIST.portfolio = {

        init : function(){

            this.layout();
            this.filters();
            this.infoItems();

        },

        // build the portfolio layout
        layout : function(){
            $('.works').imagesLoaded( function() {
                $('.works').isotope();
            });

        },

        // filter items on button click
        filters : function(){

            $('.filters').on( 'click', 'a', function(e) {
                e.preventDefault();

                var $that = $(this),
                filterValue = $that.attr('data-filter');

                $('.filters a').removeClass('light');
                $that.addClass('light');
                $('.works').isotope({ filter: filterValue });
            });

        },

        // open/close portfolio item information
        infoItems : function(){

            $('.info-link').on('click',function(e){
                e.preventDefault();

                var $that = $(this),
                $extraItem = $that.parents('.work-thumb').next('.info-work');

                if ($extraItem.length > 0) {
                    $extraItem.slideToggle( 200, function(){
                        $(this).parents('.work').toggleClass('opened');
                        $('.works').isotope('layout');
                    });
                }

            });

        }

    },
    $(document).ready(function(){
        THE_TATTOOIST.magnificPopup();
    });

    // window resize scripts
    $(window).resize(function() {

        THE_TATTOOIST.portfolio.layout();
    });



