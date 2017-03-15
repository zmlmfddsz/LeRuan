/**
 * Created by xiaowu on 2017/3/2.
 */
$(function(){

    $('.heart_list>div').hover(function () {

        $(this).children(':eq(0)').stop().fadeOut().siblings('img').fadeIn();

    }, function () {
        $(this).children(':eq(1)').stop().fadeOut().siblings('img').fadeIn();
    });


    $('.list td').hover(function () {

        $(this).addClass('bounce');
        $(this).siblings('td').removeClass('bounce');



    }, function () {
        $(this).removeClass('bounce');
    });


$(window).scroll(function () {

    var team=$('.service_team');
    var teamTop = team[0].getBoundingClientRect().top;

    if (teamTop < 350) {
        team.children('div:first').addClass('fadeInLeftBig');
        team.children('div:last').addClass('fadeInRightBig');
    }

    var left2 = document.getElementsByClassName('heart_title')[0];
    var eleTop2 = left2.getBoundingClientRect().top;
    if (eleTop2 < 350) {
        $('.heart_title').addClass('bounceIn');
    }


    var table=$('.list');
    var tableTop = table[0].getBoundingClientRect().top;
    if (tableTop < 350) {
        table.children().children().children('td').addClass('bounce');
    }


    var friend=$('.friends');
    var friendTop = friend[0].getBoundingClientRect().top;
    if (friendTop < 350) {
        friend.children('img').addClass('pulse');
    }

})

});