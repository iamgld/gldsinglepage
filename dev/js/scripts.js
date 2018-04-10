// importacion del archivo de helpers
import {createCustomElement} from './helpers'
// importacion del archivo de data
import courses from './data/courses.json'
// Importacion de modulos
import {
  setMenuSticky,
  eventClickForSmoothScrolling,
  scrollupToggle
} from './modules/menu'

((c) => {
  // Funcion que hace sticky al menu
  setMenuSticky(document.getElementById('menu'))
  // Funcion que toda al menu de un efeco smooth
  eventClickForSmoothScrolling(document.getElementById('menu'))
  // Funcion que hace aparece el button de ir arriba
  // Primer parametro elemento el cual sera el limite para que aparesca el button
  // Segundo parametro elemento donde esta el buttom
  scrollupToggle(
    document.getElementById('bannerHeader'),
    document.getElementById('scrollupButton')
  )
  // Funcion de los contenidos toggleables en la seccion aboutme
  const handlerClickOnAboutme = function (button, target) {
    const aboutmeClick = (button, target) => {
      let status = false
      button.addEventListener('click', (e) => {
        // prevenimos un siguiente click que impida a la animacion terminar
        button.setAttribute('disabled', 'true')
        // Añadimos will-change a los elementos que van a ser animados
        target.style.willChange = 'max-height'
        // Animacion de entrada del contenido oculto
        target.classList.toggle('enable')
        /**
         * El operador es para agregar enable en el primer click y luego en los posteriores
         * ir haciendo toggle  entre enable y disable
         */
        status
          //  Animacion de salida del contenido oculto
          ? target.classList.toggle('disable')
          : status = true
        // Removemos el will-change cuando las animaciones terminen
        target.addEventListener('animationend', (e) => {
          e.target.style.willChange = 'auto'
          button.removeAttribute('disabled')
        })
      })
    }
    button
      ? aboutmeClick(button, target)
      : target
        ? c.error('No se ha encontrado el button')
        : c.error('No se ha encontrado el target')
  }
  handlerClickOnAboutme(
    document.querySelector('.aboutme-button'),
    document.querySelector('.aboutme-text:last-of-type')
  )
  // Funcion de la ventana modal en la seccion studies
  // Imprimir modal
  const printModal = content => {
    // contenedor el contenido del modal
    const modalContentEl = createCustomElement('div', {
      class: 'modalStudies-content'
    }, [content])
    // contenedor del modal
    const modalContainerEl = createCustomElement('div', {
      id: 'modalStudies',
      class: 'modalStudies'
    }, [modalContentEl])
    // imprimir el modal
    document.body.appendChild(modalContainerEl)
    // remover modal
    const removeModal = () => {
      document.body.removeChild(modalContainerEl)
    }
    modalContainerEl.addEventListener('click', (e) => {
      (e.target === modalContainerEl) && removeModal()
    })
  }
  // estructura del contenido del modal
  const createContentModal = (coursesList) => {
    let content = []
    coursesList.map(item => {
      content.push(`
        <section class="modalStudies-content_item">
          <div class="modalStudies-content_boxone">
            <p class="modalStudies-content_paragraph">${item.name}</p>
          </div>
          <div class="modalStudies-content_boxtwo">
            <a href="${item.url}" class="modalStudies-content_link">Ir</a>
          </div>
        </section>
      `)
    })
    return content.join(' ')
  }
  const handlerClickOnStudies = (element) => {
    const studiesClick = () => {
      element.addEventListener('click', (e) => {
        (e.target.innerText === 'Cursos en Platzi')
          ? printModal(createContentModal(courses.platzy))
          : c.error('No se encontro el button platzy')
        ;(e.target.innerText === 'Cursos en Edteam')
          ? printModal(createContentModal(courses.edteam))
          : c.error('No se encontro el button edteam')
      })
    }
    element
      ? studiesClick()
      : c.error('No se encontro el elemento')
  }
  handlerClickOnStudies(document.getElementById('studies'))
})(console)
