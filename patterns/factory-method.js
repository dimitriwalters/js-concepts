class MathStudent {
    constructor(name) { this.name = name; }
    getName() { return this.name; }
    getTuition() { return 1500; }
}
class Department {
    importNewStudents(names) {
        let std1 = this.createStudent(names[0]);
        let std2 = this.createStudent(names[1]);
        return [std1, std2];
    }
    createStudent(name) { return null; } // <-- factory method
}
class MathDepartment extends Department {
    createStudent(name) {
        let student = new MathStudent(name);
        return student;
    }
}
// client code
let dpt = new MathDepartment();
let stds = dpt.importNewStudents(["euler", "obama"]);
console.log(stds);
