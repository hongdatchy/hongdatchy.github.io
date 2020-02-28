$(document).ready(function () {
    $('.btnmenu').stop().on('click', function(event) {
        if($('.menu .cangiua .btnmenu ._3paddle .pad:first-child').hasClass('btn-click1')){
            event.preventDefault();
            setTimeout(
                function() {
                    $('.menu .cangiua .btnmenu ._3paddle .pad:first-child').removeClass('btn-click1');
                }, 1800);
            setTimeout(
                function() {
                    $('.menu .cangiua .btnmenu ._3paddle .pad:nth-child(1)').addClass('btn-click12');
                }, 1800);
            setTimeout(
                function() {
                    $('.menu .cangiua .btnmenu ._3paddle .pad:nth-child(2)').removeClass('btn-click1');
                }, 1400);
            setTimeout(
                function() {
                    $('.menu .cangiua .btnmenu ._3paddle .pad:nth-child(2)').addClass('btn-click12');
                }, 1400);
        
            setTimeout(
                function() {
                    $('.menu .cangiua .btnmenu ._3paddle .pad:nth-child(3)').removeClass('btn-click1');
                }, 1000);
            setTimeout(
                function() {
                    $('.menu .cangiua .btnmenu ._3paddle .pad:nth-child(3)').addClass('btn-click12');
                }, 1000);
            setTimeout(
                function() {
                    $('.menu .cangiua .btnmenu ._3paddle').removeClass('btn-click0');
                }, 1000);
            setTimeout(
                function() {
                    $('.menu .cangiua .btnmenu ._3paddle .x:nth-child(4)').removeClass('btn-click2');
                }, 0);
            setTimeout(
                function() {
                    $('.menu .cangiua .btnmenu ._3paddle .x:nth-child(4)').addClass('btn-click22');
                }, 0);
        
            setTimeout(
                function() {
                    $('.menu .cangiua .btnmenu ._3paddle .x:nth-child(5)').removeClass('btn-click3');
                }, 500);
            setTimeout(
                function() {
                    $('.menu .cangiua .btnmenu ._3paddle .x:nth-child(5)').addClass('btn-click32');
                }, 500);
            setTimeout(
                function() {
                    $('.menu .cangiua .contentmenu').removeClass('btn-clickcontent');
                }, 0);
            setTimeout(
                function() {
                    $('.menu .cangiua .contentmenu').addClass('btn-clickcontent2');
                }, 0);
            setTimeout(
                function() {
                    $('.menu .cangiua .contentmenu ul li:nth-child(1)').removeClass('btn-clickcontentulli');
                }, 1200);
            setTimeout(
                function() {
                    $('.menu .cangiua .contentmenu ul li:nth-child(2)').removeClass('btn-clickcontentulli');
                }, 1200);
            setTimeout(
                function() {
                    $('.menu .cangiua .contentmenu ul li:nth-child(3)').removeClass('btn-clickcontentulli');
                }, 1200);
            setTimeout(
                function() {
                    $('.menu .cangiua .contentmenu ul li:nth-child(4)').removeClass('btn-clickcontentulli');
                },1200);
        }
        else{
            event.preventDefault();
            
            setTimeout(
                function() {
                    $('.menu .cangiua .btnmenu ._3paddle .pad:first-child').addClass('btn-click1');
                }, 0);
            setTimeout(
                function() {
                    $('.menu .cangiua .btnmenu ._3paddle .pad:first-child').removeClass('btn-click12');
                }, 0);
            setTimeout(
                function() {
                    $('.menu .cangiua .btnmenu ._3paddle .pad:nth-child(2)').addClass('btn-click1');
                }, 400);
            setTimeout(
                function() {
                    $('.menu .cangiua .btnmenu ._3paddle .pad:nth-child(2)').removeClass('btn-click12');
                }, 400);
            setTimeout(
                function() {
                    $('.menu .cangiua .btnmenu ._3paddle .pad:nth-child(3)').addClass('btn-click1');
                }, 800);
            setTimeout(
                function() {
                    $('.menu .cangiua .btnmenu ._3paddle .pad:nth-child(3)').removeClass('btn-click12');
                }, 800);
            setTimeout(
                function() {
                    $('.menu .cangiua .btnmenu ._3paddle').addClass('btn-click0');
                }, 1200);
            setTimeout(
                function() {
                    $('.menu .cangiua .btnmenu ._3paddle .x:nth-child(4)').addClass('btn-click2');
                }, 1200);
            setTimeout(
                function() {
                    $('.menu .cangiua .btnmenu ._3paddle .x:nth-child(4)').removeClass('btn-click22');
                }, 0);
            setTimeout(
                function() {
                    $('.menu .cangiua .btnmenu ._3paddle .x:nth-child(5)').addClass('btn-click3');
                }, 1400);
            setTimeout(
                function() {
                    $('.menu .cangiua .btnmenu ._3paddle .x:nth-child(5)').removeClass('btn-click32');
                }, 0);
            setTimeout(
                function() {
                    $('.menu .cangiua .contentmenu').addClass('btn-clickcontent');
                }, 0);
            setTimeout(
                function() {
                    $('.menu .cangiua .contentmenu').removeClass('btn-clickcontent2');
                }, 0);
            setTimeout(
                function() {
                    $('.menu .cangiua .contentmenu ul li:nth-child(1)').addClass('btn-clickcontentulli');
                }, 1200);
            setTimeout(
                function() {
                    $('.menu .cangiua .contentmenu ul li:nth-child(2)').addClass('btn-clickcontentulli');
                }, 1300);
            setTimeout(
                function() {
                    $('.menu .cangiua .contentmenu ul li:nth-child(3)').addClass('btn-clickcontentulli');
                }, 1400);
            setTimeout(
                function() {
                    $('.menu .cangiua .contentmenu ul li:nth-child(4)').addClass('btn-clickcontentulli');
                }, 1500);
        }
    });
    $(window).scroll(function(event){
        var w= $(window).width()
        if(w>1024){
            if($('html').scrollTop()>300){
                $('.menu').addClass('menunholai');
                $('.menu').removeClass('menutora');
            }else{
                $('.menu').removeClass('menunholai');
                $('.menu').addClass('menutora');
            }
        }else{
            $('.menu').removeClass('menutora');
            $('.menu').removeClass('menunholai');
        }
        if($('html').scrollTop()>300){
            
            $('.menu .cangiua> a').removeClass('atora');
            $('.menu .cangiua> a').addClass('anholai');
            $('.menu .cangiua .btnmenu').addClass('anholai');
            $('.menu .cangiua .btnmenu').removeClass('atora');
        }else{
           
            $('.menu .cangiua> a').addClass('atora');
            $('.menu .cangiua> a').removeClass('anholai');
            $('.menu .cangiua .btnmenu').removeClass('anholai');
            $('.menu .cangiua .btnmenu').addClass('atora');
        }
    });
    
});