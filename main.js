// Navbar Background

window.addEventListener("scroll", () => {

    const nav = document.querySelector("nav");

    if(window.scrollY > 50){
        nav.style.background = "rgba(0,0,0,.85)";
    }else{
        nav.style.background = "rgba(0,0,0,.3)";
    }

});

// Scroll Reveal

const reveals = document.querySelectorAll(".reveal");

const observer = new IntersectionObserver((entries)=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){
            entry.target.classList.add("active");
        }

    });

},{
    threshold:0.2
});

reveals.forEach(item=>{
    observer.observe(item);
});

// open modal with clicked image
function openModal(img) {
  const modal = document.getElementById("imgModal");
  const modalImg = document.getElementById("modalImg");

  modal.style.display = "flex";
  modalImg.src = img.src;
}

// close modal
function closeModal() {
  document.getElementById("imgModal").style.display = "none";
}

// click outside image closes modal
document.addEventListener("DOMContentLoaded", () => {
  const modal = document.getElementById("imgModal");

  modal.addEventListener("click", (e) => {
    if (e.target.id === "imgModal") {
      closeModal();
    }
  });
});
