//画像ホバー時のズームエフェクト
$(function() {
  $('.zoom_img').hover(
    // マウスポインターが画像に乗った時の動作
    function(e) {
      $(this).css('transform', 'scale(1.05)');
    },
    // マウスポインターが画像から外れた時の動作
    function(e) {
      $(this).css('transform', 'scale(1)');
    }
  );
});

//ボタンホバー時の反転エフェクト
$(function() {
  $('.sidebar_area ul li:nth-child(7) div span').hover(
    // マウスポインターが画像に乗った時の動作
    function(e) {
      $(this).addClass('active_btn_online_store_btn');
    },
    // マウスポインターが画像から外れた時の動作
    function(e) {
      $(this).removeClass('active_btn_online_store_btn');
    }
  );
});

$(function() {
  $('.sidebar_area ul li div span').hover(
    // マウスポインターが画像に乗った時の動作
    function(e) {
      $(this).addClass('active_btn');
    },
    // マウスポインターが画像から外れた時の動作
    function(e) {
      $(this).removeClass('active_btn');
    }
  );
});

//inviewスクロールアニメーション
$(window).bind("load", function() { //load後にbind
	$('.mv_bg01').on('inview', function() {
    $(this).css("opacity","1");
	});

  // $('.mv_bg01 img').on('inview', function() {
  //   $(this).css("width","301px");
  //   $(this).css("top","120px");
  //   $(this).css("margin-left","-180px");
  // });

	$('.mv_bg02').on('inview', function() {
	  $(this).css("opacity","1");  
	});

	$('.mv_bg03').on('inview', function() {
	  $(this).css("opacity","1");
	});
});

$(window).on('load', function() { //load後にbind
  $('.hfadeIn_sub01_trigger').on('inview', function() {
    $('.banner_area_inner').css('opacity','1.0');
    $('.banner_area_inner div').css('opacity','1.0');
  });
});

$('.hfadeIn').on('inview', function() {
  $(this).addClass('active_hfadeIn');
});

$('.vfadeIn').on('inview', function() {
  $(this).addClass('active_vfadeIn');
});

$('.fadeIn').on('inview', function() {
  $(this).addClass('active_fadeIn');
});

//sidebarのリスト要素が順番に表示される
$(function(){ 
$('.dominoFade li').hide(); 
}); 
var i = 0; 
var int=0; 
$(window).bind("load", function() { //load後にbind
var int=setInterval("doFade(i)",150); 
}); 
function doFade() { 
var list = $('.dominoFade li').length; 
if (i >= list) { 
clearInterval(int); 
} 
$('.dominoFade li').eq(i).fadeIn(500); 
i++; 
} 

//footerのリスト要素が順番に表示される
$(function(){ 
$('.ft_dominoFade li').hide(); 
}); 
var ft_i = 0; 
var ft_int=0; 
$('#footer').on('inview', function(){ //#footerまでスクロールされたら実行
var ft_int=setInterval("ft_doFade(ft_i)",150); 
}); 
function ft_doFade() { 
var ft_list = $('.ft_dominoFade li').length; 
if (ft_i >= ft_list) { 
clearInterval(ft_int); 
} 
$('.ft_dominoFade li').eq(ft_i).fadeIn(500); 
ft_i++; 
} 

//遅延スクロール（パララックス）
$(window).on('load resize', function(){
  var winW = $(window).width();
  var devW = 767;
  if (winW <= devW) {
    //767px以下の時の処理
  $(function($){
    $(window).scroll(function(){
      var y = $(this).scrollTop();
      $('.sub_v_txt').addClass('sub_v_txt_fadein');
    });
  });    
  } else {
    //768pxより大きい時の処理
  $(function($){
    $(window).scroll(function(){
      var y = $(this).scrollTop();
      $('.sub_v_txt').addClass('sub_v_txt_fadein');
    });
  });    
  }
});