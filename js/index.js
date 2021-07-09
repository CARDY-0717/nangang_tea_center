//----------報名區1活動卡牌-------------------
$('.owl-carousel').owlCarousel({
    loop:true,
    // nav: true, // 顯示點點
    autoplay: true, //自動輪播
    autoplayTimeout: 3000, //輪播時間
    autoplayHoverPause: true, // 滑鼠經過時暫停
    responsive:{
        0:{
            items:1 // 螢幕大小為 0~600 顯示 1 個項目
        },
        600:{
            items:3 // 螢幕大小為 600~1000 顯示 3 個項目
        },
        1000:{
            items:4 // 螢幕大小為 1000 以上 顯示 5 個項目
        }
    }
});

//----------回到頂端按鈕---------------------------
$(function(){
    $('#BackTop').click(function(){ 
        $('html,body').animate({scrollTop:0}, 333);
    });
    $(window).scroll(function() {
        if ( $(this).scrollTop() > 300 ){
            $('#BackTop').fadeIn(222);
        } else {
            $('#BackTop').stop().fadeOut(222);
        }
    }).scroll();
});

//----------headeroom往下捲消失，往上卷出現----------
// grab an element
var myElement = document.querySelector("header");
// construct an instance of Headroom, passing the element
var headroom  = new Headroom(myElement);
// initialise
headroom.init();

