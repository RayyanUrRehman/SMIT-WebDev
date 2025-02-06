"use strict";
class Person {
    constructor(name, age) {
        this.Name = name;
        this.age = age;
    }
    getDetails() {
        return `${this.Name} is ${this.age} years old.`;
    }
}
class Student extends Person {
    constructor(name, age, grade) {
        super(name, age);
        this.grade = grade;
    }
    getStudentInfo() {
        return `${this.getDetails()} They are in grade ${this.grade}.`;
    }
}
const student = new Student("Ali", 20, "A");
console.log(student.getStudentInfo());
