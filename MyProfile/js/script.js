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
  'images/nanjihisinigotoku.jpg','images/senhabokuwoegaku.jpg',
  'images/uruunoasagao.jpg','images/soragohann.jpg',
];

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