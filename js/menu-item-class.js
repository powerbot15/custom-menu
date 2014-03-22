define('menu-item-class', ['jquery'], function($){

    function MenuItem(degreeToTurn, radius, element){
        var rComponentText = getRandomInt(127, 255),
            gComponentText = getRandomInt(127, 255),
            bComponentText = getRandomInt(127, 255),
            rComponentBackgr = 255 - rComponentText,
            gComponentBackgr = 255 - gComponentText,
            bComponentBackgr = 255 - bComponentText;
        this.degree = degreeToTurn;
        this.radius = radius;
        this.jQueryDOMElement = element;
        this.jQueryDOMElement.css({
            'background-color' : 'rgb(' + rComponentBackgr + ',' + gComponentBackgr + ',' + bComponentBackgr + ')'


        });
        this.jQueryDOMElement.find('a').css({'color' : 'rgb(' + rComponentText + ',' + gComponentText + ',' + bComponentText + ')'});
        this.jQueryDOMElement.storedWidth = element.width();
        this.jQueryDOMElement.storedHeight = element.height();
        this.jQueryDOMElement.storedZIndex = element.get(0).style.zIndex;
        this.checkPosition();
    }

    MenuItem.prototype.checkPosition= function(){
        console.log(this.degree);
        if(this.degree > 90){
            this.jQueryDOMElement.find('a').css({
                'transform' : 'rotate(180deg)'
            });
        }
        else{

        }
    };
    MenuItem.prototype.show = function(){
        var transformString = 'translate(' + this.radius + 'px) rotate(' + (-this.degree) + 'deg)';
        this.jQueryDOMElement.css({
            'width' : '150px',
            'z-index' : '1000',
            '-webkit-transition' : '-webkit-transform 0.5s ease-out 0s',
            '-moz-transition' : '-moz-transform 0.5s ease-out 0s',
            '-ms-transition' : '-ms-transform 0.5s ease-out 0s',
            '-o-transition' : '-o-transform 0.5s ease-out 0s',
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
    function getRandomInt(min, max){
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    return MenuItem;
});
