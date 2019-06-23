/*
	Generating output
*/

// define inputs
	let inputs = {};
	function getInputs() {
		inputs = {
			file: {
				game: document.getElementById('i_game').value,
				pkhex: document.getElementById('i_pkhex').value,
				notes: document.getElementById('i_notes').value
			},
			pokemon: {
				species: document.getElementById('i_species').value,
				ability: document.getElementById('i_ability').value,
				nickname: document.getElementById('i_nickname').value,
				gender: document.getElementById('i_gender').value,
				shiny: document.getElementById('i_shiny').checked,
				pokerus: document.getElementById('i_pokerus').value,
				lv: document.getElementById('i_lv').value,
				nature: document.getElementById('i_nature').value,
				natureInc: document.getElementById('i_nature-inc').value,
				natureDec: document.getElementById('i_nature-dec').value,
				ball: document.getElementById('i_ball').value,
				item: document.getElementById('i_item').value,
				iv: {
					H: document.getElementById('i_iv-H').value,
					A: document.getElementById('i_iv-A').value,
					B: document.getElementById('i_iv-B').value,
					C: document.getElementById('i_iv-C').value,
					D: document.getElementById('i_iv-D').value,
					S: document.getElementById('i_iv-S').value
				},
				ev: {
					H: document.getElementById('i_ev-H').value,
					A: document.getElementById('i_ev-A').value,
					B: document.getElementById('i_ev-B').value,
					C: document.getElementById('i_ev-C').value,
					D: document.getElementById('i_ev-D').value,
					S: document.getElementById('i_ev-S').value
				},
				hyp: {
					H: document.getElementById('i_hyp-H').checked,
					A: document.getElementById('i_hyp-A').checked,
					B: document.getElementById('i_hyp-B').checked,
					C: document.getElementById('i_hyp-C').checked,
					D: document.getElementById('i_hyp-D').checked,
					S: document.getElementById('i_hyp-S').checked
				},
				moveset: [
					document.getElementById('i_move1').value,
					document.getElementById('i_move2').value,
					document.getElementById('i_move3').value,
					document.getElementById('i_move4').value
				],
				maxpp: document.getElementById('i_maxpp').value,
				language: document.getElementById('i_language').value
			},
			met: {
				game: document.getElementById('i_met-game').value,
				location: document.getElementById('i_met-location').value,
				lv: document.getElementById('i_met-lv').value
			},
			trainer: {
				ot: document.getElementById('i_ot').value,
				gender: document.getElementById('i_ot-gender').value,
				nsid: document.getElementById('i_nsid').value,
				pid: document.getElementById('i_pid').value
			},
			gts: {
				ign: document.getElementById('i_ign').value,
				fc: document.getElementById('i_fc').value,
				pokemon: {
					species: document.getElementById('i_gts-species').value,
					gender: document.getElementById('i_gts-gender').value,
					lv: document.getElementById('i_gts-lv').value,
					ball: document.getElementById('i_gts-ball').value
				},
				message: document.getElementById('i_gts-message').value
			}
		};
	}

// warning messages
	function warnings() {
		let warnings = document.querySelector('#warnings');
		let warningExists = false;

		// required inputs
		let requiredInputsWarning = document.querySelector('#requiredInputsWarning');
		let requiredInputs = document.querySelectorAll('[data-required]');
		let emptyRequiredInputs = 0;
		requiredInputs.forEach(elem => { if (elem.value == '') emptyRequiredInputs++; });
		if (emptyRequiredInputs > 0) {
			requiredInputsWarning.innerHTML = `${ emptyRequiredInputs } more required input(s) left.`;
			warningExists = true;
		}

		// check EVs
		let EVsWarning = document.querySelector('#EVsWarning');
		if (EVsAreValid)
			EVsWarning.innerHTML = '';
		else {
			EVsWarning.innerHTML = 'EVs are not valid.';
			warningExists = true;
		}

		// hide empty warnings
		for (var i = 0; i < warnings.children.length; i++) {
			if (warnings.children[i].innerHTML == '')
				warnings.children[i].style.display = 'none';
			else
			warnings.children[i].style.display = 'block';
		}

		// hide warnings when blank
		if (warningExists)
			warnings.style.display = 'block';
		else
			warnings.style.display = 'none';

	};

