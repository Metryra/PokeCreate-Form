// PPAR BG
    $('#ppar').hover(function() {
        $('.bg').addClass('show')
    }, function() {
        $('.bg').removeClass('show')
    })

// <th colspan="$">
    tdMax = []
    $('table tr')
        .each(function() { tdMax.push($('td', this).length) })
        .find('th').attr('colspan', Math.max.apply(Math, tdMax))

// "Leave blank if none"
    $('#nn, #item, #ability').attr({
        'placeholder': 'Leave blank if none'
    })

// select > options
    $('select.ball').each(function() {
        $(this).html(`
            <option value="Poke">Poké Ball</option>
			<option value="Great">Great Ball</option>
			<option value="Ultra">Ultra Ball</option>
			<option value="Master">Master Ball</option>
			<option value="Safari">Safari Ball</option>
			<option value="Sport">Sport Ball</option>
			<option value="Premier">Premier Ball</option>
			<option value="Repeat">Repeat Ball</option>
			<option value="Timer">Timer Ball</option>
			<option value="Nest">Nest Ball</option>
			<option value="Net">Net Ball</option>
			<option value="Dive">Dive Ball</option>
			<option value="Luxury">Luxury Ball</option>
			<option value="Heal">Heal Ball</option>
			<option value="Quick">Quick Ball</option>
			<option value="Dusk">Dusk Ball</option>
			<option value="Cherish">Cherish Ball</option>
			<option value="Park">Park Ball</option>
			<option value="Dream">Dream Ball</option>
			<option value="Beast">Beast Ball</option>
			<optgroup label="- Apricorn Balls -">
			<option value="Level">Level Ball</option>
			<option value="Lure">Lure Ball</option>
			<option value="Moon">Moon Ball</option>
			<option value="Friend">Friend Ball</option>
			<option value="Love">Love Ball</option>
			<option value="Heavy">Heavy Ball</option>
			<option value="Fast">Fast Ball</option>
			</optgroup>
        `)
    })
    $('table.spreads').each(function() {
        $(this).html(`
            <tr>
                <td><input
                    id="${$(this).attr('data-id')}_h"
                    type="number"
                    value="${$(this).data('val')}"
                    min="0"
                    max="${$(this).data('max')}"
                    step="${$(this).data('step')}">
                </td>
                <td><input
                    id="${$(this).attr('data-id')}_a"
                    type="number"
                    value="${$(this).data('val')}"
                    min="0"
                    max="${$(this).data('max')}"
                    step="${$(this).data('step')}">
                </td>
                <td><input
                    id="${$(this).attr('data-id')}_b"
                    type="number"
                    value="${$(this).data('val')}"
                    min="0"
                    max="${$(this).data('max')}"
                    step="${$(this).data('step')}">
                </td>
                <td><input
                    id="${$(this).attr('data-id')}_c"
                    type="number"
                    value="${$(this).data('val')}"
                    min="0"
                    max="${$(this).data('max')}"
                    step="${$(this).data('step')}">
                </td>
                <td><input
                    id="${$(this).attr('data-id')}_d"
                    type="number"
                    value="${$(this).data('val')}"
                    min="0"
                    max="${$(this).data('max')}"
                    step="${$(this).data('step')}">
                </td>
                <td><input
                    id="${$(this).attr('data-id')}_s"
                    type="number"
                    value="${$(this).data('val')}"
                    min="0"
                    max="${$(this).data('max')}"
                    step="${$(this).data('step')}">
                </td>
            </tr>
        `)
    })
    $('#gts_msg option').each(function() {
        $(this).html($(this).val())
    })

// Pokémon
	var pkmnList = []
	var ppaList = []
    var genderList = []
	$.getJSON('https://nuotsu.github.io/PPAR/js/ppa.json', function(ppaJSON) {
        for (var i in ppaJSON) {
			pkmnList.push(ppaJSON[i].nameENG)
			ppaList.push(ppaJSON[i].dex)
            genderList.push(ppaJSON[i].gender)
        }
		return pkmnList
	})
	$("#pkmn, #gts_pkmn").autocomplete({
	  source: pkmnList
	})

// Meeting Date: Today
	now = new Date()
	    yyyy = now.getFullYear()
	    mm = now.getMonth()+1
	        if (mm < 10) mm = `0${mm}`
	    d = now.getDate()
	    dd = ''
	        if (d < 10) dd = `0${dd}`
	timestamp = `${mm}/${d}/${yyyy}`
	$('#met_date').val(timestamp)

// Copy & Submit
    $('#copy').click(function() {
        $('textarea').select()
        document.execCommand('copy')
    })

