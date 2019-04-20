class Employee extends Human {
    constructor() {
        super();
        this.salary = 12;
        this.department = 'String';
    }

    displayInfo() {
        let s = super.displayInfo();
        return  s + ', salary: ' + this.salary +
                ', department: ' + this.department;
    }
}