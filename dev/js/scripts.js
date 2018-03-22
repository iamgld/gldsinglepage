// Funcion que hace sticky al menu
import {setMenuSticky,eventClickForSmoothScrolling,scrollupEvent} from "./modules/menu"
setMenuSticky(document.getElementById('menu'))

eventClickForSmoothScrolling(document.getElementById('menu'))
// Primer parametro elemento el cual sera el limite para que aparesca el button
// Segundo parametro elemento donde esta el buttom
scrollupEvent(document.getElementById('bannerHeader'),document.getElementById('scrollupButton'))

// FUNCION DE LOS CONTENIDOS TOGGLEABLES EN LA SECCION ABOUTME
const changeDirectionAboutmeButton = function (element) {
	let button = element.querySelector('.aboutme-button')
	button.addEventListener('click', (e) => {
		// console.dir(button);
		button.classList.toggle('icon-arrow-down')
		button.classList.toggle('icon-arrow-up')
		button.nextElementSibling.classList.toggle('active')
	})
}
changeDirectionAboutmeButton(document.getElementById('aboutme'))

// FUNCION DE LOS CONTENIDOS TOGGLEABLES EN LA SECCION STUDIES
const changeDirectionStudiesArrowIndicator = function (element) {
	element.addEventListener('click', (e) => {
		let target = e.target
		if(target.classList.contains('studies-details_title')) {
			// console.dir(target)
			target.previousElementSibling.classList.toggle('icon-arrow-right')
			target.previousElementSibling.classList.toggle('icon-arrow-down')
			target.nextElementSibling.classList.toggle('active')
		}
	})
}
changeDirectionStudiesArrowIndicator(document.getElementById('studies'))
