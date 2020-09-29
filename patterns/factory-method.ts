interface Student {
  getName(): string;
  getTuition(): number;
}
class MathStudent implements Student {
  private name: string;
  constructor(name: string) { this.name = name; }
  getName() { return this.name; }
  getTuition() { return 1500; }
}

class Department {
  createStudent(name: string): Student { return null; }
}
class MathDepartment extends Department {
  createStudent(name: string): Student {
    let student = new MathStudent(name);
    return student;
  }
}

let students: Student[] = [];
let d: Department = new MathDepartment();
students.push(d.createStudent("euler"));
students.push(d.createStudent("obama"));
console.log(students);
