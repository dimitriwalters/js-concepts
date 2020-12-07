class Course {
    constructor(subject, code) {
        this.subject = subject;
        this.code = code;
    }
}
class Grade {
    constructor(course, grade) {
        this.course = course;
        this.grade = grade;
    }
}
class Student {
    constructor(grades) { this.grades = grades; }
}
class CSPolicy {
    getSubject() { return "CS"; }
}
class Transcript {
    constructor(student, policy) {
        this.student = student;
        this.policy = policy;
    }
    getMajorAvg() {
        let total = 0;
        let numCourses = 0;
        for (let g of this.student.grades) {
            if (g.course.subject == this.policy.getSubject()) {
                total += g.grade;
                numCourses += 1;
            }
        }
        return total / numCourses;
    }
}
// client code
let c1 = new Course("CS", 135);
let c2 = new Course("PSYCH", 101);
let g1 = new Grade(c1, 75);
let g2 = new Grade(c2, 80);
let s = new Student([g1, g2]);
let csPolicy = new CSPolicy();
let myTranscript = new Transcript(s, csPolicy);
console.log(myTranscript.getMajorAvg());
