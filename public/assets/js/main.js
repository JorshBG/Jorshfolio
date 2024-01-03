const loadLanguagues = () => {
  if (localStorage.getItem('language')) {
    if (window.location.pathname !== '/' && localStorage.getItem('language') === 'es') {
      window.location.pathname = '/'
    } else if (localStorage.getItem('language') === 'en' && window.location.pathname !== '/en') {
      window.location.pathname = '/en'
    }
  } else {
    if (navigator.language.includes('en')) {
      window.location.pathname = '/en'
      localStorage.setItem('language', 'en')
    } else if (navigator.language.includes('es')) {
      window.location.pathname = '/'
      localStorage.setItem('language', 'es')
    } else {
      window.location.pathname = '/en'
      localStorage.setItem('language', 'en')
    }
  }
}

function rotateToMouse(e, card) {
  const element = card;
  let bounds = element.getBoundingClientRect();
  const mouseX = e.clientX;
  const mouseY = e.clientY;
  const leftX = mouseX - bounds.x;
  const topY = mouseY - bounds.y;
  const center = {
    x: leftX - bounds.width / 2,
    y: topY - bounds.height / 2,
  };
  const distance = Math.sqrt(center.x ** 2 + center.y ** 2);

  element.style.transform = `
  scale3d(1.015, 1.015, 1.015)
  rotate3d(
    ${center.y / 100},
    ${-center.x / 100},
    0,
    ${Math.log(distance) * 2}deg
  )
`;

}

const init3dCards = () => {
  const cards = document.querySelectorAll(".card");

  cards.forEach((card) => {
    card.addEventListener("mouseenter", () => {
      card.addEventListener("mousemove", (e) => rotateToMouse(e, card));
    });

    card.addEventListener("mouseleave", () => {
      card.removeEventListener("mousemove", (e) => rotateToMouse(e, card));
      card.style.transform = "";
      // card.style.background = "";
    });
  });

}

document.addEventListener('DOMContentLoaded', () => {
  loadLanguagues()
  init3dCards()
})
