define('animate-button', ['jquery'], function($){

    function animateButton(even){

        var firstStripe = $('.first'),
            secondStripe = $('.second'),
            thirdStripe = $('.third');
        if(even){
            firstStripe.css({
                'transition' : 'all 200ms linear 0s',
                'transform-origin' : '0 50%',
                'transform' : 'none'
            });
            secondStripe.css({
                'transition' : 'all 200ms linear 0s',
                'opacity' : '1'
            });
            thirdStripe.css({
                'transition' : 'all 200ms linear 0s',
                'transform-origin' : '0 50%',
                'transform' : 'none'
            });
        }
        else{
            firstStripe.css({
                'transform-origin' : '0 50%',
                'transform' : 'translate(3px, 0) rotate(30deg)'
            });
            secondStripe.css({
                'transition' : 'none 0s none 0s',
                'opacity' : '0'
            });
            thirdStripe.css({
                'transform-origin' : '0 50%',
                'transform' : 'translate(3px, 0) rotate(-30deg)'
            });
        }
    }

    return animateButton;
});
