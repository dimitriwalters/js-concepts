class Student {
    constructor(department) { this.department = department; }
    clone() {
        return new Student(this.department);
    }
}
let mathStudent = new Student('Math');
let artStudent = new Student('Art');
let s1 = mathStudent.clone(); // prototypes
s1.name = 'Euler';
let s2 = artStudent.clone(); // prototypes
s2.name = 'Obama';
console.log(s1, s2);
