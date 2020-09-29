class MathStudent {
    constructor(name) { this.name = name; }
    getName() { return this.name; }
    getTuition() { return 1500; }
}
class Department {
    createStudent(name) { return null; }
}
class MathDepartment extends Department {
    createStudent(name) {
        let student = new MathStudent(name);
        return student;
    }
}
let students = [];
let d = new MathDepartment();
students.push(d.createStudent("euler"));
students.push(d.createStudent("obama"));
console.log(students);
