// Este es un ejemplo de como exportar funciones desde un archivo
// En index.js se importan estas funciones

// export const saludo = () => {
//    console.log('Hola mundo')
// };

//  export const despedida = () => {
//    console.log('Adiós mundo')
//  };

// Funcion que hace al menu sticky
const setMenuSticky = function (menuIdentifier) {
  let menuOffsetTop = menuIdentifier.offsetTop
  let links = [...menuIdentifier.querySelectorAll('a')]
  window.addEventListener('scroll', (event) => {
    event.preventDefault()
    ;(window.pageYOffset > menuOffsetTop)
      ? (() => {
        menuIdentifier.classList.add('menuSticky')
        links.map((link) => link.classList.add('menuSticky-link'))
      })()
      : (() => {
        menuIdentifier.classList.remove('menuSticky')
        links.map((link) => link.classList.remove('menuSticky-link'))
      })()
  })
}

const eventClickForSmoothScrolling = function (menuIdentifier) {
  menuIdentifier.addEventListener('click', (e) => {
    function smoothScroling (hash) {
      e.preventDefault()
      let end = hash
      initScroll(end)
    }
    let hash = (e.target.localName === 'span') || e.target.hash.slice(1)
    ;(document.getElementById(hash)) && smoothScroling(hash)
  })
}
const initScroll = function (end) {
  let ending = document.getElementById(end).offsetTop
  let scroll = window.scrollY
  let speed = 40
  const smoothScroling = (change) => {
    const scrollMoving = setInterval(() => {
      scroll = window.scrollY
      change ? scroll += speed : scroll -= speed
      window.scroll(0, scroll)
      change
        ? ((ending - 100) >= scroll) || clearInterval(scrollMoving)
        : (ending <= scroll) || clearInterval(scrollMoving)
    }, 10)
  }
  ;(ending >= scroll) && smoothScroling(true)
  ;(ending <= scroll) && smoothScroling(false)
}
const scrollup = function (button) {
  let end = button.parentNode.id
  button.addEventListener('click', (e) => {
    initScroll(end)
  })
}
const scrollupToggle = function (view, button) {
  let heightView = view.clientHeight
  let heightScroll = window.scrollY
  function viewButton (button) {
    const scrollerDown = setInterval(() => {
      heightScroll = window.scrollY
      ;(heightView <= heightScroll) && (() => {
        clearInterval(scrollerDown)
        button.classList.toggle('active')
        scrollup(button)
        hideButton(button)
      })()
    }, 500)
  }
  function hideButton () {
    const scrollerUp = setInterval(() => {
      heightScroll = window.scrollY
      ;(heightView >= heightScroll) && (() => {
        clearInterval(scrollerUp)
        button.classList.toggle('active')
        viewButton(button)
      })()
    }, 500)
  }
  ;(heightView >= heightScroll) && viewButton(button)
}

export {
  setMenuSticky,
  eventClickForSmoothScrolling,
  scrollupToggle
}
