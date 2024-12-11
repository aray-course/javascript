var firstname = "Redon";
var lastname = "Tahiri";

console.log("1:", firstname, lastname);

function getFullName(firstname, lastname, vjet) {
    firstname = "Bardh";
    return firstname + ' ' + lastname + ' i ka ' + vjet + ' vjet';
}

function showAlert() {
    debugger;
    let test = getFullName(firstname, lastname, 21);
    alert(test)
}

console.log('2:', "Fullname is", getFullName());