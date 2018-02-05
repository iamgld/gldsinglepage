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
setMenuSticky(menuSticky)
