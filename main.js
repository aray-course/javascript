// adenine (A), cytosine (C), guanine (G), and thymine (T)
const adenine = "A";
const cytosine = "C";
const guanine = "G";
const thymine = "T";

let dna = adenine + cytosine + cytosine + guanine + thymine;



//ACCGT - syte e kalter;
//CGAAT - kater kembe
//TTCGT - Ka tentakluta

//first creaure has blue eyes and four legs
let creature1DNA = adenine + cytosine + cytosine + guanine + thymine + cytosine + guanine + thymine + thymine + adenine;
document.getElementById("creature-1-dna").innerHTML = creature1DNA;
//second creaure has blue eyes
let creature2DNA = adenine + cytosine + cytosine + guanine + thymine;
document.getElementById("creature-2-dna").innerHTML = creature2DNA;
//third creaure has blue eyes and four legs and has tentacles
let creature3DNA = adenine + cytosine + cytosine + guanine + thymine + cytosine + guanine + thymine + thymine + adenine+ thymine + guanine + cytosine + thymine + thymine;
document.getElementById("creature-3-dna").innerHTML = creature3DNA;
//fourth creaure has tentacles
let creature4DNA = thymine + guanine + cytosine + thymine + thymine;
document.getElementById("creature-4-dna").innerHTML = creature4DNA;
//fifth creaure has four legs and has tentacles
let creature5DNA = adenine + cytosine + cytosine + guanine + thymine + thymine + guanine + cytosine + thymine + thymine;
document.getElementById("creature-5-dna").innerHTML = creature5DNA;


//first creaure has blue eyes and four legs
creature1DNA = getBlueEyesDNA() + getFourLegsDNA();
document.getElementById("creature-1-dna").innerHTML = creature1DNA;
//second creaure has blue eyes
creature2DNA = getBlueEyesDNA();
document.getElementById("creature-2-dna").innerHTML = creature2DNA;
//third creaure has blue eyes and four legs and has tentacles
creature3DNA = getBlueEyesDNA() + getFourLegsDNA() + getTentaclesDNA();
document.getElementById("creature-3-dna").innerHTML = creature3DNA;
//fourth creaure has tentacles
creature4DNA = getTentaclesDNA();
document.getElementById("creature-4-dna").innerHTML = creature4DNA;
//fifth creaure has four legs and has tentacles
creature5DNA = getFourLegsDNA();
document.getElementById("creature-5-dna").innerHTML = creature5DNA;


function getBlueEyesDNA() {
    return adenine + cytosine + cytosine + guanine + thymine;
}

function getFourLegsDNA() {
    return cytosine + guanine + thymine + thymine + adenine;
}

function getTentaclesDNA() {
    return thymine + thymine + cytosine + guanine + thymine;
}

