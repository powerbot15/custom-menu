define('menu-item-class', ['jquery'], function($){

    function MenuItem(degreeToTurn, radius, element){
        var rComponentText = 0,//getRandomInt(127, 255),
            gComponentText = 0,//getRandomInt(127, 255),
            bComponentText = getRandomInt(127, 255),
            rComponentBackgr = 200,//255 - rComponentText,
            gComponentBackgr = 0,//255 - gComponentText,
            bComponentBackgr = 255 - bComponentText;
        this.degree = -degreeToTurn;
        this.width = 150;
        if(this.degree == -180){
            this.degree *= -1;
        }
        this.radius = radius + this.width;
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
        if(Math.abs(this.degree) > 90){
            this.jQueryDOMElement.find('a').css({
                'transform' : 'rotate(180deg)'
            });
        }
        else{

        }
    };
    MenuItem.prototype.show = function(){
        var transformLeftString = 'translate(' + (-this.radius) + 'px)',
            transformTurnString = 'rotate(' + (-this.degree) + 'deg)',
            self = this;
        self.jQueryDOMElement.css({
            'width' : self.width,
            'z-index' : '1000',
            'transition' : 'all 200ms ease-out 0s',
            'transform-origin' : (self.radius) + 'px 50%',
            'transform' : transformLeftString
        });
        setTimeout(function(){
            self.jQueryDOMElement.css({
                'transform-origin' : (self.radius) + 'px 50%',
                'transition' : 'all 500ms ease-out 0s',
                'transform' : transformLeftString  + transformTurnString
            });

        }, 500);
    };
    MenuItem.prototype.unShow = function(){
        var transformLeftString = 'translate(' + (-this.radius) + 'px)',
            transformTurnString = 'rotate(' + (-this.degree) + 'deg)',
            self = this;
        self.jQueryDOMElement.css({
            'width' : self.width,
            'z-index' : '1000',
            'transition' : 'all 500ms ease-in 0s',
            'transform-origin' : (self.radius) + 'px 50%',
            'transform' : transformLeftString
        });
        setTimeout(function(){
            self.jQueryDOMElement.css({
                'transform-origin' : (self.radius) + 'px 50%',
                'transition' : 'all 200ms ease-in 0s',
                'width' : '0',
                'z-index' : 'auto',
                'transform' : 'undefined'
            });

        }, 550);
    };

    MenuItem.prototype.restoreDefaults = function(){
        var self = this.jQueryDOMElement;
        self.css({
            'transform' : 'undefined'
        });
        setTimeout(function(){
            self.css({
                'width' : self.storedWidth,
                'z-index' : self.storedZIndex
            });
        }, 550);
    };
    function getRandomInt(min, max){
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    return MenuItem;
});
