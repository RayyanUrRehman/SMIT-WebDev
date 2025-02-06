"use strict";
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    getDetails() {
        return `${this.name} is ${this.age} years old.`;
    }
}
class Student extends Person {
    constructor(name, age, grade) {
        super(name, age);
        this.grade = grade;
    }
    getStudentInfo() {
        return `${this.getDetails()} He is in grade ${this.grade}.`;
    }
}
const student = new Student("Ali", 20, "A");
console.log(student.getStudentInfo());
