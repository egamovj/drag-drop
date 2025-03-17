const images = document.querySelectorAll(".image-box");
let draggedItem = null;

images.forEach((image) => {
  image.addEventListener("dragstart", () => {
    draggedItem = image;
    image.classList.add("dragging");
    setTimeout(() => (image.style.opacity = "0"), 0);
  });

  image.addEventListener("dragend", () => {
    setTimeout(() => {
      draggedItem.style.opacity = "1";
      draggedItem.classList.remove("dragging");
      draggedItem = null;
    }, 100);
  });

  image.addEventListener("dragover", (event) => {
    event.preventDefault();
  });

  image.addEventListener("drop", (event) => {
    event.preventDefault();
    if (draggedItem) {
      let parent = image.parentNode;
      let nextSibling =
        image === draggedItem.nextSibling ? image.nextSibling : image;
      parent.insertBefore(draggedItem, nextSibling);
    }
  });
});
