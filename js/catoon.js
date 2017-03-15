/**
 * Created by xiaowu on 2017/3/8.
 */



//动画部分开始





$(window).scroll(function () {

    var left = document.getElementsByClassName('about_title')[0];
    var eleTop = left.getBoundingClientRect().top;
    if (eleTop < 350) {
        $('.about_title').addClass('bounceIn');
    }
    var left1 = document.getElementsByClassName('service_title')[0];
    var eleTop1 = left1.getBoundingClientRect().top;
    if (eleTop1 < 350) {
        $('.service_title').addClass('bounceIn');
    }

    var slips=$('.about_list');
    var slipTop = slips[0].getBoundingClientRect().top;
    if (slipTop < 350) {
        slips.children().children(':odd').addClass('rotateIn');
    }





});