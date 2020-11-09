(function ($) {
    var slide = function (ele, options) {
        var $ele = $(ele);

        var setting = {

            speed: 1000,

            interval: 2000,

        };

        $.extend(true, setting, options);



        ///The Global Array which is only pushing the elements with the responsive things...  
        var states = [];

        //Make Responsive With The Function For JavaScript Media Queries inner here...
        function myQueryFunction(x) {
            if (x.matches) { // If media query matches
                states.push(
                    { $zIndex: 1, width: 120, height: 150, top: 69, left: 134, $opacity: 0.2 },
                    { $zIndex: 2, width: 130, height: 170, top: 59, left: 0, $opacity: 0.4 },
                    { $zIndex: 3, width: 190, height: 218, top: 35, left: 110, $opacity: 0.7 },
                    { $zIndex: 4, width: 255, height: 288, top: 0, left: 263, $opacity: 1 },
                    { $zIndex: 3, width: 190, height: 218, top: 35, left: 470, $opacity: 0.7 },
                    { $zIndex: 2, width: 130, height: 170, top: 59, left: 620, $opacity: 0.4 },
                    { $zIndex: 1, width: 120, height: 150, top: 69, left: 500, $opacity: 0.2 }
                );

            } else {
                states.push(
                    // { $zIndex: 1, width: 120, height: 150, top: 69, left: 134, $opacity: 0.2 },
                    // { $zIndex: 2, width: 130, height: 170, top: 59, left: 0, $opacity: 0.4 },
                    // { $zIndex: 3, width: 190, height: 218, top: 35, left: 110, $opacity: 0.7 },
                    // { $zIndex: 4, width: 255, height: 288, top: 0, left: 263, $opacity: 1 },
                    // { $zIndex: 3, width: 190, height: 218, top: 35, left: 470, $opacity: 0.7 },
                    // { $zIndex: 2, width: 130, height: 170, top: 59, left: 620, $opacity: 0.4 },
                    // { $zIndex: 1, width: 120, height: 150, top: 69, left: 500, $opacity: 0.2 }

                    { $zIndex: 1, width: 220, height: 250, top: 69, left: 134, $opacity: 0.2 },
                    { $zIndex: 2, width: 230, height: 270, top: 59, left: 0, $opacity: 0.4 },
                    { $zIndex: 3, width: 300, height: 318, top: 35, left: 110, $opacity: 0.7 },
                    { $zIndex: 4, width: 380, height: 380, top: 0, left: 263, $opacity: 1 },
                    { $zIndex: 3, width: 300, height: 318, top: 35, left: 470, $opacity: 0.7 },
                    { $zIndex: 2, width: 230, height: 270, top: 59, left: 620, $opacity: 0.4 },
                    { $zIndex: 1, width: 220, height: 250, top: 69, left: 500, $opacity: 0.2 }

                    // { $zIndex: 1, width: 300, height: 260, top: 69, left: 134, $opacity: 0.2 },
                    // { $zIndex: 2, width: 380, height: 280, top: 59, left: 0, $opacity: 0.4 },
                    // { $zIndex: 3, width: 400, height: 350, top: 35, left: 110, $opacity: 0.7 },
                    // { $zIndex: 4, width: 480, height: 440, top: 0, left: 263, $opacity: 1 },
                    // { $zIndex: 3, width: 400, height: 350, top: 35, left: 470, $opacity: 0.7 },
                    // { $zIndex: 2, width: 380, height: 280, top: 59, left: 620, $opacity: 0.4 },
                    // { $zIndex: 1, width: 300, height: 260, top: 69, left: 500, $opacity: 0.2 }
                );
            }
        }

        var x = window.matchMedia("(max-width: 720px)")
        myQueryFunction(x) // Call listener function at run time
        x.addListener(myQueryFunction) // Attach listener function on state changes


        var $lis = $ele.find('li');
        var timer = null;


        $ele.find('.hi-next').on('click', function () {
            next();
        });
        $ele.find('.hi-prev').on('click', function () {
            states.push(states.shift());
            move();
        });
        $ele.on('mouseenter', function () {
            clearInterval(timer);
            timer = null;
        }).on('mouseleave', function () {
            autoPlay();
        });

        move();
        autoPlay();


        function move() {
            $lis.each(function (index, element) {
                var state = states[index];
                $(element).css('zIndex', state.$zIndex).finish().animate(state, setting.speed).find('img').css('opacity', state.$opacity);
            });
        }


        function next() {
            states.unshift(states.pop());
            move();
        }

        function autoPlay() {
            timer = setInterval(next, setting.interval);
        }
    }
    $.fn.hiSlide = function (options) {
        $(this).each(function (index, ele) {
            slide(ele, options);
        });
        return this;
    }
})(jQuery);