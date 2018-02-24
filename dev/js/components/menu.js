const setMenuSticky = function(menuIdentifier) {
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
setMenuSticky(menu)


const eventClickForSmoothScrolling = function(menuIdentifier) {
	menuIdentifier.addEventListener('click', (e) => {
		if (e.target.hash && document.title == 'Gregorlopezdev') { 
			e.preventDefault()
			let hash = e.target.hash.slice(1)
			if (document.getElementById(hash)) {
				initScroll(hash, menuIdentifier)
			}
		}
	})
}
const initScroll = function(hash, menuIdentifier) {
	let destination = document.getElementById(hash).offsetTop,
	scroll = window.scrollY,
	speed = 20
	let menuIdentifierHeight = menuIdentifier ? menuIdentifier.clientHeight : 0
	destination -= menuIdentifierHeight
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
eventClickForSmoothScrolling(menu)


const scrollup = function (button) {
	let hash = button.parentNode.id
	scrollupButton.addEventListener('click', (e) => {
		initScroll(hash)
	})
}
const scrollupEvent = function (limit,button) {
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
// Primer parametro elemento el cual sera el limite para que aparesca el button
// Segundo parametro elemento donde esta el buttom
scrollupEvent(bannerHeader,scrollupButton)