// on input change
	let allInputs = document.querySelectorAll('input, select');
	let output = document.querySelector('#output');
	function generateOutput() {
		warnings();
		getInputs();
		writeToTextarea(inputs);
	}
	allInputs.forEach(elem => {
		elem.addEventListener('change', generateOutput);
		elem.addEventListener('keyup', generateOutput);
	});

	function writeToTextarea(inputs) {
		let _ = inputs;
		let pkmn = '';
			if (_.pokemon.nickname != '')
				pkmn = `${ _.pokemon.nickname } (${ _.pokemon.species.toUpperCase() })`;
			else
				pkmn = _.pokemon.species.toUpperCase();
		let shiny = _.pokemon.shiny ? 'Yes' : 'No';
		let maxpp = _.pokemon.maxpp ? 'Yes' : 'No';
		let hyperTraining = '';
			if (_.pokemon.hyp.H) hyperTraining += ' HP';
			if (_.pokemon.hyp.A) hyperTraining += ' Atk';
			if (_.pokemon.hyp.B) hyperTraining += ' Def';
			if (_.pokemon.hyp.C) hyperTraining += ' SpA';
			if (_.pokemon.hyp.D) hyperTraining += ' SpD';
			if (_.pokemon.hyp.S) hyperTraining += ' Spe';
			if (hyperTraining == '') hyperTraining = ' none';
		let nsid = _.trainer.nsid ? _.trainer.nsid : '--';

		output.value = // Output Code
			`# File Information\n` +
				`* Game Version: ${ _.file.game }\n` +
				`* PKHex File Link: ${ _.file.pkhex }\n\n` +

			`# Pokémon Info\n` +
				`* ${ pkmn }${ _.pokemon.gender } @ ${ _.pokemon.item }\n` +
				`* Ability: ${ _.pokemon.ability.toUpperCase() }\n` +
				`* Level: ${ _.pokemon.lv }\n` +
				`* Shiny: ${ shiny }\n` +
				`* EVs: ` +
					`${ _.pokemon.ev.H } HP / ` +
					`${ _.pokemon.ev.A } Atk / ` +
					`${ _.pokemon.ev.B } Def / ` +
					`${ _.pokemon.ev.C } SpA / ` +
					`${ _.pokemon.ev.D } SpD / ` +
					`${ _.pokemon.ev.S } Spe\n` +
				`* ${ _.pokemon.nature.toUpperCase() } nature\n` +
				`* IVs: ` +
					`${ _.pokemon.iv.H } HP / ` +
					`${ _.pokemon.iv.A } Atk / ` +
					`${ _.pokemon.iv.B } Def / ` +
					`${ _.pokemon.iv.C } SpA / ` +
					`${ _.pokemon.iv.D } SpD / ` +
					`${ _.pokemon.iv.S } Spe\n` +
				`* - ${ _.pokemon.moveset[0] }\n` +
				`* - ${ _.pokemon.moveset[1] }\n` +
				`* - ${ _.pokemon.moveset[2] }\n` +
				`* - ${ _.pokemon.moveset[3] }\n\n` +

			`# Misc Pokémon Info\n` +
				`* Language: ${ _.pokemon.language }\n` +
				`* Pokérus: ${ _.pokemon.pokerus }\n` +
				`* Max PPs: ${ maxpp }\n` +
				`* Hyper Training:${ hyperTraining }\n\n` +

			`# Meeting Info\n` +
				`* Game: ${ _.met.game }\n` +
				`* Met Location: ${ _.met.location }\n` +
				`* Poké Ball: ${ _.pokemon.ball } Ball\n` +
				`* Met Level: ${ _.met.lv }\n\n` +

			`# Trainer Info\n` +
				`* OT: ${ _.trainer.ot } (${ _.trainer.gender })\n` +
				`* ID: (${ nsid }).${ _.trainer.pid }\n\n` +

			`#GTS Deposit\n` +
				`* IGN: ${ _.gts.ign }\n` +
				`* FC: ${ _.gts.fc }\n` +
				`* Deposit: ${ _.gts.pokemon.species } ${ _.gts.pokemon.gender } Lv.${ _.gts.pokemon.lv } in ${ _.gts.pokemon.ball } Ball\n` +
				`* Message: "${ _.gts.message }"\n` +
				`* Additional Notes: ${ _.file.notes }`;
	}

// copy output
	let copyOutput = document.querySelector('#copyOutput');
	let copied = document.querySelector('#copied');

	copyOutput.addEventListener('click', () => {
		console.log(inputs);

		output.select();
		document.execCommand('copy');

		function copiedAlert() {
			
		}

		if (('Notification' in window)) {
			if (Notification.permission === 'granted') notify('Output copied! Now head on over to /r/PokémonCreate to finalize your request.');
			else if (Notification.permission !== 'denied') {
				Notification.requestPermission().then(permission => {
					if (permission === 'granted') notify('Output copied! Now head on over to /r/PokémonCreate to finalize your request.');
				});
			}
		}
		copied.classList.add('is-visible');
		setTimeout(() => { copied.classList.remove('is-visible'); }, 3000);
	});