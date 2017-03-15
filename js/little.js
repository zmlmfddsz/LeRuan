/**
 * Created by xiaowu on 2017/3/8.
 */


$(window).scroll(function () {



    var slipss=$('.about_title');
    var slipsTop = slipss[0].getBoundingClientRect().top;
    if (slipsTop < 450) {

        slipss.children('img').addClass('flash');
        slipss.children('h3').addClass('bounce');
        slipss.children('p').addClass('flipInX');
    }

    var slips=$('.about_list');
    var slipTop = slips[0].getBoundingClientRect().top;
    if (slipTop < 450) {

        slips.children('img').addClass('fadeInUp');
    }


});