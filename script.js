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

document.addEventListener("DOMContentLoaded", function() {
  const text = "A RISKMIND";
  const target = document.getElementById("typewriter-text");
  let i = 0;
  let hasTyped = false;

  function type() {
    if (i < text.length) {
      target.textContent += text.charAt(i);
      i++;
      setTimeout(type, 120);
    }
  }
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting && !hasTyped) {
        hasTyped = true;
        type();
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.9
  });

  observer.observe(document.querySelector('.title'));
});

document.addEventListener("DOMContentLoaded", function () {
  const paragraphs = document.querySelectorAll('.description');

  const fadeObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        fadeObserver.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.6
  });

  paragraphs.forEach(p => fadeObserver.observe(p));
});