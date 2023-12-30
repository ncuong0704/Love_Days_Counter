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
    src: "./music/chimotdemnuathoi.mp3",
    name: "CHỈ MỘT ĐÊM NỮA THÔI",
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
let nameMusic = musicRandom.name;
$(".btn__play").click(function (e) {
  e.preventDefault();
  $(".btn__play .fa-pause, .btn__play .fa-play").toggleClass("active");
  $(".audio__name").text(nameMusic);
  if (audio.paused) {
    audio.play();
    $(".app__dance").addClass("active");
    audio.addEventListener("ended", endedHandler);
  } else {
    audio.pause();
    $(".app__dance").removeClass("active");
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
  $(".app__dance").addClass("active");
  audio.addEventListener("ended", endedHandler);
}
function newYearMusic() {
  $(audio).attr("src", "./music/hpny.mp3");
  $(".btn__play .fa-pause").addClass("active");
  $(".btn__play .fa-play").removeClass("active");
  $(".audio__name").text("ABBA - Happy New Year");
  nameMusic = "ABBA - Happy New Year";
  audio.play();
  $(".app__dance").addClass("active");
  audio.addEventListener("ended", endedHandler);
}
$(".btn__change").click(function (e) {
  e.preventDefault();
  changeMusic();
});

audio.addEventListener("timeupdate", function () {
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
  changeMusic();
}

// sự kiện

const startDate = new Date("2023-09-22");
const currentDate = new Date();
const currentDay = currentDate.getDate();
const currentMonth = currentDate.getMonth() + 1;
const timeDifference = currentDate - startDate;
const daysDifference = Math.floor(timeDifference / (24 * 60 * 60 * 1000));
$(".app__total strong").text(daysDifference);
console.log(daysDifference)
if (daysDifference % 100 === 0) {
  $(".modal").addClass("active");
  $(".popup").addClass("active");
  $(".popup__content").html(`Chúc mừng anh và bé được <br /><strong>${daysDifference} ngày</strong> bên nhau.`);
  $(".popup__action").click(function (e) {
    e.preventDefault();
    $(".modal").removeClass("active");
    $(".popup").removeClass("active");
    changeMusic();
    $(".stage-container").addClass("active");
    // CodePen profile header doesn't need audio, just initialize.
    if (IS_HEADER) {
      init();
    } else {
      // Allow status to render, then preload assets and start app.
      setTimeout(() => {
        soundManager.preload().then(init, (reason) => {
          // Codepen preview doesn't like to load the audio, so just init to fix the preview for now.
          init();
          // setLoadingStatus('Error Loading Audio');
          return Promise.reject(reason);
        });
      }, 0);
    }
  });
}
if (currentDay == 22 && currentMonth == 9) {
  $(".modal").addClass("active");
  $(".popup").addClass("active");
  const year = Math.floor(daysDifference / 365);
  $(".popup__content").html(`Chúc mừng anh và bé được <br /><strong>${year} năm</strong> bên nhau.`);
  $(".popup__action").click(function (e) {
    e.preventDefault();
    $(".modal").removeClass("active");
    $(".popup").removeClass("active");
    changeMusic();
    $(".stage-container").addClass("active");
    // CodePen profile header doesn't need audio, just initialize.
    if (IS_HEADER) {
      init();
    } else {
      // Allow status to render, then preload assets and start app.
      setTimeout(() => {
        soundManager.preload().then(init, (reason) => {
          // Codepen preview doesn't like to load the audio, so just init to fix the preview for now.
          init();
          // setLoadingStatus('Error Loading Audio');
          return Promise.reject(reason);
        });
      }, 0);
    }
  });
}
if (currentDay == 1 && currentMonth == 1) {
  $(".modal").addClass("active");
  $(".popup").addClass("active");
  $(".popup__content").html(
    `Chúc mừng năm mới <strong> ${currentDate.getFullYear()} </strong>, mãi mãi bên nhau em nhé <strong><i class="fa-solid fa-heart"></i></strong>`
  );
  $(".popup__action").click(function (e) {
    e.preventDefault();
    $(".modal").removeClass("active");
    $(".popup").removeClass("active");
    newYearMusic()
    $(".stage-container").addClass("active");
    // CodePen profile header doesn't need audio, just initialize.
    if (IS_HEADER) {
      init();
    } else {
      // Allow status to render, then preload assets and start app.
      setTimeout(() => {
        soundManager.preload().then(init, (reason) => {
          // Codepen preview doesn't like to load the audio, so just init to fix the preview for now.
          init();
          // setLoadingStatus('Error Loading Audio');
          return Promise.reject(reason);
        });
      }, 0);
    }
  });
}

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
      $("[data-fancybox]").fancybox({
        beforeShow: function (instance, current) {
          $(".app__images").slick("slickPause");
        },
        afterClose: function (instance, current) {
          $(".app__images").slick("slickPlay");
        },
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

$(".app").snowfall({ image: "./images/basic/red-heart-8118_256.gif", minSize: 15, maxSize: 42, flakeCount: 10 });

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
