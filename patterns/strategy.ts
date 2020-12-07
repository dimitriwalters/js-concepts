class Transcript { // context
  private student: Student;
  private policy: Policy; // strategy
  constructor(student: Student, policy: Policy) {
    this.student = student;
    this.policy = policy;
  }
  getMajorAvg(): number {
    let total = 0
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
interface Policy { // strategy interface
  getSubject(): string;
}
class CSPolicy implements Policy { // concrete strategy
  getSubject(): string { return "CS"; }
}

// other classes
class Course {
  subject: string;
  code: number;
  constructor(subject: string, code: number) {
    this.subject = subject;
    this.code = code;
  }
}
class Grade {
  course: Course;
  grade: number;
  constructor(course: Course, grade: number) {
    this.course = course;
    this.grade = grade;
  }
}
class Student {
  grades: Grade[];
  constructor(grades: Grade[]) { this.grades = grades; }
}

// client code
let c1 = new Course("CS", 135);
let c2 = new Course("PSYCH", 101);
let csPolicy = new CSPolicy();

let g1 = new Grade(c1, 75);
let g2 = new Grade(c2, 80);
let s = new Student([g1, g2]);
let myTranscript = new Transcript(s, csPolicy);
console.log(myTranscript.getMajorAvg());
