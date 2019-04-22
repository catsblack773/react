class Human {
    constructor(name, age, dateOfBirth) {
        this.name = name;
        this.age = age;
        this.dateOfBirth = dateOfBirth;
    }

    displayInfo() {
        return `name: ${this.name}, age: ${this.age}, dateOfBirth: ${this.dateOfBirth}`;
    }
}
