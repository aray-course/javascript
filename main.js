const legalAdultAge = 18;

//== is it equal or is not different
// < smaller than
//<= smaller than or equal
// > greater than
//>= greater than or equal
//!= not equal or is different
//&& and
//|| ose
function canIDrink(myAge){
    debugger;
    if(myAge < legalAdultAge){
        console.log("I am NOT old enough to drink");
    }else if(myAge >= 120){
        console.log("I am dead");
    }else if(myAge >= 50){
        console.log("I am too old to drink");
    }else{
        console.log("I am old enough to drink");
    }
}

