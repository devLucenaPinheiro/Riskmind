document.addEventListener("DOMContentLoaded", function() {
  
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('show')
          }
        })
      }, {
        threshold: 0.4
      })
      
      document.querySelectorAll('.item-3, .card').forEach(el => observer.observe(el))
    }
)

document.addEventListener("DOMContentLoaded", function() {
  const text = "A RISKMIND"
  const target = document.getElementById("typewriter-text")
  let i = 0
  let hasTyped = false

  function type() {
    if (i < text.length) {
      target.textContent += text.charAt(i)
      i++
      setTimeout(type, 120)
    }
  }
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting && !hasTyped) {
        hasTyped = true
        type()
        observer.unobserve(entry.target)
      }
    })
  }, {
    threshold: 0.9
  })

  observer.observe(document.querySelector('.title'))
})

document.addEventListener("DOMContentLoaded", function () {
  const paragraphs = document.querySelectorAll('.description')

  const fadeObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible')
        fadeObserver.unobserve(entry.target)
      }
    })
  }, {
    threshold: 0.6
  })

  paragraphs.forEach(p => fadeObserver.observe(p))
})

const menuToggle = document.getElementById('menu-toggle')
const navList = document.getElementById('nav-list')
const menuOverlay = document.getElementById('menu-overlay')

function closeMenu() {
  menuToggle.classList.remove('active')

  navList.classList.add('menu-fade-slide-out')
  menuOverlay.classList.add('overlay-fade-out')

  setTimeout(() => {
    navList.classList.remove('show', 'menu-fade-slide-out')
    menuOverlay.classList.remove('show', 'overlay-fade-out')
  }, 400)
}

menuToggle.addEventListener('click', () => {
  const isOpen = navList.classList.contains('show')
  if (isOpen) {
    closeMenu()
  } else {
    navList.classList.add('show')
    menuToggle.classList.add('active')
    menuOverlay.classList.add('show')
  }
})

menuOverlay.addEventListener('click', () => {
  closeMenu()
})

const navLinks = document.querySelectorAll('#nav-list a')

navLinks.forEach(link => {
  link.addEventListener('click', () => {
    closeMenu()
  })
})

document.addEventListener('DOMContentLoaded', () => {
  const palavras = ["veritatis", "temporibus", "accusamus", "quae", "odio"];
  const span = document.querySelector('.variavel');
  let index = 0;

  setInterval(() => {
    span.style.opacity = 0;

    setTimeout(() => {
      span.textContent = palavras[index];
      span.style.opacity = 1;
      index = (index + 1) % palavras.length;
    }, 1000);
  }, 4000);
});