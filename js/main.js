define(['jquery', 'menu-class', 'animate-button'], function($, Menu, animateButton){

    var menu = new Menu(),
        clickCounter = 0;
    $('.menu-button').on('click', function(){

        var even;
        clickCounter++;
        even = clickCounter % 2 ? false : true;
        if(even){
            menu.restoreDefaults();
        }
        else{
            menu.animate();
        }
        animateButton(even);

    })

});
