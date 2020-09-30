const PERMISSION = "MATH";
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
    createStudent(name) { return null; } // <-- factory method
}
class MathDepartment extends Department {
    createStudent(name) {
        let student = new MathStudent(name);
        return student;
    }
}
// client code
let dpt;
if (PERMISSION == "MATH") {
    dpt = new MathDepartment();
}
else {
    dpt = null;
}
dpt.addStudent(dpt.createStudent("euler"));
dpt.addStudent(dpt.createStudent("obama"));
console.log(dpt.getStudents());
