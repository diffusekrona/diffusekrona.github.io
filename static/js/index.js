// Disable Video.js help message
window.HELP_IMPROVE_VIDEOJS = false;

// Image interpolation config
var INTERP_BASE = "./static/interpolation/stacked";
var NUM_INTERP_FRAMES = 240;
var interp_images = [];

function preloadInterpolationImages() {
  for (var i = 0; i < NUM_INTERP_FRAMES; i++) {
    var path = INTERP_BASE + '/' + String(i).padStart(6, '0') + '.jpg';
    interp_images[i] = new Image();
    interp_images[i].src = path;
  }
}

function setInterpolationImage(i) {
  var image = interp_images[i];
  image.ondragstart = () => false;
  image.oncontextmenu = () => false;
  $('#interpolation-image-wrapper').empty().append(image);
}

// Run everything when DOM is ready
$(document).ready(function () {
  console.log("index.js loaded");

  // Navbar burger toggle
  $(".navbar-burger").click(function () {
    $(".navbar-burger").toggleClass("is-active");
    $(".navbar-menu").toggleClass("is-active");
  });

  // Initialize carousel
  var options = {
    slidesToScroll: 1,
    slidesToShow: 3,
    loop: true,
    infinite: true,
    autoplay: false,
    autoplaySpeed: 3000,
  };
  var carousels = bulmaCarousel.attach('.carousel', options);

  for (var i = 0; i < carousels.length; i++) {
    carousels[i].on('before:show', state => {
      console.log(state);
    });
  }

  // Optional: specific carousel instance handling
  var element = document.querySelector('#my-element');
  if (element?.bulmaCarousel) {
    element.bulmaCarousel.on('before-show', function (state) {
      console.log(state);
    });
  }

  // Slider for image interpolation
  preloadInterpolationImages();
  $('#interpolation-slider').on('input', function () {
    setInterpolationImage(this.value);
  });
  setInterpolationImage(0);
  $('#interpolation-slider').prop('max', NUM_INTERP_FRAMES - 1);

  // Attach bulmaSlider
  bulmaSlider.attach();

  // BibTeX copy-to-clipboard
  document.querySelector('.copy-button')?.addEventListener('click', function () {
    var copyText = document.querySelector("#bibtex");
    navigator.clipboard.writeText(copyText.innerText)
      .then(() => console.log('Copied BibTeX to clipboard'))
      .catch(err => console.error('Clipboard copy failed:', err));
  });

  // Toggle extra image (More Results)
  document.getElementById('toggleButton')?.addEventListener('click', function () {
    var img = document.getElementById('extraImage');
    if (img) {
      img.style.display = (img.style.display === "none" || img.style.display === "") ? "block" : "none";
    }
  });
});
