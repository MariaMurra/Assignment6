/*eslint-env browser*/

function stepOne(val) {
    "use strict";
    var toSort = val.split("").sort().join("");
    window.console.log(toSort);
}
stepOne("webmaster");


function stepTwo(str) {
    "use strict";
    var separate = str.split(" "), newStr = [], i;
    
    for (i = 0; i < separate.length; i += 1) {
        newStr.push(separate[i].charAt(0).toUpperCase() + separate[i].slice(1));
    }
    return newStr.join(" ");
}
window.console.log(stepTwo("the quick brown fox"));


function step3(countEm) {
    "use strict";
    var vowels = "aeiouAEIOU", vCount = 0, i;
    for (i = 0; i < countEm.length; i += 1) {
        if (vowels.indexOf(countEm[i]) !== -1) {
            vCount += 1;
        }
    }
    return vCount;
}
window.console.log(step3("The quick brown fox"));


function step4(id) {
    "use strict";
    var text = "",
        letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",
        i;
    for (i = 0; i < id; i += 1) {
        text += letters.charAt(Math.floor(Math.random() * letters.length));
    }
    return text;
}
window.console.log(step4(8));
    



function step5(country) {
    "use strict";
    return country.reduce(function (names, country) {
        return names.length > country.length ? names : country;
    },
        "");
}
window.console.log(step5(["Australia", "Germany", "United States of America", "Estados Unidos Mexicanos"]));



