debugger;
let distanca;
function kalkuloDistanceDheKalorite(shpejtsia_e_vrapimit, koha_e_vrapimit, kalorite_e_djegura_per_km) {
    distanca = shpejtsia_e_vrapimit * koha_e_vrapimit;

    console.log("Shpejtesia e vrapimit eshte " + shpejtsia_e_vrapimit +" km/h");
    console.log("Koha e vrapimit eshte " + koha_e_vrapimit + " h");
    console.log("Distanca e vrapuar eshte " + distanca + " km");
    console.log("Kalorite e djegura jane " + distanca * kalorite_e_djegura_per_km + " c");
    console.log("---")
}

function kalkuloDistanceDheNxehtisne(shpejtsia_e_vrapimit, koha_e_vrapimit, nxetesia_e_krijuar_per_km) {
    distanca = shpejtsia_e_vrapimit * koha_e_vrapimit;

    console.log("Shpejtesia e vrapimit eshte " + shpejtsia_e_vrapimit +" km/h");
    console.log("Koha e vrapimit eshte " + koha_e_vrapimit + " h");
    console.log("Distanca e vrapuar eshte " + distanca + " km");
    console.log("Nxehtisine trupore e krijuar eshte " + distanca * nxetesia_e_krijuar_per_km + " C");
    console.log("---")
}

function tregoDistancen() {
    console.log(distanca);
}

kalkuloDistanceDheKalorite(10, 3, 10);
kalkuloDistanceDheNxehtisne(10, 3, 10);
console.log(distanca);
