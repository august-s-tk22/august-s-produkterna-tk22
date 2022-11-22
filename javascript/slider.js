// Here I did it so that the images move with the mouse. The swiper detects mouse movement and moves the images along with it.

const carousel = document.querySelector(".carousel");

let isDragStart = false,
  prevPageX,
  prevScrollLeft;

const dragStart = (e) => {
  isDragStart = true;
  prevPageX = e.pageX;
  prevScrollLeft = carousel.scrollLeft;
};

// pageX returns the horizontal coordinate of the mouse pointer.

const dragging = (e) => {
  if (!isDragStart) return;
  e.preventDefault();
  let positionDiff = e.pageX - prevPageX;
  carousel.scrollLeft = prevScrollLeft - positionDiff;
};

const dragStop = () => {
  isDragStart = false;
};

// By default isDragStart is false and will only allow if the mouse button is held down.

carousel.addEventListener("mousedown", dragStart);
carousel.addEventListener("mousemove", dragging);
carousel.addEventListener("mouseup", dragStop);
