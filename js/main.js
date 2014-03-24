define(['jquery', 'menu-class'], function($, Menu){

    var menu = new Menu(),
        clickCounter = 0;
    $('.menu-button').on('click', function(){
        clickCounter++;
        if(clickCounter % 2 == 0){
            menu.restoreDefaults();

        }
        else{
            menu.animate();
        }

    })

});
