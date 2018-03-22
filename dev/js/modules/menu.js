// Este es un ejemplo de como exportar funciones desde un archivo
// En index.js se importan estas funciones

// export const saludo = () => {
// 	console.log('Hola mundo')
//   };
  
//   export const despedida = () => {
// 	console.log('Adiós mundo')
//   };
  

// FUNCION QUE HACE AL MENU STICKY
export const setMenuSticky = function(menuIdentifier) {
	let menuOffsetTop = menuIdentifier.offsetTop,
		links = [...menuIdentifier.querySelectorAll('a')]
	window.addEventListener('scroll', (event) => {
		event.preventDefault()
		if (window.pageYOffset > menuOffsetTop) {
			menuIdentifier.classList.add('menuSticky')
			links.map((link) => {
				link.classList.add('menuSticky-link')
			})
		} else {
			menuIdentifier.classList.remove('menuSticky')
			links.map((link) => {
				link.classList.remove('menuSticky-link')
			})
		}
	})
}



// // TODO Refactorisar

export const eventClickForSmoothScrolling = function(menuIdentifier) {
	menuIdentifier.addEventListener('click', (e) => {
		if (e.target.hash && document.title == 'Gregorlopezdev') {
			e.preventDefault()
			let hash = e.target.hash.slice(1)
			// console.dir(e.target);
			if (document.getElementById(hash)) {
				initScroll(hash, menuIdentifier)
			}
		}
	})
}
const initScroll = function(hash, menuIdentifier) {
	let destination = document.getElementById(hash).offsetTop,
	scroll = window.scrollY,
	speed = 40
	let menuIdentifierHeight = menuIdentifier ? menuIdentifier.clientHeight : 0
	destination -= menuIdentifierHeight
	// console.log(hash);
	const scroller = setInterval(() => {
		if (destination >= scroll) {
			scroll += speed
			window.scroll(0, scroll)
			if (destination <= scroll) {
				clearInterval(scroller)
			}
		}
		if (destination <= scroll) {
			scroll -= speed
			window.scroll(0, scroll)
			if (destination >= scroll) {
				clearInterval(scroller)
			}
		}
	},10)
}


const scrollup = function (button) {
	let hash = button.parentNode.id
	scrollupButton.addEventListener('click', (e) => {
		initScroll(hash)
	})
}
export const scrollupEvent = function (limit,button) {
	let heightLimit = limit.clientHeight,
		heightScroll
	const scrollerDown = setInterval(() => {
		heightScroll = window.scrollY
		if (heightLimit <= heightScroll) {
			clearInterval(scrollerDown)
			button.classList.toggle('active')
			scrollup(button)
			const scrollerUp = setInterval(() => {
				let heightScroll = window.scrollY
				if (heightLimit >= heightScroll) {
					clearInterval(scrollerUp)
					button.classList.toggle('active')
					scrollupEvent(limit,button)
				}
			},500)
		}
	},500)
}

