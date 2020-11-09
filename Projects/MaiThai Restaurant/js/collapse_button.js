////Showing the Collapse Button with condition base...
(function ($) {

    ///Collapse For Food Menu.. (Food Order & Food Package)...
    var image_1 = $('.collapse-img-1');
    var toggle_click_1 = $('.toggle-click-1');

    var image_2 = $('.collapse-img-2');
    var toggle_click_2 = $('.toggle-click-2');

    var image_3 = $('.collapse-img-3');
    var toggle_click_3 = $('.toggle-click-3');

    var image_4 = $('.collapse-img-4');
    var toggle_click_4 = $('.toggle-click-4');

    var image_5 = $('.collapse-img-5');
    var toggle_click_5 = $('.toggle-click-5');

    var image_6 = $('.collapse-img-6');
    var toggle_click_6 = $('.toggle-click-6');

    var image_7 = $('.collapse-img-7');
    var toggle_click_7 = $('.toggle-click-7');

    var image_8 = $('.collapse-img-8');
    var toggle_click_8 = $('.toggle-click-8');

    var image_9 = $('.collapse-img-9');
    var toggle_click_9 = $('.toggle-click-9');

    // image.attr("src", "assets/icons/minus_collapse.png");

    function makeChangeWithToggle(toggle_click, image) {
        toggle_click.click(function () {
            $(this).attr("aria-expanded", function (index, attr) {
                return attr === "true" ? image.attr("src", "assets/icons/plus_collapse.png") : image.attr("src", "assets/icons/minus_collapse.png");
            });
        });
    }

    makeChangeWithToggle(toggle_click_1, image_1);
    makeChangeWithToggle(toggle_click_2, image_2);
    makeChangeWithToggle(toggle_click_3, image_3);
    makeChangeWithToggle(toggle_click_4, image_4);
    makeChangeWithToggle(toggle_click_5, image_5);
    makeChangeWithToggle(toggle_click_6, image_6);
    makeChangeWithToggle(toggle_click_7, image_7);
    makeChangeWithToggle(toggle_click_8, image_8);
    makeChangeWithToggle(toggle_click_9, image_9);


    ///Shopping-bag/cart's Collapse Item...
    ///The JavaScript's jQuery...
    $shopping_cart = $('.shopping-cart');
    $close_btn = $('.shopping-car-close-btn');
    $close_arrow = $('.shoppingCartButton');
    $open_btn = $('.sticky-open-btn');

    $close_btn.click(function () {
        $shopping_cart.css({
            right: '-50rem'
        });
        $open_btn.css({
            display: 'block'
        });
    });
    $close_arrow.click(function () {
        $shopping_cart.css({
            right: '-50rem'
        });
        $open_btn.css({
            display: 'block'
        });
    });

    //For Opening Drawer with this button...
    $open_btn.click(function () {
        $shopping_cart.css({
            right: '0rem'
        });
        $open_btn.css({
            display: 'none'
        });
    });

    ///Collapse Shopping-Cart's Special Code Arrow Up/Down Button Control...
    //Done Some CSS with jQuery Help....
    $arrow_up = $('.special-code-arrow-up');
    $arrow_down = $('.special-code-arrow-down');
    $special_code_toggle = $('.toggle-special-code');

    ///The Default Arrow Down Will Desapear..
    $arrow_down.css({ display: 'none' });

    $special_code_toggle.click(function () {
        $(this).attr("aria-expanded", function (index, attr) {
            if (attr === "true") {
                $arrow_up.css({
                    display: 'inline'
                });
                $arrow_down.css({
                    display: 'none'
                })
            } else {
                $arrow_up.css({
                    display: 'none'
                });
                $arrow_down.css({
                    display: 'inline'
                })
            }
        });
    });

    ///Make Collapse Shopping Cart is For Mobile View...
    $desktop_shopping_bag = $('.sticky-open-btn');
    $mobile_shopping_bag = $('.cart-bar');
    $desktop_cart_hovered = $('.carts-section');
    $shopping_cart = $('.shopping-cart');


    var x = window.matchMedia("(max-width: 720px)")
    myQueryFunction(x) // Call listener function at run time
    x.addListener(myQueryFunction) // Attach listener function on state changes

    function myQueryFunction(x) {
        if (x.matches) { // If media query matches
            //If Yes...
            $desktop_shopping_bag.css({ display: 'none' });
            $desktop_cart_hovered.css({display: 'none'});
            $mobile_shopping_bag.click(function(){
                $shopping_cart.css({
                    height: '100%',
                    width: '100%',
                    right: '0'
                });
                $desktop_shopping_bag.css({ display: 'none' });
            });
        }
    }



})(jQuery);


