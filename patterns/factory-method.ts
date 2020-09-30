const FACULTY = "MATH"

interface Student {
  getName(): string;
  getTuition(): number;
} class MathStudent implements Student {
  private name: string;
  constructor(name: string) { this.name = name; }
  getName() { return this.name; }
  getTuition() { return 1500; }
}

class Department {
  private students: Student[] = [];
  getStudents(): Student[] { return this.students; }
  addStudent(s: Student): void { this.students.push(s); }
  createStudent(name: string): Student { // factory <-- logic in here
    let student: Student;
    if (FACULTY == "MATH") {
      student = new MathStudent(name);
    } else {
      student = null;
    }
    return student
  }
}

// client code
let dpt = new Department();
dpt.addStudent(dpt.createStudent("euler"));
dpt.addStudent(dpt.createStudent("obama"));
console.log(dpt.getStudents());
