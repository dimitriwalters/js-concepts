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
  importNewStudents(names: string[]): Student[] {
    let std1 = this.createStudent(names[0]);
    let std2 = this.createStudent(names[1]);
    return [std1, std2];
  }
  createStudent(name: string): Student { return null; } // <-- factory method
} class MathDepartment extends Department {
  createStudent(name: string): Student {
    let student = new MathStudent(name);
    return student;
  }
}

// client code
let dpt = new MathDepartment();
let stds = dpt.importNewStudents(["euler", "obama"]);
console.log(stds);
