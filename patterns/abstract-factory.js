class MathFullTimeStudent {
    constructor(name) { this.name = name; }
    getName() { return this.name; }
    getTuition() { return 2000; }
}
class MathPartTimeStudent {
    constructor(name) { this.name = name; }
    getName() { return this.name; }
    getTuition() { return 1000; }
}
class MathStudentFactory {
    createFullTimeStudent(name) {
        let student = new MathFullTimeStudent(name);
        return student;
    }
    createPartTimeStudent(name) {
        let student = new MathPartTimeStudent(name);
        return student;
    }
}
let f = new MathStudentFactory();
let full = f.createFullTimeStudent("scholar");
let part = f.createPartTimeStudent("hobbyist");
console.log(full, part);
