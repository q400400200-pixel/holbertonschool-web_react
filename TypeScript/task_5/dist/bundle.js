/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/*!********************!*\
  !*** ./js/main.ts ***!
  \********************/

function sumMajorCredits(subject1, subject2) {
    return {
        credits: subject1.credits + subject2.credits,
        brand: "major",
    };
}
function sumMinorCredits(subject1, subject2) {
    return {
        credits: subject1.credits + subject2.credits,
        brand: "minor",
    };
}
var majorA = { credits: 3, brand: "major" };
var majorB = { credits: 4, brand: "major" };
var minorA = { credits: 1, brand: "minor" };
var minorB = { credits: 2, brand: "minor" };
console.log(sumMajorCredits(majorA, majorB));
console.log(sumMinorCredits(minorA, minorB));

/******/ })()
;
