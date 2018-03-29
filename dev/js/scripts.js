// Importacion de modulos
import { setMenuSticky, eventClickForSmoothScrolling, scrollupEvent } from "./modules/menu"
// --------------------------------------------------------------------------------
// Funcion que hace sticky al menu
setMenuSticky(
	document.getElementById('menu')
)
// --------------------------------------------------------------------------------
// Funcion que toda al menu de un efeco smooth
eventClickForSmoothScrolling(
	document.getElementById('menu')
)
// --------------------------------------------------------------------------------
// Funcion que hace aparece el button de ir arriba
// Primer parametro elemento el cual sera el limite para que aparesca el button
// Segundo parametro elemento donde esta el buttom
scrollupEvent(
	document.getElementById('bannerHeader'),
	document.getElementById('scrollupButton')
)
// --------------------------------------------------------------------------------
// Funcion de los contenidos toggleables en la seccion aboutme
const changeDirectionAboutmeButton = function (element) {
	if (element) {
		let button = element.querySelector('.aboutme-button')
		let status = false
		if (button) {
			button.addEventListener('click', (e) => {

				// Cambio del icono de flecha y animationTimingFunction
				button.classList.toggle('icon-arrow-down')
				button.classList.toggle('icon-arrow-up')
				button.classList.contains('icon-arrow-up') ?
					button.style.animationTimingFunction = "ease-in" :
					button.style.animationTimingFunction = ""

				// Añadimos will-change a los elementos que van a ser animados
				button.nextElementSibling.style.willChange = "max-height"

				// Animacion de entrada del contenido oculto
				button.nextElementSibling.classList.toggle('enable')

				// El if es para agregar enable en el primer click y luego en los posteriores ir haciendo toggle entre enable y disable
				if (status) {
					// Animacion de salida del contenido oculto
					button.nextElementSibling.classList.toggle('disable')
				} else {
					status = true
				}

				// Removemos el will-change cuando las animaciones terminen
				button.nextElementSibling.addEventListener('animationend', (e) => {
					// console.log(e);
					e.target.style.willChange = "auto"
				})

			})
		} else {
			console.error('No se encontro "aboutme-button"')
		}
	} else {
		console.error('No se le paso un "element"')
	}
}
changeDirectionAboutmeButton(
	document.getElementById('aboutme')
)
// --------------------------------------------------------------------------------
// Funcion de los contenidos toggleables de la seccion studies
const changeDirectionStudiesArrowIndicator = function (element) {
	if (element) {
		element.addEventListener('click', (e) => {

			let target = e.target
			let targetPreviousElement = target.previousElementSibling
			let targetNextElement = target.nextElementSibling

			if (targetPreviousElement.classList.contains('icon-arrow-right')) {
				// si contiene la clase icon-arrow-right se le agrega enable

				if(target.classList.contains('studies-details_title')) {
					// Añadimos will-change a los elementos que van a ser animados
					targetNextElement.style.willChange = "max-height"
					// console.log('mostrar')

					// Cambio del icono de flecha
					targetPreviousElement.classList.toggle('icon-arrow-right')
					targetPreviousElement.classList.toggle('icon-arrow-down')

					// Nos aseguramos que no tenga la animacion de salida
					targetNextElement.classList.remove('disable')
					// Agregamos la animacion de entrada
					targetNextElement.classList.add('enable')

					// Removemos el will-change cuando las animacion termine
					targetNextElement.addEventListener('animationend', (e) => {
						targetNextElement.style.willChange = "auto"
					})
				} else {
					console.error('No se encontro el activador de la animacion')
				}
			} else if (targetPreviousElement.classList.contains('icon-arrow-down')) {
				// si no lo contiene se el agrega disable

				if(target.classList.contains('studies-details_title')) {
					// Añadimos will-change a los elementos que van a ser animados
					targetNextElement.style.willChange = "max-height"
					// console.log('ocultar')

					// Cambio del icono de flecha
					targetPreviousElement.classList.toggle('icon-arrow-right')
					targetPreviousElement.classList.toggle('icon-arrow-down')

					// Nos aseguramos que no tenga la animacion de entrada
					targetNextElement.classList.remove('enable')
					// Agregamos la animacion de salida
					targetNextElement.classList.add('disable')

					// Removemos el will-change cuando las animacion termine
					targetNextElement.addEventListener('animationend', (e) => {
						targetNextElement.style.willChange = "auto"
					})
				} else {
					console.error('No se encontro el activador de la animacion')
				}
			} else {
				console.error('No se encontro ningun icon-arrow')
			}
		})
	} else {
		console.error('No se le paso un "element"')
	}
}
changeDirectionStudiesArrowIndicator(
	document.getElementById('studies')
)
// --------------------------------------------------------------------------------
