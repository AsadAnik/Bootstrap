$('document').ready(function(){//The jQuery interface..

    //Variables defines..    
        var menu = $('#menu');// List..
        var onMenu = $('#onMenu');// ||..
        var offMenu = $('#offMenu');// X..

    //By Default...
        menu.hide();    

    //Click Functions for mouse event..    
        onMenu.click(function(){//On...
            menu.slideDown(500);
            $(this).css({ 'display': 'none' });
            offMenu.css({ 'display': 'block' });
        });

        offMenu.click(function(){//Off..
            menu.slideUp(500);
            $(this).css({'display': 'none'});
            onMenu.css({ 'display': 'block' });
        });
    });