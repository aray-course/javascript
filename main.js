let fjala1;
fjala1 = "Koha";

let fjala2;
fjala2 = "Ditore"

let titulli_i_faqes;

titulli_i_faqes = fjala1 + " " + fjala2;

document.getElementById('title').innerHTML = titulli_i_faqes;

let njerez_ne_lift;
njerez_ne_lift = 14;

let pesha_per_person;
pesha_per_person = 90.3;

pesha_per_person = 10.2;

let pesha_ne_lift;
pesha_ne_lift = njerez_ne_lift * pesha_per_person;

document.getElementById('njerz-ne-lift').innerHTML = njerez_ne_lift;
document.getElementById('pesha-ne-lift').innerHTML = pesha_ne_lift;

debugger;

function kalkuloPermbatjenEStringutTeLajmeveTeDites(perseritjet) {
    let permbatja_e_elementit_lajmet_e_dites;
    permbatja_e_elementit_lajmet_e_dites = "";

    for (let index = 0; index < perseritjet; index++) {
        permbatja_e_elementit_lajmet_e_dites = permbatja_e_elementit_lajmet_e_dites + "<article></article>";
    }

    return permbatja_e_elementit_lajmet_e_dites;
}

let numri_i_artikujve;
numri_i_artikujve = 10;

let te_gjitha_lajmet;
te_gjitha_lajmet = kalkuloPermbatjenEStringutTeLajmeveTeDites(numri_i_artikujve);
document.getElementById('lajmet-e-dites').innerHTML = te_gjitha_lajmet;

let gjysa_e_lajmeve;
gjysa_e_lajmeve = kalkuloPermbatjenEStringutTeLajmeveTeDites(numri_i_artikujve / 2);
document.getElementById('lajmet-e-dites-2').innerHTML = gjysa_e_lajmeve;

