const openEls = document.querySelectorAll("[data-open]");
const closeEls = document.querySelectorAll("[data-close]");
const isVisible = "is-visible";

for (const el of openEls) {
  el.addEventListener("click", function() {
    const modalId = this.dataset.open;
    document.getElementById(modalId).classList.add(isVisible);
  });
}

// Case: Clicked X button
for (const el of closeEls) {
  el.addEventListener("click", function() {
    this.parentElement.parentElement.classList.remove(isVisible);
    // Reload src to force video player to stop
    //document.querySelectorAll(".videoPlayer").src += '';
    closeVids();
    // = document.querySelector(".videoPlayer").src;
  });
}

// Case: Clicked outside modal content
document.addEventListener("click", e => {
    if (e.target == document.querySelector(".modal.is-visible")) {
      document.querySelector(".modal.is-visible").classList.remove(isVisible);
      // Reload src to force video player to stop
      closeVids();
      //document.querySelector(".videoPlayer").src = document.querySelector(".videoPlayer").src;
    }
  });
  
  // Case: Pushed ESC key
  document.addEventListener("keyup", e => {
    // if we press the ESC
    if (e.key == "Escape" && document.querySelector(".modal.is-visible")) {
      document.querySelector(".modal.is-visible").classList.remove(isVisible);
      closeVids();
      // Reload src to force video player to stop
      //document.querySelector(".videoPlayer").src = document.querySelector(".videoPlayer").src;
    }
  });

  function closeVids() {
    const vidmodals = document.querySelectorAll(".videoPlayer")
    vidmodals.forEach((item) => {
      item.src += '';
    });
  }