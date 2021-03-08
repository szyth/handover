
$(".finger1").hover(
  function () {
    $("#palm-path").css({
      fill: "#004445",
      transition: "1000ms ease",
    });
  },
  function () {
    $("#palm-path").css({
      fill: "#000",
    });
  }
);
$(".finger2").hover(
  function () {
    $("#palm-path").css({
      transition: "1000ms ease",
      fill: "#581845",
    });
  },
  function () {
    $("#palm-path").css({
      fill: "#000",
    });
  }
);
$(".finger3").hover(
  function () {
    $("#palm-path").css({
      transition: "1000ms ease",
      fill: "#07617d",
    });
  },
  function () {
    $("#palm-path").css({
      fill: "#000",
    });
  }
);
$(".finger4").hover(
  function () {
    $("#palm-path").css({
      transition: "1000ms ease",
      fill: "#654321",
    });
  },
  function () {
    $("#palm-path").css({
      fill: "#000",
    });
  }
);
$(".finger5").hover(
  function () {
    $("#palm-path").css({
      transition: "1000ms ease",
      fill: "#2a363b",
    });
  },
  function () {
    $("#palm-path").css({
      fill: "#000",
    });
  }
);
$("#palm").tilt({
  axis: x,
  glare: true,
  maxGlare: 0.5,
  reset: false,
});
