/**
 * Created by xiaowu on 2017/2/28.
 */

$(function () {



//    关于我们开始
    $('.about_list a').hover(function () {

        $(this).children('img:last').addClass('show').siblings('img').removeClass('show');
    }, function () {
        $(this).children('img:last').removeClass('show').siblings('img').addClass('show');

    });

//    关于我们结束

//服务项目开始

    $('.service_list span').hover(function () {
        $(this).children('img:last').stop().show().addClass('swing').siblings('img').stop().hide().removeClass('swing');
    }, function () {
        $(this).children('img:first').stop().show().removeClass('swing').siblings('img').stop().hide().removeClass('swing');
    })
//服务项目结束


    //成功案例开始


    $('.list td a').hover(function () {
        $(this).parent().removeClass('bounce');
        $(this).children('i').stop().fadeIn();
        $(this).parent().addClass('bounce');



    }, function () {
        $(this).children('i').stop().fadeOut();
        $(this).parent().removeClass('bounce');
    });

//    友情链接
    $('.friends').hover(function () {
        $(this).children('img').addClass('pulse');
    }, function () {
        $(this).children('img').removeClass('pulse');
    });


//表单提交


//姓名验证
    $('.user_name input').blur(function () {

        var val = $('.user_name input').val();

        if (!val) {
            $('.show_list').stop().slideDown().html('请输入姓名');
            $(this).next('i').html('*').css('color', 'red');
        } else {
            $('.show_list').stop().slideUp().html('');
            $(this).next('i').html('√').css('color', 'green');
        }

    });

//手机号验证

    $('.content_left .phone').blur(function () {
        var txt = $(this).val();
        var reg = /^(13|18|15)\d{9}$/;
        if (!reg.test(txt)) {
            $('.show_list').stop().slideDown().html('请输入正确格式的手机号码');
            $(this).next('i').html('*').css('color', 'red');
        } else {
            $('.show_list').stop().slideUp().html('');
            $(this).next('i').html('√').css('color', 'green');
        }


    });


//验证码

    var canvas = document.querySelector('.canvas');

    var ps = canvas.getContext('2d');

    function can() {
        ps.clearRect(0, 0, 70, 25);
        var str = 'aAbBcCdDeEfFgGhHiIgJkKlLmMnNoOpPqQrRsStTuUvVwWxXyYzZ';
        var color = 'rgb(' + Math.floor(Math.random() * 256) + ',' + Math.floor(Math.random() * 256) + ',' + Math.floor(Math.random() * 256) + ')';

        var string = '';
        for (var i = 0; i < 4; i++) {
            var index = Math.floor(Math.random() * str.length);
            string += str[index];
        }
        ps.fillStyle = color;
        ps.textAlign = 'center';
        ps.font = 'italic 20px 萝莉体';
        ps.fillText(string, 35, 20);

        ps.beginPath();
        var y1 = Math.floor(Math.random() * 10 + 10);
        var y2 = Math.floor(Math.random() * 10 + 10);
        ps.moveTo(10, y1);
        ps.lineTo(60, y2);
        ps.lineWidth = 2;
        ps.strokeStyle = 'rgb(' + Math.floor(Math.random() * 256) + ',' + Math.floor(Math.random() * 256) + ',' + Math.floor(Math.random() * 256) + ')';
        ps.stroke();

        return string;

    }


    var sureTxt = can();

    $('.canvas').click(function () {
        ps.clearRect(0, 0, 70, 25);
        sureTxt = can();
    });


//输入验证码

    $('.yanzheng').blur(function () {

        var txt = $(this).val();
        var sure = sureTxt.toLowerCase();
        var txt1 = txt.toLowerCase();
        if (txt1 != sure) {
            $('.show_list').stop().slideDown().html('请输入正确格式的验证码');
            $(this).next('i').html('*').css('color', 'red');
        } else {
            $('.show_list').stop().slideUp().html('');
            $(this).next('i').html('√').css('color', 'green');
        }
    });

//内容区
    $('.content_left textarea').blur(function () {

        var txt = $(this).val();

        if (txt.length < 4 || txt.length > 200) {
            $('.show_list').stop().slideDown().html('请在规定的数字范围内输入文字');
            $(this).next('i').html('*').css('color', 'red');
        } else {
            $('.show_list').stop().slideUp().html('');
            $(this).next('i').html('√').css('color', 'green');
        }


    });

//提交表单

    $('.btn button').click(function () {


        var list = $('.content_left i');

        if (list.eq(0).html() == '√' && list.eq(1).html() == '√' && list.eq(2).html() == '√' && list.eq(3).html() == '√') {

            $('.show_list').stop().slideUp().html('');
        } else {
            $('.show_list').stop().slideDown().html('请保证填写的表单完整并格式正确');
        }


    });



    $(window).scroll(function(){


        var swing=$('.service_list');
        var swingTop = swing[0].getBoundingClientRect().top;
        if (swingTop < 350) {
            swing.children().children().children('img').addClass('swing');
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
        var our=$('.content_right').children();
        var ourTop = our[0].getBoundingClientRect().top;
        if (ourTop < 251) {

            our.children('li').addClass('flipInX');

        }

    })








});



















