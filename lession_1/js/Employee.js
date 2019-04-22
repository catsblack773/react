class Employee extends Human {
    constructor(salary, department) {
        super();
        this.salary = salary;
        this.department = department;
    }

    displayInfo() {
        let s = super.displayInfo();
        return  `${s}, salary: ${this.salary}, department: ${this.department}`;
    }
}