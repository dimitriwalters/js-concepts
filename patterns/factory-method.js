const FACULTY = "MATH";
class MathStudent {
    constructor(name) { this.name = name; }
    getName() { return this.name; }
    getTuition() { return 1500; }
}
class Department {
    constructor() {
        this.students = [];
    }
    getStudents() { return this.students; }
    addStudent(s) { this.students.push(s); }
    createStudent(name) {
        let student;
        if (FACULTY == "MATH") {
            student = new MathStudent(name);
        }
        else {
            student = null;
        }
        return student;
    }
}
// client code
let dpt = new Department();
dpt.addStudent(dpt.createStudent("euler"));
dpt.addStudent(dpt.createStudent("obama"));
console.log(dpt.getStudents());
