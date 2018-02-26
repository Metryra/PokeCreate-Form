// <select>, <input>
    $('input').attr('placeholder', 'Required') // Required Inputs (all)
    $('[optional]').attr('placeholder', 'Optional') // Optional Inputs
    $('option', '#met_game, #ot_gender, #gts_msg').each(function() {
        $(this).html($(this).val())
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
    		<!-- <option value="Cherish">Cherish Ball</option> -->
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
    $('.spreads:not(#hyperTraining)').each(function() {
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
    $('.hyperTraining td').each(function() {
        $(this).click(function() {
            $('input', this).click()
        })
    })
    ht_check()
    $('#lv').change(ht_check)
    function ht_check() {
            if ($('#lv').val() < 100) {
                $('.hyperTraining input')
                    .attr('disabled', true)
                    .prop('checked', false)
                $('#ht_100').show()
            } else {
                $('.hyperTraining input')
                    .attr('disabled', false)
                    .prop('checked', false)
                $('#ht_100').hide()
            }
        }
    var items = []
        $.ajax({
            url: 'js/items.csv',
            success: function(data) {
                items = data.split(/\r\n|\n/)

                $(document).ready(function() {
                    setTimeout(function() {
                        $("#item").select2({
                            data: items
                        })
                    }, 250)
                })
            }
        })
    var moves = []
        $.ajax({
            url: 'js/moves.csv',
            success: function(data) {
                moves = data.split(/\r\n|\n/)

                $(document).ready(function() {
                    setTimeout(function() {
                        $('#move1, #move2, #move3, #move4').select2({
                            data: moves
                        })
                    }, 250)
                })
            }
        })

// <details> Close Button
    $('details summary').each(function() {
        $(this).append(`<img class="close" src="img/close.png">`)
    })

// Pokémon
	var pkmnList = []
	var ppaList = []
    var genderList = []
    var abilityList = []
    var abilityAdj = []
	$.getJSON('js/ppa.json', function(ppaJSON) {
        for (var i in ppaJSON) {
			pkmnList.push(ppaJSON[i].nameENG)
			ppaList.push(ppaJSON[i].dex)
            genderList.push(ppaJSON[i].gender)
            abilityList.push(ppaJSON[i].abilityENG)
        }
		return pkmnList
	})
    $(document).ready(function() {
        setTimeout(function() {
            $("#pkmn").select2({
              data: pkmnList
            })
        }, 250)
    })

// Copy & Submit
    $('#copy').click(function() {
        $('#output textarea').select()
        document.execCommand('copy')
    })

// Export
    $('#pkmn').on('change', function() {
        if ($('#pkmn').val() != undefined) {
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

            abilityAdj = abilityList[pkmnList.indexOf($('#pkmn').val())]
            $('#ability').html('')
            for (var i in abilityAdj)
                $('#ability').append(`<option value="${abilityAdj[i]}">${abilityAdj[i]}</option>`)
        }
    })
    $('#gts_pkmn').on('change', function() {
        if ($('#gts_pkmn').val() != undefined) {
            var genderAdj = genderList[pkmnList.indexOf($('#gts_pkmn').val())]
            if (genderAdj[0] == 'm' && genderAdj[1] == undefined) {
                $('#gts_gender').html(`<option value="(M) ">♂</option>`)
            } else if (genderAdj[0] == 'f' && genderAdj[1] == undefined) {
                $('#gts_gender').html(`<option value="(F) ">♀</option>`)
            } else if (genderAdj[0] == '-') {
                $('#gts_gender').html(`<option value="">-</option>`)
            } else {
                $('#gts_gender').html(`
                    <option value="(M) ">♂</option>
                    <option value="(F) ">♀</option>
                `)
            }
        }
    })
    $('input, #notes, select').on('change keyup', generate)
    function generate() {
        game_ver = $('#game_ver').val()
		pkhex = $('#pkhex').val()
		pkmn = ''
            if ($('#pkmn').val() != undefined) pkmn = $('#pkmn').val()
            else pkmn = ''
			var ppa = ppaList[pkmnList.indexOf(pkmn)]
			if (ppa == undefined || ppa == '0025Co') ppa = 'Egg'
			$('#img_pkmn').css({
				'background-image': `url('https://nuotsu.github.io/PPAR/img/ppa/${ppa}_PPA.png')`
			})
            var pkmn_form = pkmn.replace(' (', '-').replace(')', '')
                if (pkmn.indexOf('Alolan ') >= 0)
                    pkmn_form = pkmn_form.replace('Alolan ', '') + '-Alola'
		nn = ''
            if ($('#nn').val() != '') {
                nn = `${$('#nn').val()} `
                pkmn_form = `(${pkmn_form})`
            }
        gender = $('#gender').val()
            if (gender == null) gender = ''
		shiny = ''
			if ( $('#shiny').prop('checked') ) shiny = 'Yes'
			else shiny = 'No'
        lv = $('#lv').val()
        nat = $('#nat').val()
		item = ''
            if ($('#item').val() != '' ||
                $('#item').val() != 'None') item = ` @ ${$('#item').val()}`
            if ($('#item').val() == 'None') item = ''
		ability = $('#ability').val()
		lang = $('#lang').val()
		pkrs = $('#pkrs').val()
            $('#img_pkrs').attr({
                'src': `img/pkrs_${pkrs.toLowerCase()}.png`
            })
		met_game = $('#met_game').val()
		met_loc = $('#met_loc').val()
		met_lv = $('#met_lv').val()
		ball = $('#ball').val()
			$('#img_ball').css({
				'background-image': `url('https://nuotsu.github.io/PPAR/img/ball/${ball}_ball.png')`
			})
        ev_h = $('#ev_h').val()
            ev_a = $('#ev_a').val()
            ev_b = $('#ev_b').val()
            ev_c = $('#ev_c').val()
            ev_d = $('#ev_d').val()
            ev_s = $('#ev_s').val()
            if (ev_h != 0) ev_h = `${ev_h} HP / `; else ev_h = ''
            if (ev_a != 0) ev_a = `${ev_a} Atk / `; else ev_a = ''
            if (ev_b != 0) ev_b = `${ev_b} Def / `; else ev_b = ''
            if (ev_c != 0) ev_c = `${ev_c} SpA / `; else ev_c = ''
            if (ev_d != 0) ev_d = `${ev_d} SpD / `; else ev_d = ''
            if (ev_s != 0) ev_s = `${ev_s} Spe`; else ev_s = ''
        ev = `${ev_h}${ev_a}${ev_b}${ev_c}${ev_d}${ev_s}`
            if (ev.slice(-3) == ' / ') ev = ev.slice(0, -3)
            if (ev_h == '' && ev_a == '' && ev_b == '' &&
                ev_c == '' && ev_d == '' && ev_s == '') ev = '0 HP / 0 Atk / 0 Def / 0 SpA / 0 SpD / 0 Spe'
        iv_h = $('#iv_h').val()
            iv_a = $('#iv_a').val()
            iv_b = $('#iv_b').val()
            iv_c = $('#iv_c').val()
            iv_d = $('#iv_d').val()
            iv_s = $('#iv_s').val()
        ht_h = ''
            ht_a = ''
            ht_b = ''
            ht_c = ''
            ht_d = ''
            ht_s = ''
            if ($('#ht_h').prop('checked') == true) ht_h = 'HP '; else ht_h = ''
            if ($('#ht_a').prop('checked') == true) ht_a = 'Atk '; else ht_a = ''
            if ($('#ht_b').prop('checked') == true) ht_b = 'Def '; else ht_b = ''
            if ($('#ht_c').prop('checked') == true) ht_c = 'SpA '; else ht_c = ''
            if ($('#ht_d').prop('checked') == true) ht_d = 'SpD '; else ht_d = ''
            if ($('#ht_s').prop('checked') == true) ht_s = 'Spe '; else ht_s = ''
        ht = `${ht_h}${ht_a}${ht_b}${ht_c}${ht_d}${ht_s}`
            if (ht_h == '' && ht_a == '' && ht_b == '' &&
                ht_c == '' && ht_d == '' && ht_s == '') ht = '--'
		move1 = `\n * \\- ${$('#move1').val()}`
                if ($('#move1').val() == 'None' ||
                    $('#move1').val() == null) move1 = ''
    		move2 = `\n * \\- ${$('#move2').val()}`
                if ($('#move2').val() == 'None' ||
                    $('#move2').val() == null) move2 = ''
    		move3 = `\n * \\- ${$('#move3').val()}`
                if ($('#move3').val() == 'None' ||
                    $('#move3').val() == null) move3 = ''
    		move4 = `\n * \\- ${$('#move4').val()}`
                if ($('#move4').val() == 'None' ||
                    $('#move4').val() == null) move4 = ''
            if ($('#maxPP').prop('checked') == true) maxPP = 'Yes'
            else maxPP = 'No'
		ot = $('#ot').val()
		ot_gender = $('#ot_gender').val()
		ppid = $('#ppid').val()
            if ($('#ppid').val() == null) ppid = ''
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
            if (gts_gender == null) gts_gender = ''
		gts_lv = $('#gts_lv').val()
		gts_ball = $('#gts_ball').val()
			$('#img_gts_ball').css({
				'background-image': `url('https://nuotsu.github.io/PPAR/img/ball/${gts_ball}_ball.png')`
			})
		gts_msg = $('#gts_msg').val()
        notes = $('#notes').val()

        $('#output textarea').val(
`# File Information
* Game Version: ${game_ver}
* PKHex File Link: ${qrcode}

# Pokémon Info
* ${nn}${pkmn_form} ${gender}${item}
* Ability: ${ability}
* Level: ${lv}
* Shiny: ${shiny}
* EVs: ${ev}
* ${nat} Nature
* IVs: ${iv_h} HP / ${iv_a} Atk / ${iv_b} Def / ${iv_c} SpA / ${iv_d} SpD / ${iv_s} Spe${move1}${move2}${move3}${move4}

# Misc Pokémon Info
* Language: ${lang}
* Pokérus: ${pkrs}
* Max PPs: ${maxPP}
* Hyper Training: ${ht}

# Meeting Info
* Game: ${met_game}
* Met Location: ${met_loc}
* Poké Ball: ${ball} Ball
* Met Level: ${met_lv}

# Trainer Info
* OT: ${ot} (${ot_gender})
* Passport ID: ${ppid}
* TID: ${tid}
* SID: ${sid}

# GTS Deposit
* IGN: ${ign}
* FC: ${fc}
* Deposit: ${gts_pkmn} ${gts_gender}Lv.${gts_lv} in ${gts_ball} Ball
* Message: "${gts_msg}"

* Additional Notes: ${notes}`)}
