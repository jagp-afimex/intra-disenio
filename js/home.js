const sidebarElement = document.getElementById("sidebar");
const carrouselElement = document.getElementById("carrousel");
const commentsElement = document.getElementById("comments");
const showCommentsButton = document.getElementById("showComments");
const carrouselContainerElement = document.getElementById("carrousel-container");

showCommentsButton.addEventListener("click", () => {
  if (showCommentsButton.dataset.clicked === "true")
  {
    carrouselContainerElement.style.animation = "containerCarrouselBack .4s forwards";
    
    carrouselElement.style.animation = "moveCarrouselBack .4s forwards";
    commentsElement.style.animation = "showCommentsBack .4s forwards";
    
    showCommentsButton.style.backgroundColor = "#005CB9";
    
    showCommentsButton.dataset.clicked = "false";
    
    // carrouselContainerElement.style.transform = "translate(50%)";
    // carrouselElement.style.transform = "translate(150%)";
    // carrouselElement.style.transform = "scale(100%)";
    
    // commentsElement.style.transform = "translate(0%)";
    // showCommentsButton.dataset.clicked = "false";
    // showCommentsButton.style.backgroundColor = "#005CB9";
  }
  else if (showCommentsButton.dataset.clicked === "false")
  {
    carrouselContainerElement.style.animation = "containerCarrousel .4s forwards";  

    carrouselElement.style.animation = "moveCarrousel .4s forwards";
    commentsElement.style.animation = "showComments .4s forwards";
    
    showCommentsButton.style.backgroundColor = "#FF6B00";
    
    showCommentsButton.dataset.clicked = "true";
    
    // carrouselContainerElement.style.transform = "translate(0%)";
    // carrouselElement.style.transform = "translate(0%)";
    // carrouselElement.style.transform = "scale(75%)";

    // commentsElement.style.transform = "translate(95%)";
    // showCommentsButton.dataset.clicked = "true";
    // showCommentsButton.style.backgroundColor = "#FF6B00";
  }
});

window.addEventListener("load", () => {
  console.log(window.screen.width);
});

window.addEventListener("resize", () => {
  console.log(window.screen.width);
});

// sidebar.addEventListener("mousemove", () => {
  // carrouselContainerElement.style.transition = "12s all ease-out";
  // carrouselElement.style.transform = "translate(0%)";
  // commentsElement.style.transform = "translate(95%)";
  // carrouselElement.style.transform = "scale(75%)";
  // showCommentsButton.style.backgroundColor = "#FF6B00";
//   console.log("Por encima...");
//   const sidebarItems = document.querySelectorAll(".sidebar-nav__link-text");
//   sidebarItems.forEach(item => {
//     item.style.display = "inline";
//   });
// });
