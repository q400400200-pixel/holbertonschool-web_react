/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/*!********************!*\
  !*** ./js/main.ts ***!
  \********************/

var student1 = {
    firstName: "Abdulrahman",
    lastName: "Dhaifallah",
    age: 26,
    location: "Riyadh"
};
var student2 = {
    firstName: "Dhaifallah",
    lastName: "Abdulrahman",
    age: 62,
    location: "Jeddah"
};
var studentsList = [student1, student2];
var table = document.createElement("table");
var tbody = document.createElement("tbody");
studentsList.forEach(function (student) {
    var row = document.createElement("tr");
    var firstNameCell = document.createElement("td");
    var locationCell = document.createElement("td");
    firstNameCell.textContent = student.firstName;
    locationCell.textContent = student.location;
    row.appendChild(firstNameCell);
    row.appendChild(locationCell);
    tbody.appendChild(row);
});
table.appendChild(tbody);
document.body.appendChild(table);
if (document.body) {
    document.body.appendChild(table);
}
/******/ })()
;
