import { Subjects } from "./subjects/Teacher";
import { Subjects as SubjectsCpp } from "./subjects/Cpp";
import { Subjects as SubjectsJava } from "./subjects/Java";
import { Subjects as SubjectsReact } from "./subjects/React";

const cpp = new SubjectsCpp.Cpp();
const java = new SubjectsJava.Java();
const react = new SubjectsReact.React();

const cTeacher: Subjects.Teacher = {
  firstName: "Abdulrahman",
  lastName: "Alghamdi",
  experienceTeachingC: 10,
};

cpp.setTeacher(cTeacher);
console.log(cpp.getRequirements());
console.log(cpp.getAvailableTeacher());

java.setTeacher(cTeacher);
console.log(java.getRequirements());
console.log(java.getAvailableTeacher());

react.setTeacher(cTeacher);
console.log(react.getRequirements());
console.log(react.getAvailableTeacher());
