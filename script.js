const carousel = document.querySelector(".carousel");

// Here I did it so that the images move with the mouse (sliding).

const dragging = (e) => {
    console.log(e.pageX); 
}

carousel.addEventListener("mousemove", dragging); 