    interface student {
        firstName: string
        lastName: string
        age: number
        location: string
    }

    const student1: student = {
        firstName: "Abdulrahman" ,
        lastName: "Dhaifallah" ,
        age: 26 ,
        location: "Riyadh"
    };

    const student2: student = {
        firstName: "Dhaifallah" ,
        lastName: "Abdulrahman" ,
        age: 62 ,
        location: "Jeddah"
    };

    const studentsList: student[] = [student1, student2];

    const table = document.createElement("table");
const tbody = document.createElement("tbody");

studentsList.forEach((student) => {
    const row = document.createElement("tr");
    
    const firstNameCell = document.createElement("td");
    const locationCell = document.createElement("td");

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
