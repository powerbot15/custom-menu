define('menu-class', ['jquery', 'menu-item-class'], function($, MenuItem){

    function Menu(){

       this.createMenuItem();

    }

    Menu.prototype.createMenuItem = function(){
        var menuItem = new MenuItem(50, {});
    };

    return Menu;

});
