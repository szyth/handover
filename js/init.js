function initparticles() {
  bubbles();
  confetti();
}

function bubbles() {
  $.each($(".particletext.bubbles"), function () {
    var bubblecount = ($(this).width() / 50) * 10;
    for (var i = 0; i <= bubblecount; i++) {
      var size = $.rnd(40, 80) / 10;
      $(this).append(
        '<span class="particle" style="top:' +
          $.rnd(20, 80) +
          "%; left:" +
          $.rnd(0, 95) +
          "%;width:" +
          size +
          "px; height:" +
          size +
          "px;animation-delay: " +
          $.rnd(0, 30) / 10 +
          's;"></span>'
      );
    }
  });
}

function confetti() {
  $.each($(".particletext.confetti"), function () {
    var confetticount = ($(this).width() / 50) * 10;
    for (var i = 0; i <= confetticount; i++) {
      $(this).append(
        '<span class="particle c' +
          $.rnd(1, 2) +
          '" style="top:' +
          $.rnd(10, 50) +
          "%; left:" +
          $.rnd(0, 100) +
          "%;width:" +
          $.rnd(6, 8) +
          "px; height:" +
          $.rnd(3, 4) +
          "px;animation-delay: " +
          $.rnd(0, 30) / 10 +
          's;"></span>'
      );
    }
  });
}
jQuery.rnd = function (m, n) {
  m = parseInt(m);
  n = parseInt(n);
  return Math.floor(Math.random() * (n - m + 1)) + m;
};

initparticles();

$(".finger1").hover(
  function () {
    $("#palm-path").css({
      transition: "1000ms ease",
      fill: "#004445",
    });
    $(".service1").fadeToggle();
  },
  function () {
    $("#palm-path").css({
      fill: "#000",
    });
    $(".service1").fadeToggle();
  }
);
$(".finger2").hover(
  function () {
    $("#palm-path").css({
      transition: "1000ms ease",
      fill: "#581845",
    });
    $(".service2").fadeToggle();
  },
  function () {
    $("#palm-path").css({
      fill: "#000",
    });
    $(".service2").fadeToggle();
  }
);
$(".finger3").hover(
  function () {
    $("#palm-path").css({
      transition: "1000ms ease",
      fill: "#07617d",
    });
    $(".service3").fadeToggle();
  },
  function () {
    $("#palm-path").css({
      fill: "#000",
    });
    $(".service3").fadeToggle();
  }
);
$(".finger4").hover(
  function () {
    $("#palm-path").css({
      transition: "1000ms ease",
      fill: "#654321",
    });
    $(".service4").fadeToggle();
  },
  function () {
    $("#palm-path").css({
      fill: "#000",
    });
    $(".service4").fadeToggle();
  }
);
$(".finger5").hover(
  function () {
    $("#palm-path").css({
      transition: "1000ms ease",
      fill: "#2a363b",
    });
    $(".service5").fadeToggle();
  },
  function () {
    $("#palm-path").css({
      fill: "#000",
    });
    $(".service5").fadeToggle();
  }
);
$("#palm").tilt({
  axis: x,
  glare: true,
  maxGlare: 0.5,
  reset: false,
});
