/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/*!********************!*\
  !*** ./js/main.ts ***!
  \********************/

var teacher3 = {
    firstName: 'Abdulrahman',
    fullTimeEmployee: false,
    lastName: 'Alghamdi',
    location: 'Riyadh',
    contract: false,
};
console.log(teacher3);
var director1 = {
    firstName: 'Saad',
    lastName: 'Saeed',
    location: 'Albaha',
    fullTimeEmployee: true,
    numberOfReports: 28,
};
console.log(director1);
var printTeacher = function (firstName, lastName) {
    return firstName[0] + ". " + lastName;
};
console.log(printTeacher("Abdulrhamn", "Dhaifallah"));
var StudentClass = /** @class */ (function () {
    function StudentClass(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    StudentClass.prototype.workOnHomework = function () {
        return "Currently working";
    };
    StudentClass.prototype.displayName = function () {
        return this.firstName;
    };
    return StudentClass;
}());
// Test it
var student = new StudentClass("Abdulrahman", "Dhaifallah");
console.log(student.workOnHomework());
console.log(student.displayName());

/******/ })()
;
