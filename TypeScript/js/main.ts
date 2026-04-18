interface Teacher {
    readonly firstName: string;
    readonly lastName: string;
    fullTimeEmployee: boolean;
    yearsOfExperience?: number;
    location: string;
    [propName: string]: any;
}

const teacher3: Teacher = {
    firstName: 'Abdulrahman',
    fullTimeEmployee: false,
    lastName: 'Alghamdi',
    location: 'Riyadh',
    contract: false,
};

console.log(teacher3);


interface Directors extends Teacher  {
  numberOfReports: number;
}

const director1: Directors = {
    firstName: 'Saad',
    lastName: 'Saeed',
    location: 'Albaha',
    fullTimeEmployee: true,
    numberOfReports: 28,
};
console.log(director1);


interface printTeacherFunction {
(firstName: string, lastName: string): string
}

const printTeacher: printTeacherFunction = (firstName, lastName) => {
    return firstName[0] + ". " + lastName;
};

console.log(printTeacher("Abdulrhamn", "Dhaifallah"));

interface StudentConstructor {
    new(firstName: string, lastName: string): StudentClassInterface;
}

interface StudentClassInterface {
    workOnHomework(): string;
    displayName(): string;
}

class StudentClass implements StudentClassInterface {
    firstName: string;
    lastName: string;

    constructor(firstName: string, lastName: string) {
        this.firstName = firstName;
        this.lastName = lastName;
    }

    workOnHomework(): string {
        return "Currently working";
    }

    displayName(): string {
        return this.firstName;
    }
}

// Test it
const student = new StudentClass("Abdulrahman", "Dhaifallah");
console.log(student.workOnHomework());
console.log(student.displayName()); 
