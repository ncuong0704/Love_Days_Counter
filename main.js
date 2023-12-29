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

// audio
const musicList = {
  1: {
    src: "./music/bantinhcadautien.mp3",
    name: "Bản Tình Ca Đầu Tiên",
  },
  2: {
    src: "./music/coemcho.mp3",
    name: "Có em chờ",
  },
  3: {
    src: "./music/cunganh.mp3",
    name: "Cùng Anh",
  },
  4: {
    src: "./music/danhchoem.mp3",
    name: "dành cho em",
  },
  5: {
    src: "./music/dungnguoidungthoidiem.mp3",
    name: "Đúng người đúng thời điểm",
  },
  6: {
    src: "./music/honcayeu.mp3",
    name: "hơn cả yêu",
  },
  7: {
    src: "./music/loiyeudaikho.mp3",
    name: "Lời yêu dại khờ",
  },
  8: {
    src: "./music/motnha.mp3",
    name: "một nhà",
  },
  9: {
    src: "./music/noinaycoanh.mp3",
    name: "Nơi này có anh",
  },
  10: {
    src: "./music/nointernet.mp3",
    name: "No internet",
  },
  11: {
    src: "./music/qualau.mp3",
    name: "quá lâu",
  },
  12: {
    src: "./music/thiendang.mp3",
    name: "thiên đàng",
  },
  13: {
    src: "./music/tinhyeudieuky.mp3",
    name: "tình yêu diệu kỳ",
  },
  14: {
    src: "./music/tinhyeutuyetvoi.mp3",
    name: "tình yêu tuyệt vời",
  },
  15: {
    src: "./music/yeuemratnhieu.mp3",
    name: "Yêu em rất nhiều",
  },
};
function getRandomMusic() {
  var newRandomNumber;
  do {
    newRandomNumber = Math.floor(Math.random() * 15) + 1;
  } while (newRandomNumber === currentRandomNumber);
  currentRandomNumber = newRandomNumber;
  return musicList[currentRandomNumber];
}
var currentRandomNumber; 
const audio = $(".audio__music")[0];
const musicRandom = getRandomMusic();
$(audio).attr("src", musicRandom.src);
let nameMusic = musicRandom.name
$(".btn__play").click(function (e) {
  e.preventDefault();
  $(".btn__play .fa-pause, .btn__play .fa-play").toggleClass("active");
  $(".audio__name").text(nameMusic);
  if (audio.paused) {
    audio.play();
    audio.addEventListener("ended", endedHandler);
  } else {
    audio.pause();
  }
});
function changeMusic() {
  const nextMusic = getRandomMusic();
  $(audio).attr("src", nextMusic.src);
  $(".btn__play .fa-pause").addClass("active");
  $(".btn__play .fa-play").removeClass("active");
  $(".audio__name").text(nextMusic.name);
  nameMusic = nextMusic.name;
  audio.play();
  audio.addEventListener("ended", endedHandler);
}

$(".btn__change").click(function (e) {
  e.preventDefault();
  changeMusic();
});

audio.addEventListener("timeupdate", function() {
  // Cập nhật thời gian hiện tại của bài hát
  var currentTime = audio.currentTime;
  $(".audio__time")[0].textContent = formatTime(currentTime);
});
function formatTime(time) {
  var minutes = Math.floor(time / 60);
  var seconds = Math.floor(time % 60);
  seconds = seconds < 10 ? "0" + seconds : seconds;
  return minutes + ":" + seconds;
}
function endedHandler() {
  console.log("đã hết bài");
  changeMusic();
}