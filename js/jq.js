$(function(){

    "use strict";
    $('.title_box').click(function(){
        
        $('this').toggleClass('open');
        $(this).next('.list_link').toggleClass('open');
    });

    $('#slider_price').slider({
        max: 1000,
        min: 0,
        range: true,
        values: [ 190, 728 ],
        slide: function( event, ui ) {
            $('input[name="minPrice"]').val( '$' + ui.values[0] );
            $('input[name="maxPrice"]').val( '$' + ui.values[1] );
        }
    });

    $('input[name="minPrice"]').val( '$' + 
    $('#slider_price').slider('values',0) );
    $('input[name="maxPrice"]').val( '$' + 
    $('#slider_price').slider('values',1));

    $('#cart, .title_cart').click(function(){
        $('#cart_box').toggleClass('open');
    });

    $('#sign').click(function(){
        $('#black_fill').toggleClass('open');
        $('#modal').toggleClass('open');
    });
    $('#close_mod, #black_fill').click(function(){
        $('#black_fill').toggleClass('open');
        $('#modal').toggleClass('open');
    });

    $('#search_btn').click(function () {
        $('#search_panel').toggleClass('open');
    });

    $('#load_more').click(function (event) {
        event.preventDefault();
        $('.list_product').append('<a href="#" class="product box main_flex__nowrap flex__jcontent_center flex__align-items_center"><div class="img_product"><div class="tag box">new</div><img src="img/01.png" alt=""></div><h2>Our Legacy Splash Jacquard Knit</h2><p>Black Grey Plants</p><p class="price">$290</p></a><a href="#" class="product box main_flex__nowrap flex__jcontent_center flex__align-items_center"><div class="img_product"><div class="tag box">new</div><img src="img/01.png" alt=""></div><h2>Our Legacy Splash Jacquard Knit</h2><p>Black Grey Plants</p><p class="price">$290</p></a><a href="#" class="product box main_flex__nowrap flex__jcontent_center flex__align-items_center"><div class="img_product"><div class="tag box">new</div><img src="img/01.png" alt=""></div><h2>Our Legacy Splash Jacquard Knit</h2><p>Black Grey Plants</p><p class="price">$290</p></a>');
    });




}); 
