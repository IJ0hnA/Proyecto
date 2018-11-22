    // MOSTRANDO MENU
    $('#button-menu').click(function(){
        if ($('#button-menu').attr('class') == 'fa fa-bars') {
            $('#button-menu').removeClass('fa fa-bars').addClass('fas fa-times');
            $('.navegacion .menu').css({'left':'0px'});
            $('.navegacion').css({'width':'100%', 'background':'rgba(0, 0, 0,.3'});
        }else{
            $('#button-menu').removeClass('fas fa-times').addClass('fa fa-bars');
            $('.navegacion .menu').css({'left':'-320px'});
            $('.navegacion').css({'width':'0%', 'background':'rgba(0, 0, 0,.0'});
        }
    });

    // MOSTRAR SUBMENU

    $('navegacion .menu > item-submenu a').click(function(){
        var positionMenu = $(this).parent().attr('menu');
        $('item-submenu[menu = "1"] .submenu').css({'left':'0'});
    });