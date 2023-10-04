jQuery(function ($){
// カルーセル
$('.carousel').slick({
  autoplay: true,
  dots: true,
  infinite: true,
  autoplaySpeed: 1000,
  arrows: false,
});
//onebook3d
const imgArray = [
  'images/autoput.jpg',
  'images/nanjihosinogotoku.jpg','images/senhabokuwoegaku.jpg',
  'images/uruunoasagao.jpg','images/soragohann.jpg',
];
//ハンバーガーメニュー
$(".openbtn1").click(function () {
  $(this).toggleClass('active');
  $("#g-nav").toggleClass('panelactive');//ナビゲーションにpanelactiveクラスを付与
});
$("#g-nav a").click(function () {//ナビゲーションのリンクがクリックされたら
  $(".openbtn1").removeClass('active');//ボタンの activeクラスを除去し
  $("#g-nav").removeClass('panelactive');//ナビゲーションのpanelactiveクラスも除去
});
$('#mybook').onebook(imgArray, {
  startPage: 1,
  flip: 'soft',
  skin: 'dark',
  pageColor: '#FFFFFF',
  slope: 0,
  border: 25,
  language: 'en',
  cesh: true
});

$('#mybook').onebook(imgArray);
});