function isInViewport(element) {
  const rect = element.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <=
      (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}

const timelineContainers = document.querySelectorAll(
  ".timeline-container-content"
);

const showViewedContainers = () => {
  const containers = [...timelineContainers].filter(
    (container) =>
      isInViewport(container) && !container.classList.contains("show")
  );
  containers.forEach((container) => container.classList.add("show"));
};

document.addEventListener("scroll", showViewedContainers);
window.onload = showViewedContainers;

//iPad button
function showHide() {
  let imageSrc = document.querySelector(".ipad-disp img");

  console.log(imageSrc.style.visibility);
  if (window.getComputedStyle(imageSrc).visibility === "visible") {
    imageSrc.style.opacity = 0;
    imageSrc.style.visibility = "hidden";
  } else {
    imageSrc.style.opacity = 1;
    imageSrc.style.visibility = "visible";
  }
}

//Old text showing idea.
/*
  let timeline = document.querySelector('.timeline');

  timeline.addEventListener("mouseout", function( event ) {

      let target = event.target;
      if(target.classList.contains("timeline-container"))
      {
          target = target.querySelector(".timeline-container-content");
      }

      if(target.classList.contains("timeline-container-content"))
      {
          target.style.opacity = 1;
          target.style.animationName = "none";
      }
    }, false  );


  */
