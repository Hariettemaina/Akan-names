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

