
var htmlImages = "";
var imagesToLoad = 48; // Số lượng ảnh cần tải

for (let i = 1; i <= imagesToLoad; i++) {
  // Kiểm tra ảnh có tồn tại trước khi chèn vào trang
  checkImageExistence(i, function (exists) {
    if (exists) {
      htmlImages += `<img
        data-fancybox="images"
        loading="lazy"
        data-caption="Image ${i}-min"
        href="./images/slider-min/${i}-min.jpg"
        src="./images/slider-min/${i}-min.jpg"
        alt="hình ${i}-min"
      />`;
    } else {
      console.log(`Image ${i} does not exist.`);
    }

    // Kiểm tra xem đã tải đủ số lượng ảnh chưa
    if (--imagesToLoad === 0) {
      $(".app__images").html(htmlImages);
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
    }
  });
}

function checkImageExistence(imageNumber, callback) {
  var img = new Image();
  img.onload = function () {
    callback(true);
  };
  img.onerror = function () {
    callback(false);
  };
  img.src = `./images/slider-min/${imageNumber}-min.jpg`;
}


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

if (window.innerWidth < 1024) {
  // mobile
  $(".app__person").each(function (inx, cur) {
    $(cur).appendTo(".app__mobile");
  });
} else {
  // desktop
}

const heightApp = $(".app").height();
const heightTop = $(".app__top").height() + 40;
console.log(heightApp);
console.log(heightTop);
$(".app__body").height(`${heightApp - heightTop}px`);
