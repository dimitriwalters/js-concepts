class Student {
  private department: string;
  public name: string;
  constructor(department: string) { this.department = department; }
  clone(): Student {
    return new Student(this.department);
  }
}
let mathStudent: Student = new Student('Math');
let artStudent: Student = new Student('Art');
let s1 = mathStudent.clone(); // prototypes
s1.name = 'Euler';
let s2 = artStudent.clone(); // prototypes
s2.name = 'Obama';
console.log(s1, s2);

