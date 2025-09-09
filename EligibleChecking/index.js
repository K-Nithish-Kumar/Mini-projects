const birthDateInput = document.getElementById('birthDate');
const initialAge = 18;
const eligible = document.getElementById('eligibleOrNot');
const verifyButton=document.getElementById('verifyButton');

function calculateAge(birthdateString) {
    const today = new Date();
    const birthDate = new Date(birthdateString);
    let age = today.getFullYear()-birthDate.getFullYear();

    const monthDiff = today.getMonth() - birthDate.getMonth();
    if(monthDiff<0 ||(monthDiff=== 0 && today.getDate()<birthDate.getDate())) {
        age--;
    }
    return age;
}

function verify(age) {
    if(age >= initialAge) {
        eligible.innerHTML = `Your age is ${age}! you are Eligible`;
    } else {
        eligible.innerHTML ='Not Eligible';
    }
}

verifyButton.addEventListener("click", function(){
    event.preventDefault();
    const age = calculateAge(birthDateInput.value);
    verify(age);
});