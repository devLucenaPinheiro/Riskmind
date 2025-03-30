document.addEventListener("DOMContentLoaded", () => {
    const slider = document.querySelector(".slider");
    const slides = document.querySelectorAll(".slider img");
    let currentIndex = 0;
    const intervalTime = 3000;

    function nextSlide() {
        currentIndex = (currentIndex + 1) % slides.length;
        const nextScrollPosition = slides[currentIndex].offsetLeft;
        slider.scrollTo({ left: nextScrollPosition, behavior: "smooth" });
    }

    setInterval(nextSlide, intervalTime);
});