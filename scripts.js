/*var CC, YY, MM, DD, mod, dayValue;
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
        case "male":
        if (dayValue ==1) {
            alert(`You were born on ${dayNames[0]}and your Akan name is ${maleNames[0]}.`)
        }
        else if(dayValue == 2){
            alert(`You were born on ${dayNames[1]}and your Akan name is ${maleNames[1]}.`)
        }
        else if(dayValue == 3){
            alert(`You were born on ${dayNames[2]}and your Akan name is ${maleNames[2]}.`)
        }
        else if(dayValue == 4){
            alert(`You were born on ${dayNames[3]}and your Akan name is ${maleNames[3]}.`)       
        }
        else if(dayValue == 5){
            alert(`You were born on ${dayNames[4]}and your Akan name is ${maleNames[4]}.`)
        }
        else if(dayValue == 6){
            alert(`You were born on ${dayNames[5]}and your Akan name is ${maleNames[5]}.`)
        }
        else if(dayValue == -0){
            alert(`You were born on ${dayNames[6]}and your Akan name is ${maleNames[6]}.`)
        }
        break;
        case "female":
            if (dayValue == 1){
                alert(`You were born on ${dayNames[0]}and your Akan name is ${femaleNames[0]}.`)
            }
            else if(dayValue == 2){
                alert(`You were born on ${dayNames[1]}and your Akan name is ${femaleNames[1]}.`)
            }
            else if(dayValue == 3){
                alert(`You were born on ${dayNames[2]}and your Akan name is ${femaleNames[2]}`)
            }
            else if(dayValue == 4){
                alert(`You were born on ${dayNames[3]}and your Akan name is ${femaleNames[3]}`)
            }
            else if(dayValue == 5){
                alert(`You were born on ${dayNames[4]}and your Akan name is ${femaleNames[4]}`)
            }
            else if(dayValue == 6){
                alert(`You were born on ${dayNames[5]}and your Akan name is ${femaleNames[5]}`)
            }
            else if(dayValue == -0){
                alert("You were born on " +dayNames[6] + " and Your akan name is " +femaleNames[6]+"!")
            }
    }
}
function findName(){
    dayValue = calculateDayValue();
    getGender();
}*/


var maleNames = ['Kwasi', 'Kwadwo', 'Kwabena', 'Kwaku', 'Yaw', 'Kofi', 'Kwame'];
var femaleNames = ['Akosua', 'Adwoa', 'Abenaa', 'Akua', 'Yaa', 'Afua', 'Ama'];

function check() {
    var gender = document.getElementById("gender").value;
    var day = document.getElementById("day").value;
    var dd = parseInt(day);
    var month = document.getElementById("month").value;
    var mm = parseInt(month);
    var year = document.getElementById("year").value;
    var yy = parseInt(year.substr(2, 4));
    var cc = parseInt(year.substr(0, 2));

    var birthDay = parseInt(((cc / 4) - 2 * cc - 1) + ((5 * yy / 4)) + ((26 * (mm + 1) / 10)) + dd) % 7;

    if (dd <= 0 || dd > 31) {
        alert("enter valid date");
    }
    else if (mm <= 0 || mm > 12) {
        alert("enter valid month");
    }
    else if (year <= 0) {
        alert("enter valid year");
    }
    if (gender === "male") {
        alert("your name is " + maleNames[birthDay]);
    }
    else if (gender === "female") {
        alert("your name is " + femaleNames[birthDay]);
    }
}

