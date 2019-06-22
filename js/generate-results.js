/*
	Generating results
*/

let inputs = {};

// form progress
	let progressIndicator = document.querySelector('#formProgress');
	function formProgress() {
		let requiredInputs = document.querySelectorAll('[data-required]');
		let filledRequiredInputs = 0;
		requiredInputs.forEach(elem => {
			if (elem.value != '') filledRequiredInputs++;
		});
		progressIndicatorTxt = `${ filledRequiredInputs } / ${ requiredInputs.length } required inputs filled`;
		progressIndicator.innerHTML = `(${ progressIndicatorTxt })`;
	}; formProgress();

// on input change
	let allInputs = document.querySelectorAll('input, select');
	allInputs.forEach(elem => {
		elem.addEventListener('change', () => {
			formProgress();

			inputs = {
				general: {
					game: document.getElementById('i_game').value,
					qr: document.getElementById('i_qr').value
				},
				pokemon: {
					species: document.getElementById('i_species').value,
					ability: document.getElementById('i_ability').value,
					nickname: document.getElementById('i_nickname').value,
					gender: document.getElementById('i_gender').value,
					shiny: document.getElementById('i_shiny').value,
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
						H: document.getElementById('i_hyp-H').value,
						A: document.getElementById('i_hyp-A').value,
						B: document.getElementById('i_hyp-B').value,
						C: document.getElementById('i_hyp-C').value,
						D: document.getElementById('i_hyp-D').value,
						S: document.getElementById('i_hyp-S').value
					},
					moveSet: [
						document.getElementById('i_move1').value,
						document.getElementById('i_move2').value,
						document.getElementById('i_move3').value,
						document.getElementById('i_move4').value
					],
					maxpp: document.getElementById('i_maxpp').value,
					language: document.getElementById('i_language').value,
					notes: document.getElementById('i_notes').value
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
		});
	});

// copy results
	let copyResults = document.querySelector('#copyResults');
	copyResults.addEventListener('click', () => {
		console.log(inputs);
	});