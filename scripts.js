var CC, YY, MM, DD, mod, dayValue;
let dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
let maleNames = ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"];
let femaleNames = ["Akosua", "Adwoa", "Abenaa", "Akua", " Yaa", "Afua", "Ama"];


function calculateDayValue() {
    year = document.getElementById("year").value;
    CC = parseInt(year.substring(0, 2));
    YY = parseInt(year.substring(2, 4));
    MM = parseInt(document.getElementById("month").value);
    DD = parseInt(document.getElementById("date").value);
    d = (((CC / 4) - 2 * CC - 1) + ((5 * YY / 4)) + ((26 * (MM + 1) / 10)) + DD) % 7;
    console.log(d);
    return (Math.floor(d));
}
function getGender(){
    var genders = document.getElementsByName("gender");
    if (genders[0].checked == true) {
        var gender = "male";
    }
    else if(genders[1].checked == true){
        var gender = "female";
    }
    else{
        return false;
    }
    switch(gender){
        case "male";
        if (dayValue ==1) {
            alert(`You were born on ${dayNames[0]}and your Akan name is ${maleNames[0]}.`)
        }
    }
}
