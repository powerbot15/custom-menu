define('menu-item-class', ['jquery'], function($){

    function MenuItem(degreeToTurn, element){
        this.degree = degreeToTurn;
        this.DOMElement = element;
        this.checkPosition();
    }

    MenuItem.prototype.checkPosition= function(){
        if(this.degree < 45){
            //TODO turn menu-item
        }
        else{
            console.log(this.degree);
        }
    };
    return MenuItem;
});
