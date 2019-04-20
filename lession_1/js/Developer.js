class Developer extends Employee {
    constructor(name) {
        super();
        this.name = name;
        this.nameManager;
    }

    edit(nameManager) {
        this.nameManager = nameManager;
    }

    set() {
        console.log(this.nameManager);
    }
}