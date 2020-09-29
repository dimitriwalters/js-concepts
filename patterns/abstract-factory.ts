interface FullTimeStudent {
  getName(): string;
  getTuition(): number;
} interface PartTimeStudent {
  getName(): string;
  getTuition(): number;
}
interface StudentFactory {
  createFullTimeStudent(name: string): FullTimeStudent;
  createPartTimeStudent(name: string): PartTimeStudent;
}

class MathFullTimeStudent implements FullTimeStudent {
  private name: string;
  constructor(name: string) { this.name = name; }
  getName() { return this.name; }
  getTuition() { return 2000; }
} class MathPartTimeStudent implements FullTimeStudent {
  private name: string;
  constructor(name: string) { this.name = name; }
  getName() { return this.name; }
  getTuition() { return 1000; }
}
class MathStudentFactory implements StudentFactory {
  createFullTimeStudent(name: string) {
    let student = new MathFullTimeStudent(name);
    return student;
  }
  createPartTimeStudent(name: string) {
    let student = new MathPartTimeStudent(name);
    return student;
  }
}

let f = new MathStudentFactory();
let full = f.createFullTimeStudent("scholar");
let part = f.createPartTimeStudent("hobbyist");
console.log(full, part);
