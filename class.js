class Student {
  constructor(sId, sName) {
    this.id = sId;
    this.name = sName;
    this.class = "Five";
    this.school = "Volanath High School"; //default value
  }
}

const student1 = new Student(12, "Raja");
const student2 = new Student(10, "Rani");
const student3 = new Student(11, "Shuvo");
//console.log(student1, student2);
//access to the properties
//console.log(student1.name, student2.name);
console.log(student3);
