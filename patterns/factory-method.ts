const PERMISSION = "MATH";

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
  createStudent(name: string): Student { return null; } // <-- factory method
} class MathDepartment extends Department {
  createStudent(name: string): Student {
    let student = new MathStudent(name);
    return student;
  }
}

// client code
let dpt: Department;
if (PERMISSION == "MATH") {
  dpt = new MathDepartment();
} else {
  dpt = null;
}
dpt.addStudent(dpt.createStudent("euler"));
dpt.addStudent(dpt.createStudent("obama"));
console.log(dpt.getStudents());
