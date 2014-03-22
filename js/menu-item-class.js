define('menu-item-class', ['jquery'], function($){

    function MenuItem(degreeToTurn, radius, element){
        this.degree = degreeToTurn;
        this.radius = radius;
        this.jQueryDOMElement = element;
        this.jQueryDOMElement.storedWidth = element.width();
        this.jQueryDOMElement.storedHeight = element.height();
        this.jQueryDOMElement.storedZIndex = element.get(0).style.zIndex;
        this.jQueryDOMElement.storedLeft = element.get(0).style.left;
        this.checkPosition();
    }

    MenuItem.prototype.checkPosition= function(){
        console.log(this.degree);
        if(this.degree > 45){
            //TODO turn menu-item
        }
        else{

        }
    };
    MenuItem.prototype.show = function(){
        var transformString = 'translate(' + this.radius + 'px) rotate(' + (-this.degree) + 'deg)';
        this.jQueryDOMElement.css({
            'width' : '150px',
            'z-index' : '1000',
            '-webkit-transition' : '-webkit-transform 0.5s linear 0s',
            '-moz-transition' : '-moz-transform 0.5s linear 0s',
            '-ms-transition' : '-ms-transform 0.5s linear 0s',
            '-o-transition' : '-o-transform 0.5s linear 0s',
            'transform-origin' : (-this.radius) + 'px 50%',
            'transform' : transformString
        });

    };
    MenuItem.prototype.restoreDefaults = function(){
        var self = this.jQueryDOMElement;
        self.css({
//            'width' : this.jQueryDOMElement.storedWidth,
//            'transition' : 'none 0 none 0',
            'transform' : 'undefined'


        });
        setTimeout(function(){
            self.css({
                'width' : self.storedWidth,
                'z-index' : self.storedZIndex
            });
        }, 500);
    };
    return MenuItem;
});
