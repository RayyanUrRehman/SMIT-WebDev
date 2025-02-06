class Person {
    private name: string;
    private age: number;

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }

    protected getDetails(): string {
        return `${this.name} is ${this.age} years old.`;
    }
}

class Student extends Person {
    private grade: string;

    constructor(name: string, age: number, grade: string) {
        super(name, age);
        this.grade = grade;
    }

    public getStudentInfo(): string {
        return `${this.getDetails()} They are in grade ${this.grade}.`;
    }
}

const student = new Student("Ali", 20, "A");
console.log(student.getStudentInfo());
