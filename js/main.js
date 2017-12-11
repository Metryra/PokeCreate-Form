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

// select > options
    $('select.nature').each(function() {
        $(this).html(`
            <option value="Jolly">S↑　C↓　Jolly</option>
            <option value="Timid">S↑　A↓　Timid</option>
            <option value="Adamant">A↑　C↓　Adamant</option>
            <option value="Modest">C↑　A↓　Modest</option>
            <option value="Brave">A↑　S↓　Brave</option>
            <option value="Quiet">C↑　S↓　Quiet</option>
            <option value="Hasty">S↑　B↓　Hasty</option>
            <option value="Naive">S↑　D↓　Naive</option>
            <option value="Bold">B↑　A↓　Bold</option>
            <option value="Impish">B↑　C↓　Impish</option>
            <option value="Calm">D↑　A↓　Calm</option>
            <option value="Careful">D↑　C↓　Careful</option>
            <option value="Relaxed">B↑　S↓　Relaxed</option>
            <option value="Sassy">D↑　S↓　Sassy</option>
            <option value="Lonely">A↑　B↓　Lonely</option>
            <option value="Naughty">A↑　D↓　Naughty</option>
            <option value="Mild">C↑　B↓　Mild</option>
            <option value="Rash">C↑　D↓　Rash</option>
            <option value="Lax">B↑　D↓　Lax</option>
            <option value="Gentle">D↑　B↓　Gentle</option>
            <option value="Hardy">−↑　−↓　Hardy</option>
            <option value="Hardy">−↑　−↓　Docile</option>
            <option value="Hardy">−↑　−↓　Serious</option>
            <option value="Hardy">−↑　−↓　Bashful</option>
            <option value="Hardy">−↑　−↓　Quirky</option>
        `)
    })
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
	$('#mtg_date').val(timestamp)

// Copy & Submit
    $('#copy').click(function() {
        $('textarea').select()
        document.execCommand('copy')
    })

