$(function(){//ローディング画面
  $(window).on('load',function(){
      $('.loader').delay(150).fadeOut(500);
      $('.loader-bg').delay(200).fadeOut(700);
  });
  setTimeout(function(){
      $('.loader-bg').fadeOut(400);
  },2000);
});

$(function() {//slick
  $('.slick').slick({
      fade: true,
      autoplay: true,
      speed: 750,
      autoplaySpeed : 3000,
      pauseOnFocus: false,
      pauseOnHover: false,
      arrows: false,
      swipe: true,
      dots: true,
  })
});

$(".openbtn1").click(function () {
  $(this).toggleClass('active');//ボタンがクリックされたらactiveクラスを付与
    $("#g-nav").toggleClass('panelactive');//ナビゲーションにpanelactiveクラスを付与
});

$("#g-nav a").click(function () {
    $(".openbtn1").removeClass('active');//リンクがクリックされたらボタンのactiveクラスを除去
    $("#g-nav").removeClass('panelactive');//ナビゲーションのpanelactiveクラスを除去
});

$(function(){
  $(window).scroll(function (){
    $('.js-fade').each(function(){//スクロールされたときにフェードイン
      var pos = $(this).offset().top;
      var scroll = $(window).scrollTop();
      var windowHeight = $(window).height();
      if (scroll > pos - windowHeight + 100){
        $(this).addClass('scroll');
      }
    });
  });
});


// eachTextAnimeにappeartextというクラスを付ける
function textanimeControl() {
  $('.textanime').each(function () {
    var elemPos = $(this).offset().top - 50;
    var scroll = $(window).scrollTop();
    var windowHeight = $(window).height();
    if (scroll >= elemPos - windowHeight) {
      $(this).addClass("appeartext");

    } else {
      $(this).removeClass("appeartext");
    }
  });
}

// 画面をスクロール
$(window).scroll(function () {
  textanimeControl();
});

// 画面が読み込まれた時
$(window).on('load', function () {
  var element = $(".textanime");
  element.each(function () {
    var text = $(this).text();
    var textbox = "";
    text.split('').forEach(function (t, i) {
      if (t !== " ") {
        if (i < 10) {
          textbox += '<span style="animation-delay:.' + i + 's;">' + t + '</span>';
        } else {
          var n = i / 10;
          textbox += '<span style="animation-delay:' + n + 's;">' + t + '</span>';
        }

      } else {
        textbox += t;
      }
    });
    $(this).html(textbox);
  });

  textanimeControl();
});