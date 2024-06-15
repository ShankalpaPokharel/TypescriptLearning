"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function addTwo(num) {
    // num.toUpperCase() //error
    return num + 2;
    // return "hello"
}
function getUpper(val) {
    return val.toUpperCase();
}
function signUpUser(name, email, password, isPaid) {
}
var loginUser = function (name, email, isPaid) {
    if (isPaid === void 0) { isPaid = false; }
};
var getHellow = function (s) {
    return "";
};
var heros = [2, "thor", "spiderman", "ironman", 1];
heros.map(function (hero) {
    return "hero is ".concat(hero);
});
getUpper("hello");
addTwo(5);
signUpUser("shankalpa", "shankalpa@gmail.com", "fhsfa34", true);
loginUser("h", "h@g.com");
