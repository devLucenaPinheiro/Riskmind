document.addEventListener("DOMContentLoaded", () => {
    const slider = document.querySelector(".slider");
    const slides = document.querySelectorAll(".slider img");
    let currentIndex = 0;
    const intervalTime = 5000;

    function nextSlide() {
        currentIndex = (currentIndex + 1) % slides.length;
        const nextScrollPosition = slides[currentIndex].offsetLeft;
        slider.scrollTo({ left: nextScrollPosition, behavior: "smooth" });
    }
    setInterval(nextSlide, intervalTime);
});

document.addEventListener("DOMContentLoaded", function() {
    const items = document.querySelectorAll('.item-3');
  
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('show');
          }
        });
      }, {
        threshold: 0.4
      });
      
      document.querySelectorAll('.item-3, .card').forEach(el => observer.observe(el));
    }
)
