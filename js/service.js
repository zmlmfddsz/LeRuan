/**
 * Created by xiaowu on 2017/3/2.
 */

$(function () {

//    轮播图

//    定义每次运动的距离
    var speed=-2;

    //定义初始的位置
    var right=0;

   // 获取移动的ul
   var box= $('.app_model ul');

    //获取每个li的宽度
    var len=box.children('li:first').width();


    //子元素的总长度
    var length=len*(box.children().length/2);
    function core(){
        right+=speed;
        box.stop().css({right:right});

        if(right<=-length){
            right=0;
        }

    }
    var timer=setInterval(core,100);

    $('.app_model').hover(function () {
        clearInterval(timer);
    }, function () {
        timer=setInterval(core,100);
    })


    $('.app_model ul li a').hover(function () {
        $(this).children('div').stop().fadeIn(500);
    }, function () {
        $(this).children('div').stop().fadeOut(500);
    });


//服务流程

    $('.process_list div').hover(function () {
        $(this).children(':last').stop().show().siblings('img').stop().hide();

    }, function () {
        $(this).children(':first').stop().show().siblings('img').stop().hide();

    })



//    关于我们开始
    $('.about_list a').hover(function () {

        $(this).children('img:last').addClass('show').siblings('img').removeClass('show');
    }, function () {
        $(this).children('img:last').removeClass('show').siblings('img').addClass('show');

    });

//    关于我们结束


    $(window).scroll(function () {

        var left4 = document.getElementsByClassName('process_title')[0];
        var eleTop4 = left4.getBoundingClientRect().top;
        if (eleTop4 < 450) {
            $('.process_title').addClass('bounceIn');
        }


    })







});