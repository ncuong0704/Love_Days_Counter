// for (let i = 1; i <= 79; i++) {
//   console.log(
//     `<img data-fancybox="images" data-caption="Image ${i}" href="./images/${i}.jpg"  src="./images/${i}.jpg" alt="hình ${i}">`
//   );
// }

$(".app__images").slick({
  infinite: true,
  speed: 1000,
  slidesToShow: 1,
  centerMode: true,
  variableWidth: true,
  autoplay: true,
  autoplaySpeed: 2000,
  pauseOnHover: false,
  pauseOnFocus: false,
  swipeToSlide: true,
  draggable: false,
  prevArrow: '<button class="slide-arrow prev-arrow">Quay lại</button>',
  nextArrow: '<button class="slide-arrow next-arrow">Tiếp</button>',
});

$("[data-fancybox]").fancybox({
  beforeShow: function (instance, current) {
    $(".app__images").slick("slickPause");
  },
  afterClose: function (instance, current) {
    $(".app__images").slick("slickPlay");
  },
});

const startDate = new Date("2023-09-22");
const currentDate = new Date();
const timeDifference = currentDate - startDate;
const daysDifference = Math.floor(timeDifference / (24 * 60 * 60 * 1000));
$(".app__total strong").text(daysDifference);

const audio = $(".audio__music")[0];
$(".audio__action").click(function (e) {
  e.preventDefault();
  $(".audio__action .fa-pause").toggleClass("active");
  $(".audio__action .fa-play").toggleClass("active");
  if (audio.paused) {
    audio.play();
  } else {
    audio.pause();
  }
});

$(".app").snowfall({ image: "./images/basic/red-heart-8118_256.gif", minSize: 15, maxSize: 42, flakeCount: 5 });

if(window.innerWidth < 1024){
    $(".app__person").each(function(inx, cur){
        $(cur).appendTo(".app__mobile");
    })
}