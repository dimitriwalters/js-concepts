class Student {
    constructor(department) { this.department = department; }
    clone() {
        return new Student(this.department);
    }
}
let mathStudent = new Student('Math');
let artStudent = new Student('Math');
let s1 = mathStudent.clone();
s1.name = 'Euler';
let s2 = artStudent.clone();
s2.name = 'Obama';
console.log(s1, s2);