// Generate Form
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
		nn = ''
            if ($('#nn').val() != '') nn = $('#nn').val()
		form = $('#form').val()
			if (pkmn.indexOf('Alolan') == 0) {
				$('#form').val('Alolan')
				form = 'Alolan'
			} else if (pkmn.indexOf('Pikachu ') == 0) {
				$('#form').val($('#pkmn').val().replace('Pikachu ', ''))
				form = $('#pkmn').val().replace('Pikachu ', '')
			} else if (pkmn.indexOf('Unown') == 0) {
				$('#form').val($('#pkmn').val().replace('Unown ', ''))
				form = $('#pkmn').val().replace('Unown ', '')
			} else if (pkmn.indexOf('Deoxys') == 0) {
				$('#form').val($('#pkmn').val().replace('Deoxys ', ''))
				form = $('#pkmn').val().replace('Deoxys ', '')
            } else if (pkmn.indexOf('Giratina') == 0) {
				$('#form').val($('#pkmn').val().replace('Giratina ', ''))
				form = $('#pkmn').val().replace('Deoxys ', '')
			} else if (pkmn.indexOf('Deerling') == 0) {
				$('#form').val($('#pkmn').val().replace('Deerling ', ''))
				form = $('#pkmn').val().replace('Deerling ', '')
			} else if (pkmn.indexOf('Sawsbuck') == 0) {
				$('#form').val($('#pkmn').val().replace('Sawsbuck ', ''))
				form = $('#pkmn').val().replace('Sawsbuck ', '')
			} else if (pkmn.indexOf('Tornadus') == 0) {
				$('#form').val($('#pkmn').val().replace('Tornadus ', ''))
				form = $('#pkmn').val().replace('Tornadus ', '')
			} else if (pkmn.indexOf('Thundurus') == 0) {
				$('#form').val($('#pkmn').val().replace('Thundurus ', ''))
				form = $('#pkmn').val().replace('Thundurus ', '')
			} else if (pkmn.indexOf('Landorus') == 0) {
				$('#form').val($('#pkmn').val().replace('Landorus ', ''))
				form = $('#pkmn').val().replace('Landorus ', '')
			} else if (pkmn.indexOf('Kyurem ') == 0) {
				$('#form').val($('#pkmn').val().replace('Kyurem ', ''))
				form = $('#pkmn').val().replace('Kyurem ', '')
			} else if (pkmn.indexOf('Vivillon ') == 0) {
				$('#form').val($('#pkmn').val().replace('Vivillon ', ''))
				form = $('#pkmn').val().replace('Vivillon ', '')
			} else if (pkmn.indexOf('Flabebe') == 0) {
				$('#form').val($('#pkmn').val().replace('Flabebe ', ''))
				form = $('#pkmn').val().replace('Flabebe ', '')
			} else if (pkmn.indexOf('Floette') == 0) {
				$('#form').val($('#pkmn').val().replace('Floette ', ''))
				form = $('#pkmn').val().replace('Floette ', '')
			} else if (pkmn.indexOf('Florges') == 0) {
				$('#form').val($('#pkmn').val().replace('Florges ', ''))
				form = $('#pkmn').val().replace('Florges ', '')
			} else if (pkmn.indexOf('Furfrou ') == 0) {
				$('#form').val($('#pkmn').val().replace('Furfrou ', ''))
				form = $('#pkmn').val().replace('Furfrou ', '')
			} else if (pkmn.indexOf('Zygarde') == 0) {
				$('#form').val($('#pkmn').val().replace('Zygarde ', ''))
				form = $('#pkmn').val().replace('Zygarde ', '')
			} else if (pkmn.indexOf('Hoopa') == 0) {
				$('#form').val($('#pkmn').val().replace('Hoopa ', ''))
				form = $('#pkmn').val().replace('Hoopa ', '')
			} else if (pkmn.indexOf('Lycanroc') == 0) {
				$('#form').val($('#pkmn').val().replace('Lycanroc ', ''))
				form = $('#pkmn').val().replace('Lycanroc ', '')
			} else if (pkmn.indexOf('Minior') == 0) {
				$('#form').val($('#pkmn').val().replace('Minior ', ''))
				form = $('#pkmn').val().replace('Minior ', '')
			} else if (form == '') {
                form = '--'
            }
        nn_form = ''
            if ($('#nn').val() != '' && $('#form').val() != '') nn_form = ` (${nn} - ${form}) `
            if ($('#nn').val() != '' && $('#form').val() == '') nn_form = ` (${nn}) `
            if ($('#nn').val() == '' && $('#form').val() != '') nn_form = ` (${form}) `
            if ($('#nn').val() == '' && $('#form').val() == '') nn_form = ` `
        gender = $('#gender').val()
            if (pkmn != '') {
                var genderAdj = genderList[pkmnList.indexOf(pkmn)]
                if (genderAdj[0] == 'm') $('#gender option').eq(0).prop('selected', true)
                if (genderAdj[0] == 'f') $('#gender option').eq(1).prop('selected', true)
                if (genderAdj[0] == '-') $('#gender option').eq(2).prop('selected', true)
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
		mtg_game = $('#mtg_game').val()
		mtg_loc = $('#mtg_loc').val()
		mtg_date = $('#mtg_date').val()
		mtg_lv = $('#mtg_lv').val()
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
            if (gts_pkmn != '') {
                var gts_genderAdj = genderList[pkmnList.indexOf(gts_pkmn)]
                if (gts_genderAdj[0] == 'm') $('#gts_gender option').eq(0).prop('selected', true)
                if (gts_genderAdj[0] == 'f') $('#gts_gender option').eq(1).prop('selected', true)
                if (gts_genderAdj[0] == '-') $('#gts_gender option').eq(2).prop('selected', true)
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

> Pokémon Info

${pkmn}${nn_form}${gender}@ ${item}
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

> Meeting Info

Game: ${mtg_game}
Location: ${mtg_loc}
Date: ${mtg_date}
Level: ${mtg_lv}
Ball: ${ball} Ball

> Trainer Info

OT: ${ot} (${ot_gender})
Gen 7 ID: ${gen7id}
TID: ${tid}
SID: ${sid}
Ribbons: ${ribbon}

> GTS Deposit

IGN: ${ign}
FC: ${fc}
Deposit: ${gts_pkmn} ${gts_gender}Lv.${gts_lv} in ${gts_ball} Ball
Message: "${gts_msg}"
`)}
