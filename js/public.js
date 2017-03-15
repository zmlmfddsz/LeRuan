/**
 * Created by xiaowu on 2017/3/2.
 */
$(function () {

    //当前页面的导航栏始终突出显示
    function show(){
        var reg=/.*?html\/(\w+)/;

        var href=window.location.href;

        var title=href.match(reg)[1];

        var li=$('.header a[href="'+title+'.html"]').parent();

        li.addClass('checked');
    }

    //导航栏的
    $('.header li').hover(function () {
        $(this).addClass('checked').siblings().removeClass('checked');
        show();

    }, function () {
        $(this).removeClass('checked');
        show();
    });

//    轮播图开始


    var index = 0;

    //1.定义一个核心函数  根据指定的索引值找元素并设置样式

    function core(num){
        //2.根据参数索引值  找到对应的按钮添加类名小伙伴删除类名
        $('.bg div').eq(num).stop().fadeIn(1000).siblings('div').stop().fadeOut();

    }

    //6.左右箭头事件

    $('.bg i:first').click(function(){

        index--;

        if(index<0){
            index = $('.bg div').length-1;

        }

        //7.调用核心函数并传递索引值

        core(index);


    });
    //7.1 定时器要使用的回调函数

    function play(){

        index++;

        if(index> $('.bg div').length-1){

            index =0;

        }

        //9.调用核心函数并传递索引值

        core(index);


    }


    //6.左右箭头事件

    $('.bg>i:last').click(play);


    //8. 开启一个定时器

    var sid = setInterval(play,2000);


    //10.添加鼠标移入移出

    $('.bg').hover(function(){

        //11.清除定时器

        clearInterval(sid);

    },function(){

        sid = setInterval(play,2000);


    });


//轮播图结束



//回到顶部

    $(window).scroll(function () {

        var len= $(window).scrollTop();

        if(len>800){
            $('.fix').slideDown();
        }else{
            $('.fix').slideUp();
        }

    });


    $('.fix').click(function () {

        var speed=20;


        var timer= setInterval(function () {
            var  len= $(window).scrollTop();
            $(window).scrollTop(len-len/speed);
            if(len<=0){
                clearInterval(timer);
            }
        },40);



    });


//侧边导航
    $('.slide').hover(function () {

        $(this).stop().animate({right:0});

    }, function () {

        $(this).stop().animate({right:-170});

    });


    $('.closs').click(function () {

        $('.slide').stop().animate({right:-170});
    })



//微信二维码扫描



$('.slide ul li:eq(0)').click( function () {

    var scan=$('.scan');
    scan.show();
    scan.height($('body').height());

});
    //微信扫描关闭
    $('.scan').on('click','p', function () {

        $('.scan').hide();

    });


//    复制地址

    $('.slide ul li:eq(1)').click( function () {
        var url="http://www.happysoft.cc/";
       prompt('请按Ctrl+C复制地址到剪切板',url);

    });


//网站分享
    var ShareTip = function(){

    };
    //分享到腾讯微博
    ShareTip.prototype.sharetoqq=function(content,url,picurl) {
        var shareqqstring='http://v.t.qq.com/share/share.php?summary='+content+'&url='+url+'&pic='+picurl;
        window.open(shareqqstring);
    };
    //分享到新浪微博
    ShareTip.prototype.sharetosina=function(title,url,picurl) {
        var sharesinastring='http://v.t.sina.com.cn/share/share.php?summary='+title+'&url='+url+'&content=utf-8&sourceUrl='+url+'&pic='+picurl;
        window.open(sharesinastring);
    };
    //分享到QQ空间
    ShareTip.prototype.sharetoqqzone=function(title,url,picurl) {
        var shareqqzonestring='http://sns.qzone.qq.com/cgi-bin/qzshare/cgi_qzshare_onekey?summary='+title+'&url='+url+'&pics='+picurl;
        window.open(shareqqzonestring);
    };

    //分享到开心网
    ShareTip.prototype.sharetoSmill=function(title,url,picurl) {
        var sharetoSmillString='http://www.kaixin001.com/~repaste/repaste.php?summary='+title+'&url='+url+'&pics='+picurl;
        window.open(sharetoSmillString);
    };

    //分享到人人网
    ShareTip.prototype.sharetoPerson=function(title,url,picurl) {
        var sharetoSmillString='http://widget.renren.com/dialog/share?summary='+title+'&url='+url+'&pics='+picurl;
        window.open(sharetoSmillString);
    };

    //分享到豆瓣网
    ShareTip.prototype.sharetoBean=function(title,url,picurl) {
        var sharetoSmillString='http://shuo.douban.com/!service/share?summary='+title+'&url='+url+'&pics='+picurl;
        window.open(sharetoSmillString);
    };

//网易微博
    ShareTip.prototype.sharetoWangYi=function(title,url,picurl) {
        var sharetoSmillString='http://t.163.com/article/user/checkLogin.do?summary='+title+'&url='+url+'&pics='+picurl;
        window.open(sharetoSmillString);
    };

    //网易百度贴吧
    ShareTip.prototype.sharetoBaidu=function(title,url,picurl) {
        var sharetoSmillString='http://tieba.baidu.com/i/app/open_share_api?summary='+title+'&url='+url+'&pics='+picurl;
        window.open(sharetoSmillString);
    };


    $('.slide ul li:eq(2)').click( function () {
        var share1=new ShareTip();

        share1.sharetoqq("乐软科技","http://www.happysoft.cc/", "");

    });


    $('.slide ul li:eq(3)').click( function () {
        var share1=new ShareTip();

        share1.sharetosina("乐软科技","http://www.happysoft.cc/", "");

    });

    $('.slide ul li:eq(4)').click( function () {
        var share1=new ShareTip();

        share1.sharetoqqzone("乐软科技","http://www.happysoft.cc/", "");

    });

    $('.slide ul li:eq(5)').click( function () {
        var share1=new ShareTip();

        share1.sharetoSmill("乐软科技","http://www.happysoft.cc/", "");

    });
    //人人网
    $('.slide ul li:eq(6)').click( function () {
        var share1=new ShareTip();

        share1.sharetoPerson("乐软科技","http://www.happysoft.cc/", "");

    });



    //豆瓣网
    $('.slide ul li:eq(7)').click( function () {
        var share1=new ShareTip();

        share1.sharetoBean("乐软科技","http://www.happysoft.cc/", "");

    });


    //网易微博
    $('.slide ul li:eq(8)').click( function () {
        var share1=new ShareTip();

        share1.sharetoWangYi("乐软科技","http://www.happysoft.cc/", "");

    });

    //百度贴吧
    $('.slide ul li:eq(9)').click( function () {
        var share1=new ShareTip();

        share1.sharetoBaidu("乐软科技","http://www.happysoft.cc/", "");

    });

    $('span').click(function () {
        var speed=20;

        var  length= $(window).scrollTop();

        var height=$('body').height();
        var height1=document.documentElement.clientHeight;

        var timer= setInterval(function () {
            var  len= $(window).scrollTop();

            $(window).scrollTop(len+speed);
            if(len>=length+560||len==height-height1){
                clearInterval(timer);
            }
        },40);


    });








});



