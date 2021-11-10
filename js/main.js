function findOffset(element) {
  var top = 0,
    left = 0;

  do {
    top += element.offsetTop || 0;
    left += element.offsetLeft || 0;
    element = element.offsetParent;
  } while (element);

  return {
    top: top,
    left: left,
  };
}

window.onload = function () {
  var stickyHeader = document.getElementById("header");
  var headerOffset = findOffset(stickyHeader);

  window.onscroll = function () {
    // body.scrollTop is deprecated and no longer available on Firefox
    var bodyScrollTop =
      document.documentElement.scrollTop || document.body.scrollTop;

    if (bodyScrollTop > headerOffset.top) {
      stickyHeader.classList.add("active");
    } else {
      stickyHeader.classList.remove("active");
    }
  };
};
//ISOTOPE
let btns = $(".servicos .button-group button");

btns.click(function (e) {
  $(".servicos .button-group button").removeClass("active");
  e.target.classList.add("active");

  let selector = $(e.target).attr("data-filter");
  $(".servicos .grid").isotope({
    filter: selector,
  });
});

$(window).on("load", function () {
  $(".servicos .grid").isotope({
    filter: "*",
  });
});

//MAGNIFY
$(".grid .popup-link").magnificPopup({
  type: "image",
  gallery: {
    enabled: true,
    tPrev: "Anterior",
    tNext: "Próxima",
    tCounter: "%curr% de %total%",
  },
});

//OWL



$(".owl-carousel").owlCarousel({
  loop: true,
  margin: 30,
  autoplay: true,
  autoplayTimeout: 6000,
  dots: true,
  lazyLoad: true,
  nav: true,
  responsive: {
    0: {
      items: 1,
    },
    600: {
      items: 1,
    },
    1000: {
      items: 2,
    },
  },
});
$(document).ready(function () {
  $(".navbar-nav li a").click(function(event) {
    $(".navbar-collapse").collapse('hide');
  });
});




