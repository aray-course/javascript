let nxenesit = [
    "Bardh",
    "Endrit",
    "Redon",
    "End",
    "Taunita",
    "Bardh",
    "Endrit",
    "Redon",
    "End",
    "Taunita",
    "Taunita",
    "Bardh",
    "Endrit",
    "Redon",
    "End",
    "Taunita",
];

console.log("Length", nxenesit.length);

//eSataHere = eSataHere + 1;
//eSataHere++;
debugger;
for (let i = 0; i < nxenesit.length; i++) {
    addListItem(nxenesit[i]);
}

//addListItem(nxenesit[0]);
//addListItem(nxenesit[1]);
//addListItem(nxenesit[2]);
//addListItem(nxenesit[3]);
//addListItem(nxenesit[4]);
//addListItem(nxenesit[5]);
//addListItem(nxenesit[6]);
//addListItem(nxenesit[7]);

function addListItem(text) {
    let list = document.getElementById("ditari");
    list.innerHTML = list.innerHTML + "<li>"  + text + "</li>";
}
