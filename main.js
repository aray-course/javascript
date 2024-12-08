debugger;

function kalkuloDistanceDheKalorite(shpejtsia_e_vrapimit, koha_e_vrapimit, kalorite_e_djegura_per_km) {
    let distanca = shpejtsia_e_vrapimit * koha_e_vrapimit;

    console.log("Shpejtesia e vrapimit eshte " + shpejtsia_e_vrapimit +" km/h");
    console.log("Koha e vrapimit eshte " + koha_e_vrapimit + " h");
    console.log("Distanca e vrapuar eshte " + distanca + " km");
    console.log("Kalorite e djegura jane " + distanca * kalorite_e_djegura_per_km + " c");
    console.log("---")
    let text = `<div class="test"><p>Shpejtesia e vrapimit eshte ${shpejtsia_e_vrapimit} km/h</p>
    <p>Koha e vrapimit eshte ${koha_e_vrapimit} h</p>
    <p>Distanca e vrapuar eshte ${distanca} km</p>
    <p>Kalorite e djegura jane ${distanca * kalorite_e_djegura_per_km} c</p></div>`;

    let content = document.getElementById('content').innerHTML;

    document.getElementById('content').innerHTML = content + text;


}

kalkuloDistanceDheKalorite(10, 3, 10);
kalkuloDistanceDheKalorite(15, 2.5, 20);
kalkuloDistanceDheKalorite(20, 2, 40);
kalkuloDistanceDheKalorite(10, 3, 3.4);
kalkuloDistanceDheKalorite(100, 3.5, 3.4);
