// jshint esversion:6

// Code for responsive carousel cards

$('#carousel-price-1').on('slide.bs.carousel', function(e) {
  /*
      CC 2.0 License Iatek LLC 2018 - Attribution required
  */
  var $e = $(e.relatedTarget);
  var idx = $e.index();
  var itemsPerSlide = 5;
  var totalItems = $('#carousel-price-1 .carousel-item').length;

  if (idx >= totalItems - (itemsPerSlide - 1)) {
    var it = itemsPerSlide - (totalItems - idx);
    for (var i = 0; i < it; i++) {
      // append slides to end
      if (e.direction == "left") {
        $('#carousel-price-1 .carousel-item').eq(i).appendTo('#carousel-price-1 .carousel-inner');
      } else {
        $('#carousel-price-1 .carousel-item').eq(0).appendTo('#carousel-price-1 .carousel-inner');
      }
    }
  }
});


$('#carousel-price-2').on('slide.bs.carousel', function(e) {
  /*
      CC 2.0 License Iatek LLC 2018 - Attribution required
  */
  var $e = $(e.relatedTarget);
  var idx = $e.index();
  var itemsPerSlide = 5;
  var totalItems = $('#carousel-price-2 .carousel-item').length;

  if (idx >= totalItems - (itemsPerSlide - 1)) {
    var it = itemsPerSlide - (totalItems - idx);
    for (var i = 0; i < it; i++) {
      // append slides to end
      if (e.direction == "left") {
        $('#carousel-price-2 .carousel-item').eq(i).appendTo('#carousel-price-2 .carousel-inner');
      } else {
        $('#carousel-price-2 .carousel-item').eq(0).appendTo('#carousel-price-2 .carousel-inner');
      }
    }
  }
});




//Get the button
let mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

// Initialize and add map (-28.853807, 153.045506)
let map = new ol.Map({
  target: 'map',
  layers: [
    new ol.layer.Tile({
      source: new ol.source.OSM()
    })
  ],
  view: new ol.View({
    center: ol.proj.fromLonLat([153.045506, -28.853807]),
    zoom: 15
  }),

});

// Gift up
(function (g, i, f, t, u, p, s) { g[u] = g[u] || function() { (g[u].q = g[u].q || []).push(arguments);}; p = i.createElement(f); p.async = 1; p.src = t; s = i.getElementsByTagName(f)[0]; s.parentNode.insertBefore(p, s); })(window, document, 'script', 'https://cdn.giftup.app/dist/gift-up.js', 'giftup');
