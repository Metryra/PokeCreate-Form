/*
	common
*/

// external links
	let externalLinks = document.querySelectorAll('a[target="_blank"]');
	externalLinks.forEach(elem => {
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
	optionalInput.forEach(elem => {
		elem['placeholder'] = 'Optional';
		elem.classList.add('optional-input');
	});

// fill empty inputs on start
	// inputs dependent upon Pokémon
	let dependentSelects = document.querySelectorAll('#i_ability, #i_gender, .i_moves');
	dependentSelects.forEach(elem => {
		elem.insertAdjacentHTML('beforeend',
			'<option value="" selected default disabled>Select your Pokémon first...</option>'
		)
	});
	// inputs independent of Pokémon
	let independentSelects = document.querySelectorAll(
		'#i_met-game, #i_met-location, #i_ot-gender, #i_gts-species, #i_gts-gender, #i_gts-ball, #i_gts-message'
	);
	independentSelects.forEach(elem => {
		elem.insertAdjacentHTML('beforeend',
			'<option value="" selected default disabled>Please select...</option>'
		)
	});

// .hyper-training enable/disable based on level
	let i_lv = document.querySelector('#i_lv');
	let hyperTrainingInputs = document.querySelectorAll('.hyper-training input');
	i_lv.addEventListener('change', () => {
		if (i_lv.value >= 100)
			hyperTrainingInputs.forEach(elem => { elem.setAttribute('disabled', ''); });
		else
			hyperTrainingInputs.forEach(elem => { elem.removeAttribute('disabled'); });
	});

// .ev_info
	let allEvs = document.querySelectorAll('[id^="i_ev-"]');
	let ev_total = document.querySelector('#ev_total');
	let ev_rem = document.querySelector('#ev_rem');
	let totalEvsNum, remainingEvs;
	function totalEvs(params) {
		totalEvsNum = 0;
		allEvs.forEach(elem => { totalEvsNum += parseInt(elem.value); });
		ev_total.innerHTML = totalEvsNum;
		if (totalEvsNum > 510 || totalEvsNum < 0) ev_total.classList.add('over-limit');
		else ev_total.classList.remove('over-limit');

		remainingEvs = 510 - totalEvsNum;
		ev_rem.innerHTML = remainingEvs;
		if (remainingEvs < 0 ||  remainingEvs > 510) ev_rem.classList.add('over-limit');
		else ev_rem.classList.remove('over-limit');
	}; totalEvs();
	allEvs.forEach(elem => {
		elem.addEventListener('change', totalEvs);
	});

// #i_gts-message options
	document.querySelector('#i_gts-message').childNodes.forEach((elem) => {
		elem.innerHTML = elem.value;
	});

// SlimSelect
	new SlimSelect({ select: '#i_ball' });
	new SlimSelect({ select: '#i_met-game' });
	new SlimSelect({ select: '#i_gts-ball' });
	new SlimSelect({ select: '#i_species' });
	new SlimSelect({ select: '#i_ability' });
	let i_moves = document.querySelectorAll('.i_moves');
		i_moves.forEach(i_move => {
			new SlimSelect({ select: '#' + i_move.id });
		});
	new SlimSelect({ select: '#i_item' });
	new SlimSelect({ select: '#i_met-location' });

// .Inputs form
	let inputsForm = document.querySelector('#inputsForm');
	inputsForm.reset(); // default to [selected] for Firefox