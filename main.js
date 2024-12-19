let nxenesit = [
    "Bardh",
    "Endrit",
    "Redon",
    "End",
    1,
    "Ylber",
    "Taunita"
];

addListItem(nxenesit[0]);
addListItem(nxenesit[1]);
addListItem(nxenesit[2]);
addListItem(nxenesit[3]);
addListItem(nxenesit[5]);
addListItem(nxenesit[6]);

function addListItem(text) {
    let list = document.getElementById("ditari");
    list.innerHTML = list.innerHTML + "<li>"  + text + "</li>";
}
