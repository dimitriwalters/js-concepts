class Course { // subject (in observer pattern)
  private name: string;
  private active: boolean;
  private students: Student[];
  constructor(name: string, active: boolean) {
    this.name = name;
    this.active = active;
    this.students = [];
  }
  getName(): string { return this.name; }
  addStudent(student: Student): void { this.students.push(student); } // attach
  setActive(): void { // notify
    this.active = true;
    for (let std of this.students) {
      std.addCourse(this);
    }
  }
}
abstract class Student { // observer
  protected courses: Course[];
  protected average: number;
  constructor(courses: Course[], average: number) {
    this.courses = courses;
    this.average = average;
  }
  getCourses(): string[] { return this.courses.map(c => c.getName()); }
  setAverage(average: number): void { this.average = average; }
  abstract addCourse(course: Course): void;
}
class MathStudent extends Student { // concrete observer
  addCourse(course: Course): void { // update
    if (this.courses.length < 5
      || (this.courses.length >= 5 && this.average >= 80)) {
      this.courses.push(course);
    }
  }
}

// client code
let c1 = new Course("MATH 135", true);
let c2 = new Course("MATH 137", true);
let c3 = new Course("CS 135", true);
let c4 = new Course("PYSCH 101", true);
let c5 = new Course("ECON 101", false);
let c6 = new Course("ENGL 109", false);
let courses = [c1,c2,c3,c4];
let s = new MathStudent(courses, 0);
console.log(s.getCourses());
c5.addStudent(s);
c6.addStudent(s);
c5.setActive();
c6.setActive();
console.log(s.getCourses());
s.setAverage(80);
c6.setActive();
console.log(s.getCourses());

