/*eslint-env browser*/

//STEP 1 NUMBER OF DAYS IN THE MONTH
var d = new Date();
window.console.log(d.getDate());


function whatMonth(usrDate) {
    "use strict";
    var month = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
        d = new Date(usrDate),
        name = month[d.getMonth()];
    window.console.log(name);
}
whatMonth("1999, 07, 24");


function isWeekend(yourDate) {
    "use strict";
    var dt = new Date(yourDate), x = dt.getDay();
    if (x === 6 || x === 0) {
        window.console.log("It's a weekend");
    } else {
        window.console.log("Not a weekend");
    }
}
isWeekend("10, 24, 2020");

function whatDay() {
    "use strict";
    var day = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
        d = new Date(),
        name = day[d.getDay() - 1];
    if (name === -1) {
        window.console.log("Sunday");
    } else {
        window.console.log(name);
    }
}
whatDay();


function wD() {
    "use strict";
    var dayName = ["S", "M", "T", "W", "T", "F", "S", "S"],
        d = new Date(),
        name = dayName[d.getDay()];
    window.console.log(name);
}
wD();