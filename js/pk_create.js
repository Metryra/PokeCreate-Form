$(function() {
	// hover for PPAR
		$('.ppar').hover(function() {
			$('.bg').css({
				'background-image': 'url(\'images/ppar_show.png\')'
			})
		}, function() {
			$('.bg').css({
				'background-image': 'url(\'images/ppar.png\')'
			})
		});

	// Upon change of inputs
		$('input[type=text]').keyup(write);
		$('input[type=number], input[type=checkbox], select').change(write);

	// Special
		$('.special.optional').after('<sup>*</sup>');
		$('.special.event-only').after('<sup>**</sup>');

	// Pokémon
		var pkmnList = [];
		var ppaList = [];
		$.getJSON('../PPAR/js/ppa.json', function(ppaJSON) {
            for (var i in ppaJSON) {
				if (!ppaJSON[i].name.match(
						/(Pikachu |Mega|Primal|School|Minior Shield|Original|Egg)/
					)) {
					pkmnList.push(ppaJSON[i].name);
					ppaList.push(ppaJSON[i].dex);
				}
            }
			return pkmnList;
		});
		$("#pkmn, #gts_pkmn").autocomplete({
		  source: pkmnList
		});

	function write() {
		// Terms
			game_ver = $('#game_ver').val();
			pkhex = '';
				if ( $('#pkhex').val() != '' ) {
					pkhex = $('#pkhex').val();
				} else {
					pkhex = 'N/A';
				}
			serebii = '';
				if ( $('#serebii').val() != '' ) {
					serebii = $('#serebii').val();
				} else {
					serebii = 'N/A';
				}
			pkmn = $('#pkmn').val();
				var ppa = ppaList[pkmnList.indexOf(pkmn)];
				if (ppa == undefined ||
					ppa == '0025Co') {
					ppa = 'Egg';
				}
				$('label[for=pkmn] img').attr({
					'src': 'images/ppa/' + ppa + '_PPA.png'
				});
			nickname = $('#nickname').val();
			nn = $('#nn').val();
			form = '';
				if ( $('#form').val() != '' ) {
					form = $('#form').val();
				} else {
					form = 'N/A';
				}
				// Forms
					if (pkmn.indexOf('Alolan') == 0) {
						$('#form').val('Alolan');
						form = 'Alolan';
					} else if (pkmn.indexOf('Lycanroc') == 0) {
						$('#form').val($('#pkmn').val().replace('Lycanroc ', ''));
						form = $('#pkmn').val().replace('Lycanroc ', '');
					} else if (pkmn.indexOf('Minior') == 0) {
						$('#form').val($('#pkmn').val().replace('Minior ', ''));
						form = $('#pkmn').val().replace('Minior ', '');
					} else {
						$('#form').val('');
						form = 'N/A';
					}
			gender = $('#gender').val();
				if (pkmn.match(
						/( F|Nidorina|Nidoqueen)/
					)) {
					$('#gender').val('F');
				} else if (pkmn.match(
						/( M|Nidorino|Nidoking)/
					)) {
					$('#gender').val('M');
				} else if (pkmn.match(
						/(Magnemite|Magneton|Voltorb|Electrode)/
					)) {
					$('#gender').val('None');
				} else {
					$('#gender').val('F');
				}
			shiny = '';
				if ( $('#shiny').prop('checked') ) {
					shiny = 'Yes';
				} else {
					shiny = 'No';
				}
			level = $('#level').val();
			nature = $('#nature').val();
			item = $('#item').val();
			ability = $('#ability').val();
			lang = $('#lang').val();
			pkrs = '';
				if ( $('#pkrs').prop('checked') ) {
					pkrs = 'Yes';
				} else {
					pkrs = 'No';
				}
			mtg_game = $('#mtg_game').val();
			mtg_loc = $('#mtg_loc').val();
			mtg_level = $('#mtg_level').val();
			ball = $('#ball').val();
				$('label[for=ball] img').attr({
					'src': 'images/balls/' + ball + '_ball.png'
				});
			ribbons = '';
				if ( $('#ribbons').val() != '' ) {
					ribbons = $('#ribbons').val();
				} else {
					ribbons = 'None';
				}
			ivs = $('#ivs').val();
			evs = $('#evs').val();
			hp = $('#hp').val();
			move_1 = $('#move_1').val();
			move_2 = $('#move_2').val();
			move_3 = $('#move_3').val();
			move_4 = $('#move_4').val();
			ot_name = $('#ot_name').val();
			ot_gender = $('#ot_gender').val();
			id = $('#id').val();
			tid = '';
				if ( $('#tid').val() != '' ) {
					tid = $('#tid').val();
				} else {
					tid = 'N/A';
				}
			sid = '';
				if ( $('#sid').val() != '' ) {
					sid = $('#sid').val();
				} else {
					sid = 'N/A';
				}
			ign = $('#ign').val();
			fc = $('#fc').val();
			gts_pkmn = $('#gts_pkmn').val();
				var gts_ppa = ppaList[pkmnList.indexOf(gts_pkmn)];
				if (gts_ppa == undefined ||
					gts_ppa == '0025Co') {
					gts_ppa = 'Egg';
				}
				$('label[for=gts_pkmn] img').attr({
					'src': 'images/ppa/' + gts_ppa + '_PPA.png'
				});
			gts_gender = $('#gts_gender').val();
			gts_level = $('#gts_level').val();
			gts_ball = $('#gts_ball').val();
				$('label[for=gts_ball] img').attr({
					'src': 'images/balls/' + gts_ball + '_ball.png'
				});
			msg = $('#msg').val();
		// Form
			$('textarea').val(
				'[PokeRequest]' + '\n\n' +
				'#Pokémon Request' + '\n\n' +
				'* **Game Version**: ' + game_ver + '\n' +
				'* **PKHeX File Link**: ' + pkhex + '\n' +
				'* **Serebii Link**: ' + serebii + '\n\n' +
				'&nbsp;' + '\n\n' +
				'##Pokémon Info ' + '\n\n' +
				'* **Pokémon**: ' + pkmn + '\n' +
				'* **Nickname**: ' + nickname + '\n' +
				'* **Form**: ' + form + '\n' +
				'* **Gender**: ' + gender + '\n' +
				'* **Shiny**: ' + shiny + '\n\n' +
				'&nbsp;' + '\n\n' +
				'* **Level**: ' + level + '\n' +
				'* **Nature**: ' + nature + '\n' +
				'* **Held Item**: ' + item + '\n' +
				'* **Ability**: ' + ability + '\n' +
				'* **Language**: ' + lang + '\n' +
				'* **Pokérus**: ' + pkrs + '\n\n' +
				'&nbsp;' + '\n\n' +
				'* **Meeting Location**: ' + mtg_game + ' ¦ ' + mtg_loc + ' ¦ Lv.' + mtg_level + '\n' +
				'* **PokéBall**: ' + ball + ' ball\n' +
				'* **Ribbons**: ' + ribbons + '\n\n' +
				'&nbsp;' + '\n\n' +
				'* **IV\'s**: ' + ivs + '\n' +
				'* **EV\'s**: ' + evs + '\n' +
				'* **Hidden Power**: ' + hp + '\n\n' +
				'&nbsp;' + '\n\n' +
				'* **Move 1**: ' + move_1 + '\n' +
				'* **Move 2**: ' + move_2 + '\n' +
				'* **Move 3**: ' + move_3 + '\n' +
				'* **Move 4**: ' + move_4 + '\n\n' +
				'&nbsp;' + '\n\n' +
				'##Trainer Info' + '\n\n' +
				'* **OT**: ' + ot_name + ' ¦ ' + ot_gender + '\n' +
				'* **Gen 7 ID**: ' + id + '\n' +
				'* **TID**: ' + tid + '\n' +
				'* **SID**: ' + sid + '\n' +
				'&nbsp;' + '\n\n' +
				'##GTS Deposit' + '\n\n' +
				'>* **IGN**: ' + ign + '\n' +
				'>* **FC**: ' + fc + '\n' +
				'>* **Pokemon**: ' + gts_pkmn + ' ¦ ' + gts_gender + ' ¦ Lv.' + gts_level + ' ¦ ' + gts_ball + ' Ball\n' +
				'>* **Message**: "' + msg + '"'
			);
	}

	$('#copy').click(function() {
		$('.result #form').select();
		document.execCommand('copy');
	});
});
