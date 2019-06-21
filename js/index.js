// external links
	let externalLinks = document.querySelectorAll('a[target="_blank"]');
	externalLinks.forEach((elem) => {
		elem['rel'] = 'noopener noreferrer';
	});
	
// results height
	let root = document.documentElement;
	
	function resizeResults() {
		let resHdrHgt = document.querySelector('.Results__header').offsetHeight;
		let resFtrHgt = document.querySelector('.Results__footer').offsetHeight;
		root.style.setProperty('--results-offsetHeight', parseInt(resHdrHgt + resFtrHgt) + 'px');
	}; resizeResults();
	window.addEventListener('resize', resizeResults);
	
// optional and required inputs
	let optionalInput = document.querySelectorAll('input[optional], textarea[optional]');
	optionalInput.forEach((elem) => {
		elem['placeholder'] = 'Optional';
		elem.classList.add('optional-input');
	});
	
	let requiredInput = document.querySelectorAll('input[required]');
	requiredInput.forEach((elem) => {
		elem['placeholder'] = 'Required';
		elem.classList.add('required-input');
	});
	
// .Inputs form
	let inputsForm = document.querySelector('#inputsForm');
	inputsForm.reset(); // default to [selected] for Firefox