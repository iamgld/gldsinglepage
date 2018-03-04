'use strict';

var changeDirectionAboutmeButton = function changeDirectionAboutmeButton(element) {
	var button = element.querySelector('.aboutme-button');
	button.addEventListener('mouseover', function (e) {
		button.nextSibling.classList.toggle('active');
		button.classList.toggle('icon-arrow-down');
		button.classList.toggle('icon-arrow-up');
	});
};
changeDirectionAboutmeButton(aboutme);

var changeDirectionStudiesArrowIndicator = function changeDirectionStudiesArrowIndicator(element) {
	element.addEventListener('mouseover', function (e) {
		var target = e.target;
		// console.dir(target);
		if (target.classList.contains('studies-details_title')) {
			// console.dir(target)
			target.nextSibling.classList.toggle('active');
			target.previousSibling.classList.toggle('icon-arrow-right');
			target.previousSibling.classList.toggle('icon-arrow-down');
		}
	});
};
changeDirectionStudiesArrowIndicator(studies);