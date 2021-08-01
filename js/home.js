const sidebarElement = document.getElementById("sidebar");

const carrouselContainerElement = document.getElementById("carrousel");
const splideCarrouselElement = document.getElementById("splide-carrousel");
const commentsElement = document.getElementById("comments");
const commentsBodyElement = document.getElementById("comments-body");
const showCommentsButton = document.getElementById("showComments");

showCommentsButton.addEventListener("click", () => {
  if (showCommentsButton.dataset.clicked === "true")
  {
    setAnimationsToComments(window.screen.width, true);
    commentsBodyElement.style.visibility = "hidden";
    showCommentsButton.style.backgroundColor = "#005CB9";
    showCommentsButton.dataset.clicked = "false";    
  }
  else if (showCommentsButton.dataset.clicked === "false")
  {
    setAnimationsToComments(window.screen.width, false);
    commentsBodyElement.style.visibility = "visible";
    showCommentsButton.style.backgroundColor = "#FF6B00";
    showCommentsButton.dataset.clicked = "true";
  }
});

// showCommentsButton.addEventListener("ontouchend", () => {
//   console.log("fola");
// });

const setAnimationsToComments = (screenWidth, isActive) => {
  if (screenWidth <= 900 && isActive)
  {
    carrouselContainerElement.style.animation = "containerCarrouselBackMovil .4s forwards";
    splideCarrouselElement.style.animation = "moveCarrouselBackMovil .4s forwards";
    commentsElement.style.animation = "showCommentsBackMovil .4s forwards";
  }
  else if (screenWidth > 900 && isActive)
  {
    carrouselContainerElement.style.animation = "containerCarrouselBack .4s forwards";
    splideCarrouselElement.style.animation = "moveCarrouselBack .4s forwards";
    commentsElement.style.animation = "showCommentsBack .4s forwards";
  }
  else if (screenWidth <= 900 && !isActive)
  {
    carrouselContainerElement.style.animation = "containerCarrouselMovil .4s forwards";  
    splideCarrouselElement.style.animation = "moveCarrouselMovil .4s forwards";
    commentsElement.style.animation = "showCommentsMovil .4s forwards";
  }
  else if (screenWidth > 900 && !isActive)
  {
    carrouselContainerElement.style.animation = "containerCarrousel .4s forwards";  
    splideCarrouselElement.style.animation = "moveCarrousel .4s forwards";
    commentsElement.style.animation = "showComments .4s forwards";
  }
};