// Export
    $('input, select').on('change keyup', generate)
    function generate() {
        game_ver = $('#game_ver').val()
		pkhex = $('#pkhex').val()
		serebii = $('#serebii').val()
		pkmn = $('#pkmn').val();
			var ppa = ppaList[pkmnList.indexOf(pkmn)]
			if (ppa == undefined || ppa == '0025Co') ppa = 'Egg'
			$('#img_pkmn').css({
				'background-image': `url('https://nuotsu.github.io/PPAR/img/ppa/${ppa}_PPA.png')`
			})
            var pkmn_form = pkmn.replace(' (', '-').replace(')', '')
                if ($('#pkmn').val().indexOf('Alolan ') >= 0)
                    pkmn_form = pkmn_form.replace('Alolan ', '') + '-Alola'
		nn = ''
            if ($('#nn').val() != '') nn = ` (${$('#nn').val()}) `
            else nn = ' '
        gender = $('#gender').val()
            if ($('#pkmn').val() != '') {
                var genderAdj = genderList[pkmnList.indexOf($('#pkmn').val())]
                if (genderAdj[0] == 'm' && genderAdj[1] == undefined) {
                    $('#gender').html(`<option value="(M) ">♂</option>`)
                } else if (genderAdj[0] == 'f' && genderAdj[1] == undefined) {
                    $('#gender').html(`<option value="(F) ">♀</option>`)
                } else if (genderAdj[0] == '-') {
                    $('#gender').html(`<option value="">-</option>`)
                } else {
                    $('#gender').html(`
                        <option value="(M) ">♂</option>
                        <option value="(F) ">♀</option>
                    `)
                }
            }
		shiny = ''
			if ( $('#shiny').prop('checked') ) shiny = 'Yes'
			else shiny = 'No'
        lv = $('#lv').val()
        nat = $('#nat').val()
		item = $('#item').val()
		ability = $('#ability').val()
		country = $('#country').val()
		pkrs = $('#pkrs').val()
            $('#img_pkrs').attr({
                'src': `img/pkrs_${pkrs.toLowerCase()}.png`
            })
		met_game = $('#met_game').val()
		met_loc = $('#met_loc').val()
		met_date = $('#met_date').val()
		met_lv = $('#met_lv').val()
		ball = $('#ball').val()
			$('#img_ball').css({
				'background-image': `url('https://nuotsu.github.io/PPAR/img/ball/${ball}_ball.png')`
			})
		ribbon = $('#ribbon').val()
        iv_h = $('#iv_h').val()
            iv_a = $('#iv_a').val()
            iv_b = $('#iv_b').val()
            iv_c = $('#iv_c').val()
            iv_d = $('#iv_d').val()
            iv_s = $('#iv_s').val()
        ev_h = $('#ev_h').val()
            ev_a = $('#ev_a').val()
            ev_b = $('#ev_b').val()
            ev_c = $('#ev_c').val()
            ev_d = $('#ev_d').val()
            ev_s = $('#ev_s').val()
		hp = $('#hp').val()
		move1 = $('#move1').val()
    		move2 = $('#move2').val()
    		move3 = $('#move3').val()
    		move4 = $('#move4').val()
		ot = $('#ot').val()
		ot_gender = $('#ot_gender').val()
		gen7id = $('#gen7id').val()
		tid = $('#tid').val()
		sid = $('#sid').val()
		ign = $('#ign').val()
		fc = $('#fc').val()
		gts_pkmn = $('#gts_pkmn').val()
			var gts_ppa = ppaList[pkmnList.indexOf(gts_pkmn)]
			if (gts_ppa == undefined ||
				gts_ppa == '0129s') gts_ppa = 'Egg'
			$('#img_gts_pkmn').css({
				'background-image': `url('https://nuotsu.github.io/PPAR/img/ppa/${gts_ppa}_PPA.png')`
			})
		gts_gender = $('#gts_gender').val()
            if ($('#gts_pkmn').val() != '') {
                var gts_genderAdj = genderList[pkmnList.indexOf($('#gts_pkmn').val())]
                if (gts_genderAdj[0] == 'm' && gts_genderAdj[1] == undefined) {
                    $('#gts_gender').html(`<option value="(M) ">♂</option>`)
                } else if (gts_genderAdj[0] == 'f' && gts_genderAdj[1] == undefined) {
                    $('#gts_gender').html(`<option value="(F) ">♀</option>`)
                } else if (gts_genderAdj[0] == '-') {
                    $('#gts_gender').html(`<option value="">-</option>`)
                } else {
                    $('#gts_gender').html(`
                        <option value="(M) ">♂</option>
                        <option value="(F) ">♀</option>
                    `)
                }
            }
		gts_lv = $('#gts_lv').val()
		gts_ball = $('#gts_ball').val()
			$('#img_gts_ball').css({
				'background-image': `url('https://nuotsu.github.io/PPAR/img/ball/${gts_ball}_ball.png')`
			})
		gts_msg = $('#gts_msg').val()


        $('textarea').val(
`[PokéRequest]

Game Version: ${game_ver}

PKHex File Link: ${pkhex}

Serebii Link: ${serebii}


#Pokémon Info

${pkmn_form}${nn}${gender}@ ${item}

Ability: ${ability}

Level: ${lv}

Shiny: ${shiny}

EVs: ${ev_h} HP / ${ev_a} Atk / ${ev_b} Def / ${ev_c} SpA / ${ev_d} SpD / ${ev_s} Spe

${nat} Nature

IVs: ${iv_h} HP / ${iv_a} Atk / ${iv_b} Def / ${iv_c} SpA / ${iv_d} SpD / ${iv_s} Spe

- ${move1}

- ${move2}

- ${move3}

- ${move4}


#Misc Pokémon Info

Country: ${country}

Pokérus: ${pkrs}

Hidden Power: ${hp}


#Meeting Info

Game: ${met_game}

Met Location: ${met_loc}

Poké Ball: ${ball} Ball

Met Level: ${met_lv}

Met Date: ${met_date}


#Trainer Info

OT: ${ot} (${ot_gender})

Gen 7 ID: ${gen7id}

TID: ${tid}

SID: ${sid}

Ribbons: ${ribbon}


#GTS Deposit

IGN: ${ign}

FC: ${fc}

Deposit: ${gts_pkmn} ${gts_gender}Lv.${gts_lv} in ${gts_ball} Ball

Message: "${gts_msg}"

`)}
