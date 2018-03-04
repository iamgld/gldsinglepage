
const changeDirectionAboutmeButton = function (element) {
	let button = element.querySelector('.aboutme-button')
	button.addEventListener('mouseover', (e) => {
		button.nextSibling.classList.toggle('active')
		button.classList.toggle('icon-arrow-down')
		button.classList.toggle('icon-arrow-up')
	})
}
changeDirectionAboutmeButton(aboutme)

const changeDirectionStudiesArrowIndicator = function (element) {
	element.addEventListener('mouseover', (e) => {
		let target = e.target
		// console.dir(target);
		if(target.classList.contains('studies-details_title')) {
			// console.dir(target)
			target.nextSibling.classList.toggle('active')
			target.previousSibling.classList.toggle('icon-arrow-right')
			target.previousSibling.classList.toggle('icon-arrow-down')
		}
	})
}
changeDirectionStudiesArrowIndicator(studies)