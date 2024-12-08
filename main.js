// Koha e vrapimit ne kilometer per ore
let shpejtsia_e_vrapimit = 18;
// Koha e vrapimit ne ore
let koha_e_vrapimit = 5;

let kalorite_e_djegura_per_km = 100;

let distanca = shpejtsia_e_vrapimit * koha_e_vrapimit;

document.getElementById("shpejtesia-e-vrapimit").innerHTML = shpejtsia_e_vrapimit;
document.getElementById("koha-e-vrapimit").innerHTML = koha_e_vrapimit;
document.getElementById("distanca-e-vrapimit").innerHTML = distanca;
