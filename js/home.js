const sidebarElement = document.getElementById("sidebar");

const carrouselContainerElement = document.getElementById("carrousel");
let bsCarousel = document.getElementById("bsCarousel");
const commentsElement = document.getElementById("comments");
const commentsBodyElement = document.getElementById("comments-body");
const showCommentsButton = document.getElementById("showComments");

// const carousel = bootstrap.Carousel.getInstance(bsCarousel);

let carousel = new bootstrap.Carousel(bsCarousel, {
  interval: 5000
});

bsCarousel.addEventListener("slide.bs.carousel", () => {
  console.log("DDD");
});

// console.log(carousel);
bsCarousel.addEventListener("slid.bs.carousel", () => {
});

showCommentsButton.addEventListener("click", () => {
  if (showCommentsButton.dataset.clicked === "true")
  {
    setAnimationsToComments(window.screen.width, true);
    commentsBodyElement.style.visibility = "hidden";
    showCommentsButton.style.backgroundColor = "#005CB9";
    showCommentsButton.dataset.clicked = "false";    
    carousel.cycle();
  }
  else if (showCommentsButton.dataset.clicked === "false")
  {
    setAnimationsToComments(window.screen.width, false);
    commentsBodyElement.style.visibility = "visible";
    showCommentsButton.style.backgroundColor = "#FF6B00";
    showCommentsButton.dataset.clicked = "true";
    carousel.pause();
  }
});

const setAnimationsToComments = (screenWidth, isActive) => {
  if (screenWidth <= 900 && isActive)
  {
    carrouselContainerElement.style.animation = "containerCarrouselBackMovil .4s forwards";
    bsCarousel.style.animation = "moveCarrouselBackMovil .4s forwards";
    commentsElement.style.animation = "showCommentsBackMovil .4s forwards";
  }
  else if (screenWidth > 900 && isActive)
  {
    carrouselContainerElement.style.animation = "containerCarrouselBackMovil .4s forwards";
    bsCarousel.style.animation = "moveCarrouselBackMovil .4s forwards";
    commentsElement.style.animation = "showCommentsBackMovil .4s forwards";
  }
  else if (screenWidth <= 900 && !isActive)
  {
    carrouselContainerElement.style.animation = "containerCarrouselMovil .4s forwards";  
    bsCarousel.style.animation = "moveCarrouselMovil .4s forwards";
    commentsElement.style.animation = "showCommentsMovil .4s forwards";
  }
  else if (screenWidth > 900 && !isActive)
  {
    carrouselContainerElement.style.animation = "containerCarrouselMovil .4s forwards";  
    bsCarousel.style.animation = "moveCarrouselMovil .4s forwards";
    commentsElement.style.animation = "showCommentsMovil .4s forwards";
  }
};