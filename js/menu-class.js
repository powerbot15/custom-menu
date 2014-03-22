define('menu-class', ['jquery', 'menu-item-class'], function($, MenuItem){

    function Menu(){

        this.items = [];
        this.createMenu();

    }
    Menu.prototype.createMenu = function(){
        var items = $('.menu-item'),
            countItems = items.length,
            degreeToTurn = 180 / (countItems - 1),
            circleRadius = ((items.eq(0).height()+10)*countItems)/Math.PI + 20,
            i;

        for(i = 0; i < items.length; i++){
            this.items.push(new MenuItem(degreeToTurn*(i), circleRadius, items.eq(i)));
        }


    };
    Menu.prototype.createMenuItem = function(){
        var menuItem = new MenuItem(50, {});
    };
    Menu.prototype.animate = function(){
        for(var i = 0; i < this.items.length; i++){
            this.items[i].show();
        }
    };
    Menu.prototype.restoreDefaults = function(){
        for(var i = 0; i < this.items.length; i++){
            this.items[i].restoreDefaults();
        }
    };

    return Menu;

});
